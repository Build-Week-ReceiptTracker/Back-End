const router = require('express').Router();

const Receipts = require('../models/receipts-model');
// api/auth/receipts

router.get('/all',(req, res) => {


    console.log(req.user)
    Receipts.getReceipts(req.user)
        .then(receipts =>{
            if(receipts){
         res.status(200).json(receipts)
            }else{
                res.status(404).json({message:`Sorry no receipts found for ${user} `})
         } })
        .catch(err => res.status(500).json({message: 'Uh Oh server error', error: err.message }));
});

router.get('/:id',(req,res) => {
    const id = req.params.id

    
        Receipts.getReceiptByID(id)
    .then(receipt =>{
        if(receipt) {
        res.status(200).json(receipt);

    }else{
        res.status(401).json({message:`Sorry the receipt with id# ${id} cannot be found`})}})
    .catch(err => res.status(500).json({message:'Uh Oh sever error',err:err.message}))

})

router.post('/add', (req, res) => {
    const receipt = req.body;

    if(receipt.date_of_transaction && receipt.amount_spent && receipt.category && receipt.merchant && receipt.user_username) {
        Receipts.postReceipt(receipt)
            .then(id => res.status(201).json({receiptID:`${id}`,message:'Receipt added!!! Thank You!!!'}))
            .catch(err => res.status(500).json({message:'Uh Oh server error !!!', error: err }));
    } else {
        res.status(409).json({ error:"Please provide all required fields." })
    }
});

router.delete('/:id/del', (req, res) => {
    const id = req.params.id;

    Receipts.deleteReceipt(id)
        .then(count => {
            if(count){ res.status(200).json({transactionID:count,message:`Receipt # ${id} deleted`});
         }else{res.status(404).json({ error: "A Receipt with that id does not exist." });
         } })
        .catch(err => res.status(500).json({ error: err }));
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
 

    if(changes) {
        Receipts.updateReceipt(id, changes)
            .then(count => {
                if(count){ 
                res.status(202).json(count);
                 }else{ res.status(404).json({ error: "Receipt with that ID not found." })
            }})
            .catch(err => res.status(500).json({ error: err }));
    } else {
        res.status(400).json({ error: "Please provide all required fields." });
    }
});

module.exports = router;