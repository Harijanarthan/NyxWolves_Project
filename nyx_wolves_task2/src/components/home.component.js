import { render } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios';
import Link from 'react-router-dom'


const CourseData = props => (
    <tr>
        <td>{props.data.course_name}</td>
        <td>{props.data.course_dept}</td>
        <td>{props.data.course_desc}</td>
        <td>{props.data.course_room}</td>
        <td>{props.data.waitlist_capacity}</td>
        <td>{props.data.course_team}</td>
        {/* <td>
            <Link to={"/"+props}></Link>
        </td> */}
    </tr>
)

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { courseData: [] };
       
    }

    componentDidMount() {
        axios.get('http://localhost:4000/courseData')
            .then(response => {
                this.setState({ courseData: response.data })
               
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    courseData() {
        return this.state.courseData.map(function (currentData, i) {
            return <CourseData data={currentData} key={i} />
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Courses</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Course Dept</th>
                            <th>Course Description</th>
                            <th>Course Waitlist capacity</th>
                            <th>Course Room</th>
                            <th>Course Team</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.courseData()}
                    </tbody>
                </table>
            </div>
        )
    }
}