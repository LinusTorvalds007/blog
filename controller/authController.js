const Joi = require('joi');
const authController = {

    async register(req,res,next) {
        const userRegisterSchema = Joi.object({
            username:Joi.string().min(5).max(30).required(),
            name:Joi.string().max(30).required(),
            email:Joi.string().email().required(),
            password:Joi.string().pattern().required(),

        })

// 1. validate user input
// 2. if error in validation -> return error via middlewatre
// 3. if email or username is already  registered-> return an error.
// 4. password hash
// 5. store user data in db 
// 6. response send

    },

    async login() {

    }
}

module.exports = authController;