const router = require('express').Router();
const db = require('../models/users-model');
const bcrypt = require('bcryptjs')

//  /api/auth/update

router.put("/:id", async (req,res) =>{
    const  id  = req.params.id
   
    const email = req.body.email;
    const password = req.body.password
    const user = await db.findById(id);
 
try{
    if(user){
         if (email && password){
        const updatedEmail = await db.updateEmail(id,email);
       const hash = bcrypt.hashSync(password,10); // 2 ^ n
        user.password = hash
              await db.updatePassword(id,hash)
        res.status(200).json({message:`Password and email updated for user id # ${updatedEmail}`})
         }else if(email){
        const updatedEmail = await db.updateEmail(id,email);
        res.status(200).json({message:`Email updated for user id # ${updatedEmail}`})
        }else if(password){
            const hash = bcrypt.hashSync(password,10); // 2 ^ n
            user.password = hash
                  await db.updatePassword(id,hash)
            res.status(200).json({message:"Password updated"})
   
        
        }else{
            res.status(400).json({message:"Please enter email or password to update"})
        }
    }else{
        res.status(404).json({message:"Please enter a valid password"})
    }
} catch (err){
    res.status(500).json({message:"Uh Oh server error",error:err.message})
}     
})
// app/auth/delete
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db.deleteUser(id)
        .then(count => {
            if(count){ res.status(200).json({transactionID:count,message:`User # ${id} deleted`});
         }else{res.status(404).json({ error: "A User with that id does not exist." });
         } })
        .catch(err => res.status(500).json({ error: err }));
});

module.exports = router