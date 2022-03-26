const UsersSchema = require('../models/users');
const NewsSchema = require('../models/news');

async function RenderNewPost(req, res) {
    const id = req.cookies.id;
    if(!id) return res.redirect('/');

    const news = await NewsSchema.find();

    return res.status(200).render('../views/publication/create', {
        title: 'Publicar nota',
        message: undefined,
        news
    });
}

async function NewPost(req, res) {
    const id = req.cookies.id;
    if(!id) return res.redirect('/');
    const user = await UsersSchema.findById(id);

    let data = {
        title: req.body.title,
        body: req.body.body,
        img: req.body.img,
        autor: user.fullName
    }

    const NewPost = new NewsSchema(data);
    await NewPost.save();
    
    return res.redirect('/');
}

async function GetPostById(req, res) {
    const post = await NewsSchema.findById(req.params.id);
    
    return res.status(200).render('../views/publication/show', {
        title: 'Nota',
        message: undefined,
        post
    });
}

async function DeletePost(req, res){
    await NewsSchema.findByIdAndDelete(req.params.id);

    return res.redirect('/post');
}

module.exports = { RenderNewPost, NewPost, GetPostById, DeletePost }