import express, { response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "./Routes/auth.js";
import userRoutes from "./Routes/user.js";
import coachRoutes from "./Routes/coach.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 4200;

const coreOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("Hello World");
}); //localhost:4200/
//connect to mongodb
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Ako vidis ovo konektovali smo bazu MongoDB connected");
  } catch (error) {
    console.log(error + "Ako vidis ovo nismo konektovali bazu");
  }
};

//Routes
app.use(express.json());
app.use(cookieParser());
app.use(cors(coreOptions));
app.use("/api/v1/auth", auth); //localhost:4200/api/v1/auth
app.use("/api/v1/users", userRoutes); //localhost:4200/api/v1/user
app.use("/api/v1/coaches", coachRoutes); //localhost:4200/api/v1/coach


app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
