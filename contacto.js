var nodemailer = require("nodemailer")
router.post('/', async (req, res, next) => {
    var email = req.body.nombre;
    var password = req.body.nombre;
    var direccion = req.body.nombre;
    var ciudad = req.body.nombre;
    var pais = req.body.nombre;
    var codigoPostal = req.body.nombre;
    var obj={
        to: 'flaviaurisno@gmail.com' ,
        subject:' contacto web',
        html:nombre+'se contacto a traves de la web y quiere mas informacion a este correo'+ email}

        var transport=nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            host:process.env.SMTP_PORT,
            auth:{
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASS
            }
        })
        var info = await transport.sendMail(obj);

        res.render('contacto',{
            message: 'mensaje enviado correctamente'
        });

    });