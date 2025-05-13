import jwt from 'jsonwebtoken'

export const GenerateToken=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT,{
        expiresIn:'1d'
    })
    return token
}