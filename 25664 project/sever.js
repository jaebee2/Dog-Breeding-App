const express = require('express');
const multer = require('multer');
const Datastore = require('nedb');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); // Set EJS as the template engine
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(express.static('uploads'));


// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
const db = new Datastore({ filename: 'dogs.db', autoload: true });

// Handle POST request for uploading dog data and image
app.post('/dogs', upload.single('image'), (req, res) => {
    const { name, breed, age, sex } = req.body;
    const imagePath = req.file.filename;

    db.insert({ name, breed, age, sex, imagePath }, (err, newDog) => {
        if (err) {
            res.status(500).send('Error saving the dog.');
        } else {
            res.redirect('/success');
        }
    });
});

// Handle GET request for fetching dog data
app.get('/dogs', (req, res) => {
    db.find({}, (err, dogs) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching data from the database.' });
        } else {
            res.json(dogs);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
