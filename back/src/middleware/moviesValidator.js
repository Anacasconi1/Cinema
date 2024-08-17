const movieValidator = (req, res, next)=>{
    const {title, director, poster, year, genre, duration, rate} = req.body;

    if( !title || !director||!rate||!poster||!year||!genre||!duration){
        return res.status(400).json({
            message : "Bad Request, please fill all fields"
        })
    } else {
        next()
    }
}

module.exports= movieValidator