const notFound = (req,res,next)=>{
    const error = new Error(`Not Found -- ${req.originalUrl}`);
    res.status(404);
    next(error);
}

//This err as extra parameter let express know that it is custom error handler
//because default error handling of express is returning the html
const errorHandler = (err,req,res,next)=>{

    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.name === 'CastError' && err.kind === "ObjectId"){
        statusCode = 404;
        message = "Resource not found";
    }

    res.status(statusCode).json({
        message, // Same as-- message: message
        stack: process.env.NODE_Env === "production" ? null : err.stack
    })
}

export {
    notFound,
    errorHandler
}