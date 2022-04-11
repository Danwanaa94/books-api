function auth(req, res, next) {
    let isVerified = true;
    if(isVerified) {
        console.log("loggeg in successfully")
        next()
    }else{
        console.log("Not authorised")
        throw Error;
    }
}

module.exports = auth