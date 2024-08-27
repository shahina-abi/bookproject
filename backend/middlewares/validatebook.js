const validateBook = (req,res,next)=>{
    const {title,author,publishYear}= req.body;

    if(!title || !author || !publishYear){
        return res.status(400).send('title,author,publishYear  are required')
    }
    next()
};

export default validateBook;