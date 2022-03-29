const UsersSchema = require('../models/users');
const bcrypt = require('bcrypt');

async function RenderLogin(req, res) {
    console.log("hello")
    return res.status(200).render('../views/auth/login', {
        title: 'Iniciar sesion',
        message: undefined
    });
}

async function RenderRegister(req, res) {
    return res.status(200).render('../views/auth/register', {
        title: 'Registrarse',
        message: undefined
    });
}

async function RenderRecoverPassword(req, res) {
    return res.status(200).render('../views/auth/password', {
        title: 'Recover password',
        message: undefined
    });
}

async function RenderSetNewPassword(req, res) {
    return res.status(200).render('../views/auth/set-password', {
        title: 'Ingresa tu nueva contrasena',
        userId: req.params.id,
        message: undefined
    });
}

async function Login(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            return res.status(400).render('../views/auth/login', {
                title: 'Iniciar sesión',
                message: 'Ingresa un correo y una contraseña'
            });
        }

        const user = await UsersSchema.findOne({ email: email }).exec();
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            const cookieOptions = {
                expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }

            const id = user._id;
            
            res.cookie('id', id, cookieOptions);

            return res.status(200).redirect("/");
        }
        else {
            return res.status(400).render('../views/auth/login', {
                title: 'Iniciar sesion',
                message: 'Usuario o contrasena incorrectos'
            });
        }
    }
    catch (e) {
        console.log(e.message);
    }
}

async function Register(req, res) {
    try {
        if (!req.body.email || !req.body.password || !req.body.fullName || !req.body.answer || !req.body.phone  || !req.body.birthday || !req.body.role) {
            return res.status(400).render('../views/auth/register', {
                title: 'Registrarse',
                message: 'Porfavor llene todos los campos'
            });
        }

        let user = await UsersSchema.findOne({ email: req.body.email });

        if (user) {
            return res.status(500).render('../views/auth/register', {
                title: 'Registrarse',
                message: 'Este email ya está registrado'
            });
        }

        bcrypt.hash(req.body.password, 10, async function (err, hash) {
            req.body.password = hash;
            const NewUser = new UsersSchema(req.body);
            await NewUser.save();

            return res.status(200).redirect("/");
        });
    }
    catch (e) {
        console.log(e.message);
    }
}

async function RecoverPassword(req, res) {
    try {
        const user = await UsersSchema.findOne({ email: req.body.email }).exec();

        if (user.answer == req.body.answer) {
            res.redirect('/recover/' + user._id);
        }
        else {
            return res.status(200).render('../views/auth/password', {
                title: 'Recover password',
                message: 'Ingresa lso datos correctamente'
            });
        }
    }
    catch (e) {
        console.log(e.message);
    }
}

async function SetNewPassword(req, res) {
    try {
        bcrypt.hash(req.body.password, 10, async function (err, hash) {
            await UsersSchema.findByIdAndUpdate(req.params.id, { password: hash });

            return res.status(200).redirect("/");
        });
    }
    catch (e) {
        console.log(e.message);
    }
}

async function Logout(req, res) {
    res.clearCookie('id');
    res.clearCookie('user');
    return res.redirect('/');
}

module.exports = { RenderLogin, RenderRegister, RenderRecoverPassword, RenderSetNewPassword, Login, Register, RecoverPassword, SetNewPassword, Logout }