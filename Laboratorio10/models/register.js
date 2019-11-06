import{Mongoose} from "mongoose"

const = Mongoose require('mongoose')

const RegisterSchema = Mongoose.Schema({
    carnet:String,
    schedule:String,
    isLate: Boolean,
    datetime: Data
})

module.exports = Mongoose.model("register",RegisterSchema)