const asyncHandler = (requestHandler)=>{
    return(req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}


export {asyncHandler}


// const asyncHandler()=>{}
// const(asyncHandler)=>(func)=>{}
// const asyncHandler =>(func)=>async()=>{}

    // const asyncHandler = (fun)=>async(req,res,next)=>{

    //     try{
    //         await func (req,res,next)


    //     } catch(err){
    //         res.status(err.code||500).json({
    //             success :false,
    //             message:err.msg
    //         })


    //     }
    // }
    
 