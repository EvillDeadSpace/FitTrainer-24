import User from "../models/UserSchema.js";

export const getUpdateUser = async (req, res) =>{
    const id = req.params.id;

    try {
        const updateUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new: true});
        res.status(200).json({success:true , message: "User updated successfully", updateUser});


    }catch (error){
        res.status(500).json({success:true , message: "Faild to update", updateUser});
    }

}
//
export const getDeliteUser = async (req, res) =>{
    const id = req.params.id;

    try {
        const deliteUser = await User.findByIdAndDelete(id, {$set:req.body}, {new: true});
        res.status(200).json({success:true , message: "User delite successfully", deliteUser});


    }catch (error){
        res.status(500).json({success:true , message: "Faild to delite", deliteUser});
    }

}
//
export const getSignelUser = async (req, res) =>{
    const id = req.params.id;

    try {
        const signUser = await User.findById(id).select("-password");
        res.status(200).json({
            success:true ,
            message: "User successfully find ",
            data: signUser,
            id});


    }catch (error){
        res.status(500).json({success:false , message: "Faild to find user", id});
    }
}

//

export const getAllUser = async (req, res) =>{

    try {
        const users = await User.find({}).select("-password");
        res.status(200).json({success:true , message: "Users successfully find ", users});


    }catch (error){
        res.status(500).json({success:false , message: "Faild to find user", users});
    }
}