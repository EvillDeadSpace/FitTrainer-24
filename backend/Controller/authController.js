import User from "../models/UserSchema.js";
import Coach from "../models/CoachSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (existingUser) => {
  return jwt.sign(
    { id: existingUser._id, role: existingUser.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
};

export const register = async (req, res) => {
  const { username, email, password, name, role, photo, gender } = req.body;

  try {
    // Provjerite prisutnost obaveznih polja
    if (!username || !email || !password || !role) {
      return res.status(400).json({ success: false, msg: "Missing required fields" });
    }

    const existingUser = await User.findOne({ email }) || await Coach.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ success: false, msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    if (role === "user") {
      const newUser = new User({
        username,
        email,
        password: passwordHashed,
        name,
        role,
        photo,
        gender,
      });
      const savedUser = await newUser.save();
    } else if (role === "coach") {
      const newCoach = new Coach({
        username,
        email,
        password: passwordHashed,
        name,
        role,

        gender,
      });
      const savedCoach = await newCoach.save();
    } else {
      return res.status(400).json({ success: false, msg: "Invalid role" });
    }

    res.status(200).json({ success: true, msg: "User saved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: error.message || "User not saved" });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let existingUser = null;
    const user = await User.findOne({ email });
    const coach = await Coach.findOne({ email });

    if (user) {
      existingUser = user;
    }
    if (coach) {
      existingUser = coach;
    }

    if (!existingUser) {
      return res.status(400).json({ success: false, msg: "User not found" });
    }

    // Usporedba lozinki
    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid credentials" });
    }

    // Stvaranje tokena
    const token = jwt.sign({ userId: existingUser._id }, "tajna_za_jwt");

    // Izbacite osjetljive informacije iz odgovora (npr. lozinku)
    const { password: temp, ...userData } = existingUser._doc;


    res.status(200).json({
      success: true,
      msg: "User logged in",
      token,
      data: userData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};
