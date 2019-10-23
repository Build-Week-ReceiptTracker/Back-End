let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');
 
const fileWorker = require('../controllers/file.controller.js');
 
router.post('/upload', upload.single("file"), fileWorker.uploadFile);
 
router.get('/info', fileWorker.listAllFiles);
 
router.get('/:id', fileWorker.downloadFile);
 
module.exports = router;