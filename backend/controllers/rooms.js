import Room from "../models/rooms";
import Hotel from "../models/Hotels.js"

export const createRoom = async (req,res,next)=>{
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try {
        const saveRoom = newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(
                hotelId,
                {$push:{rooms: saveRoom._id}}
            );
        } catch (error) {
            next(error)
        }
        res.status(200).json(saveRoom);
    } catch (error) {
        next(error)
    }
};

export const updateRoom = async (req,res,next)=>{
    try {
        const roomUpdate = await Room.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        )
        res.status(200).json(roomUpdate)
    } catch (error) {
        next(error)
    }
};

export const deleteRoom = async(req,res,next)=>{
    try {
        const roomDelete = await Room.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("room has been delete")
    } catch (error) {
        next(error)
    }
};

export const getRoom = async (req,res,next)=>{
    try {
        const room = await Room.findById(
            req.params.id
        )
        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
};

export const getAllRoom = async (req,res,next)=>{
    try {
        const rooms = await Room.find()
        res.status(200).json(rooms)
    } catch (error) {
        next(error)
    }
};