function ErrorHandler(err,req,res,next){

    res.status(err.statusCode).json({
        error: err.message
    })

}

module.exports = {ErrorHandler}