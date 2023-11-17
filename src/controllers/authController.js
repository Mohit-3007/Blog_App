
const register = (req, res) => {
    try{
        if(!req.body.email) return res.json(message.required_field("email"))
        if(!req.body.username) return res.json(message.required_field("username"))
        if(!req.body.password) return res.json(message.required_field("password"))


        if(!_.isEmail(req.body.email)) return res.json(message.invalid_request("email"))
        if(!_.isUserName(req.body.username)) return res.json(message.invalid_request("username"))

        const body = {
            email: req.body.email,
            username: req.body.username,
        }

        const query = {
            $or: [{sEmail: body.email}, {sUsername: body.username}]
        }

        const existingUser = 

        // if(existingUser){
            
        // }

        res.status(200).json()
    }
    catch(error){
        console.log(error)
        res.status(501).json({
            message: "something went wrong"
        })
    }
}

module.exports = {
    register
}