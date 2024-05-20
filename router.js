const { Router } = require('express');
const User = require('./User')
const router = Router();

router.post('/createuser',async (req, res) => {
    const {name, age , email, hobbies, address} = req.body;
    try{
       const userDB = await User.findOne({email});
       if(userDB){
        res.status(401).send({error: "This email already exists."})
       }else{
       const user = await User.create(req.body);
       await user.save()
       res.send(user)
       }
    }catch(err){
        res.send({error: err })
    }
} )

router.put('/updatedata', async (req, res)=> {
    // const {name, age , email, hobbies, address} = req.body;
    const data = req.body;
    console.log("----",data);
    try{
        const userDB = await User.findOne({email : data.email});
        if(userDB){
            const updateData = await User.findOneAndUpdate({_id : userDB._id}, req.body, {new : true});
            console.log("----",updateData);
            let user = await User.findOne({email: req.body.email})
            res.status(200).send(user)
        }else{
            res.status(401).send("User doesnot exist.")
        }
    }catch(err){
        res.send({error: err })
    }
})

router.delete('/deletedata', async (req, res)=> {
    const email = req.body.email;
    try {
        const userDB = await User.find({email});
        if(userDB){
            const deleteData = await User.deleteOne({email})
            res.status(204).send("Data is deleted Successfully.")
        }else{
            res.send("User is not exist.")
        }
    }catch(err){
        res.send({error: err})
    }
})


router.get('/', async(req, res) => {
    const {email} = req.body;
    const userDB = await User.findOne({email})
    if(userDB){
        res.status(200).send(userDB)
    }else{
        res.status(401).send("User doesn't exist");
    }
})

module.exports = router;