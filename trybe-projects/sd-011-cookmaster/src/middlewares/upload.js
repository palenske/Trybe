const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, `${__dirname}/../uploads`);
  },
  filename: (req, _file, callback) => {
    const { id } = req.params;

    req.filePath = `localhost:3000/src/uploads/${id}.jpeg`;

    callback(null, `${id}.jpeg`);
  },
});

module.exports = multer({ storage }).single('image');
