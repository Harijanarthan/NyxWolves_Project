const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseData=new Schema({
    course_name:{
        type:String
    },
    course_dept:{
        type:String
    },
    course_desc:{
        type:String
    },
    course_room:{
        type:String
    },
    waitlist_capacity:{
        type:String
    },
    course_team:{
        type:String
    },
});

module.exports=mongoose.model('courseData',courseData);