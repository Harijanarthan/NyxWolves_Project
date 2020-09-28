import { render } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios'

export default class CreateCourse extends Component {

    constructor(props) {
        super(props);

        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeCourseDept = this.onChangeCourseDept.bind(this);
        this.onChangeCourseDesc = this.onChangeCourseDesc.bind(this);
        this.onChangeCourseRoom = this.onChangeCourseRoom.bind(this);
        this.onChangeWaitlistCapacity = this.onChangeWaitlistCapacity.bind(this);
        this.onChangeCourseTeam = this.onChangeCourseTeam.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            course_name: '',
            course_dept: '',
            course_desc: '',
            course_room: '',
            waitlist_capacity: '',
            course_team: ''
        }
    }

    onChangeCourseName(e) {
        this.setState({
            course_name: e.target.value
        });
    }

    onChangeCourseDept(e) {
        this.setState({
            course_dept: e.target.value
        });
    }

    onChangeCourseDesc(e) {
        this.setState({
            course_desc: e.target.value
        });
    }
    onChangeCourseRoom(e) {
        this.setState({
            course_room: e.target.value
        });
    }
    onChangeWaitlistCapacity(e) {
        this.setState({
            waitlist_capacity: e.target.value
        });
    }
    onChangeCourseTeam(e) {
        this.setState({
            course_team: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Course Name: ${this.state.course_name}`);
        console.log(`Course Department: ${this.state.course_dept}`);
        console.log(`Course Description: ${this.state.course_desc}`);
        console.log(`Course Room: ${this.state.course_room}`);
        console.log(`Waiting List Capacity:  ${this.state.waitlist_capacity}`);
        console.log(`Course Team: ${this.state.course_team}`);


        const newCourse = {
            course_name: this.state.course_name,
            course_dept: this.state.course_dept,
            course_desc: this.state.course_desc,
            course_room: this.state.course_room,
            waitlist_capacity: this.state.waitlist_capacity,
            course_team: this.state.course_team
        }

        axios.post('http://localhost:4000/courseData/add', newCourse)
            .then(res => console.log(res.data));


        this.setState({
            course_name: '',
            course_dept: '',
            course_desc: '',
            course_room: '',
            waitlist_capacity: '',
            course_team: ''
        })
    }

    render() {
        return (
            <div className="container">
                <div style={{ marginTop: 20 }}>
                    <h3>Create a New Course</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Course Name: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.course_name}
                                onChange={this.onChangeCourseName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Course Department: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.course_dept}
                                onChange={this.onChangeCourseDept}
                            />
                        </div>
                        <div className="form-group">
                            <label>Course Description: </label>
                            <textarea type="text"
                                className="form-control"
                                value={this.state.course_desc}
                                onChange={this.onChangeCourseDesc}
                            />
                        </div>
                        <div className="form-group">
                            <label>Course Room: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.course_room}
                                onChange={this.onChangeCourseRoom}
                            />
                        </div>
                        <div className="form-group">
                            <label>Waiting List Capacity: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.waitlist_capacity}
                                onChange={this.onChangeWaitlistCapacity}
                            />
                        </div>
                        <div className="form-group">
                            <label>Course Team: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.course_team}
                                onChange={this.onChangeCourseTeam}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create Todo" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}