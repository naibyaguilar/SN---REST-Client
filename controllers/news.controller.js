const userSchema = require('../models/users');
const NewsSchema = require('../models/news');

async function RenderNewPost(req, res) {
    const id = req.cookies.id;
    if(!id) return res.redirect('/');
    const news = await NewsSchema.find();
    const user = await userSchema.findById(id)
    if(user.role==1) return res.redirect('/user'); 
    return res.status(200).render('../views/publication/create', {
        title: 'Publicar nota',
        message: undefined,
        news,
        user
    });
}

async function NewPost(req, res) {
    const id = req.cookies.id;
    if(!id) return res.redirect('/');
    const user = await userSchema.findById(id);
    
    let data = {
        title: req.body.title,
        body: req.body.body,
        img: req.body.img,
        ref:req.body.ref,
        type:req.body.flextype,
        user: user._id,
        status:'Validado'
    }

    const NewPost = new NewsSchema(data);
    await NewPost.save();
    
    return res.redirect('/');
}

async function GetPostById(req, res) {
    const id = req.cookies.id
    if(!id) return res.redirect('/');
    const user = await userSchema.findById(id)

    const post = await NewsSchema.findById(req.params.id).populate('user');
    console.log(post)
    return res.status(200).render('../views/publication/show', {
        title: 'Nota',
        message: undefined,
        post,
        user: user
    });
}

async function DeletePost(req, res){
    await NewsSchema.findByIdAndDelete(req.params.id);

    return res.redirect('/post');
} 



module.exports = { RenderNewPost, NewPost, GetPostById, DeletePost}