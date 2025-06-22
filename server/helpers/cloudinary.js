const cloudinary = require('cloudinary').v2
const multer = require('multer');

cloudinary.config({
    cloud_name: 'dqazwakn9',
    api_key: '637768572394518',
    api_secret: 'cDJSYDYVe05yJTynmkKgU-_TnMM',
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: 'auto'
    })
    return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };