const router = require('express').Router();

const Receipts = require('../models/receipts-model');
// api/auth/receipts

router.get('/all',(req, res) => {
// console.log(req.route.path)

    // console.log(req.user)
    Receipts.getReceipts(req.user)
        .then(receipts =>{
            if(receipts){
         res.status(200).json(receipts)
            }else{
                res.status(404).json({message:`Sorry no receipts found for ${user} `})
         } })
        .catch(err => res.status(500).json({message: 'Uh Oh server error', error: err.message }));
});
// auth/receipts/${filter}
  



router.get('/:id',(req,res,next) => {
    const user = req.user
    const id = req.params.id

     
        Receipts.getReceiptByID(id,user,)
     
    .then(receipt =>{
      if(!receipt){
          res.status(404).json({message:`Sorry a receipt with id # ${id} could not be found`})
    
        }else if(user === receipt.user_username) {
        res.status(200).json(receipt);

      }else if(user != receipt.user_username){
        res.status(401).json({message:`Sorry the receipt with id # ${id} does not belong to  ${user}`})

      }else if(!receipt){
          res.status(404).json({message:`Sorry a receipt with id # ${id} could not be found`})

      }else{
          res.status(404).json({message:`Sorry a receipt with id # ${id} could not be found`})}})

   .catch(err => res.status(500).json({message:'Uh Oh sever error',err:err.message}))

})
router.get('/search/:filter',(req,res) =>{

    let filter = req.params.filter
    
    let username = req.user
      if(filter){
         Receipts.findBy({filter},username)
        .then((results) =>{
            if(results){ res.status(200).json({message:`filter = ${filter}`,response:results})
        }else{res.status(404).json({response:`Sorry no receipts for user ${username} where found using the filter option.`})}
        })  
      }else{res.status(500).json({message:res.message})}
      
        
  }) 


router.post('/add', (req, res) => {
    const receipt = req.body;
    const user = req.user
  try{
    if(receipt.date_of_transaction && receipt.amount_spent && receipt.category && receipt.merchant && receipt.user_username && receipt.user_username === user) {
        Receipts.postReceipt(receipt)
            .then(id => res.status(201).json({receiptID:`${id}`,message:'Receipt added!!! Thank You!!!'}))
         
    } else {
        res.status(409).json({ error:"Please provide all required fields." })
    }}
catch{
     (err => res.status(500).json({message:'Uh Oh server error !!!', error: err.message }));}
});

router.delete('/:id/del', async (req, res) => {
    const id = req.params.id;
    const user = req.user
     const receipt = await Receipts.getReceiptByID(id);
try{
     if(user === receipt.user_username){
    Receipts.deleteReceipt(id)
        .then(count => {
            if(count){ res.status(200).json({transactionID:count,message:`Receipt # ${id} deleted`});
         }else{res.status(404).json({ error: "A Receipt with that id does not exist." });
         } })
     
      
     }else{
       res.status(401).json({message:`Please check the receipt id. ReceiptId # ${id} doesn't belong to this user` })
     }
}   catch(err){
    res.status(500).json({ error: err })};
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    const user = req.user

    if(changes) {
        Receipts.updateReceipt(id, changes)
            .then(count => {
                if(count){ 
                res.status(202).json({changes:changes,message:`Changes have been updated for receipt # ${id} Thank You ${user}` });
                 }else{ res.status(404).json({ error: "Receipt with that ID not found." })
            }})
            .catch(err => res.status(500).json({ error: err }));
    } else {
        res.status(400).json({ error: "Please provide all required fields." });
    }
});

module.exports = router;