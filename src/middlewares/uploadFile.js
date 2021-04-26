const multer = require('multer');

exports.uploadFile = async (req, res, next) => {


    try {
        const fileStorageEngine = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, '../images')
            },
            filename: (req, file, cb) => {
                cb(null, Date.now() + '--' + file.originalname);
            }
        })
    
        const upload = multer({storage: fileStorageEngine});
    
        return (req, res, next) => {
            upload(req, res, function(err) {
                if(err){
                    return res.status(400).send(err);
                }
                return next()
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: "failed",
            message: "Something went wrong"
        })
    }


    
    
}