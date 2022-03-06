const mongoose=require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    specialization: {
        type: String,
        required: true
    },
    education:{
        type:String
    },
    placeOfPractice:{
        type:String
    },
    expirience:{
        type:Number
    },
    reviews:[{
        review:{
                type:String
        }
      }]
    })

const Doctor=mongoose.model('Doctor', doctorSchema)
module.exports=Doctor