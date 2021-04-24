const {User} = require('../../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi');


const handleErrors = (err) => {
    let msgError = err.message;

    return msgError;
}

exports.register = async (req, res) => {

    const {fullName, email, password} = req.body;
    let hashedPassword = await bcrypt.hash(password, 8);

    try {

        const schema = Joi.object({
            fullName: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

            password: Joi.string().min(4).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

            email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        });

        const value = await schema.validateAsync(req.body);


        if (!value) {
            return res.send(value);
        }

        const checkEmail = await User.findOne({
            where: {
                email
            }
        });

        if (checkEmail) {
            return res.send({
                status: "Failed",
                message: "Email already exists",
            });
        }


        const user = await User.create({fullName, email, password: hashedPassword});
        
        res.status(201).json(user);
        
    } catch (err) {
        // const errors = handleErrors(err);
        // res.status(400).json(errors);
        res.status(400).send([err.message])
    }
}

exports.login = async (req, res) => {

    try {
        
    } catch (error) {
        
    }
}
