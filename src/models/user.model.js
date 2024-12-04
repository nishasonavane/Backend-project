import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    
    userName:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        index:true

    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,

    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true

    },
    avatar:{
        type:String,//cloudinaru url
        required:true,

    },
    coverImage:{
        type:String//clodinari url
    },
    watchImage:[{
        type:Schema.type.objectId,
        ref:video
    }],
    password:{
        type:String,
        required:[true,'password is required']
    },
    refreshToken:{
        type:String
    }
   
},{
    timestamps:true
})
userSchema.pre("save",async function (next) {
    if(!this.isModified("password"))
        return next();

    this.password = await bcrypt.hash(this.password,10)
    next()
    
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
    
}

userSchema.methods.generateAccessToken = function (){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            userName:this.userName,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )

}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
       {
        _id:this._id
       },
       process.env.ACCESS_TOKEN_EXPIRY,
       {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
       }
    )
}


export const User = mongoose.model(User, userSchema);
