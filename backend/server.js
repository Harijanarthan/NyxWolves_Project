const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose= require('mongoose');
const courseDataRoutes=express.Router();
const passport = require("passport");
const users = require("./routes/api/users");

let courseData = require('./courseData.model');

app.use(cors());
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;

mongoose.connect(db,{useNewUrlParser:true});

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

courseDataRoutes.route('/').get(function(req,res){
    courseData.find(function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.json(data)
        }
    });
});
courseDataRoutes.route('/:id').get(function(req,res){
    let id =req.params.id
    courseData.findById(id, function(err,data){
        res.json(data);
    });
});
courseDataRoutes.route('/add').post(function(req,res){
    let data=new courseData(req.body);
    data.save()
        .then(data=>{
            res.status(200).json({'data':'Course Data Added Successfully!'});
        })
        .catch(err=>{
            res.status(400).send('Adding Failed!')
        });
});

app.use('/courseData',courseDataRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port:" + PORT)
});