exports.printMethod = (req, res, next) => {
    console.log(req.method);
    next();
};

exports.printURL = (req, res, next)=>{
    console.log(req.url)
    next()
};
