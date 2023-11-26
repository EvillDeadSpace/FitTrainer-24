import Coach from "../models/CoachSchema.js";

export const getUpdateCoach = async (req, res) =>{
    const id = req.params.id;

    try {
        const updateCoach = await Coach.findByIdAndUpdate(id, {$set:req.body}, {new: true});
        res.status(200).json({success:true , message: "Coach updated successfully", updateCoach});


    }catch (error){
        res.status(500).json({success:true , message: "Failed to update Coach", updateCoach});
    }

}
//
export const getDeleteCoach = async (req, res) =>{
    const id = req.params.id;

    try {
        const deleteCoach = await Coach.findByIdAndDelete(id, {$set:req.body}, {new: true});
        res.status(200).json({success:true , message: "Coach delete successfully", deleteCoach});

    }catch (error){
        res.status(500).json({success:true , message: "Failed to delete Coach "});
    }
}
//
export const getSingleCoach = async (req, res) =>{
    const id = req.params.id;

    try {
        const signCoach = await Coach.findById(id).select("-password");
        res.status(200).json({
            success:true ,
            message: "User successfully find ",
            data: signCoach,
            id});


    }catch (error){
        res.status(500).json({success:false , message: "Failed to find Coach", id});
    }
}

//

export const getAllCoach = async (req, res) =>{
    const  {query} = req.query;
    let coach;

    if(query){
        coach = await Coach.find({isApproved: 'Approved', $and:[{name:{$regex: query, $options: '$i'}},{specialization:{$regex: query, $options: '$i'}} ]}).select("-password")
    } else {
        coach = await Coach.find({isApproved: 'Approved'}).select("-password");
    }



    try {
        const allCoach = await Coach.find({}).select("-password");
        res.status(200).json({success:true , message: "Coach successfully find ", data: allCoach});

    }catch (error){
        res.status(500).json({success:false , message: "Failed to find Coach"});
    }
}