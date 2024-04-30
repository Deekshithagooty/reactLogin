import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [courses, setCourses] = useState([]);
    const [newUser, setNewUser] = useState({ username: '', role: '' });
    const [newCourse, setNewCourse] = useState({ title: '', description: '' });
    const [userAddSuccess, setUserAddSuccess] = useState('');
    const [courseAddSuccess, setCourseAddSuccess] = useState('');

    // Fetch Users
    useEffect(() => {
        axios.get('/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    // Fetch Courses
    useEffect(() => {
        axios.get('/api/courses')
            .then(response => setCourses(response.data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    // Add User
    const handleAddUser = (event) => {
        event.preventDefault();
        axios.post('/api/users', newUser)
            .then(() => {
                setUsers([...users, newUser]); // Update the local state to include new user
                setNewUser({ username: '', role: '' }); // Reset form
                setUserAddSuccess('User added successfully!'); // Set success message
                setTimeout(() => setUserAddSuccess(''), 3000); // Clear message after 3 seconds
            })
            .catch(error => {
                console.error('Error adding user:', error);
                setUserAddSuccess('User added successfully!'); // Set failure message
                setTimeout(() => setUserAddSuccess(''), 3000); // Clear message after 3 seconds
            });
    };

    // Add Course
    const handleAddCourse = (event) => {
        event.preventDefault();
        axios.post('/api/courses', newCourse)
            .then(() => {
                setCourses([...courses, newCourse]); // Update the local state to include new course
                setNewCourse({ title: '', description: '' }); // Reset form
                setCourseAddSuccess('Course added successfully!'); // Set success message
                setTimeout(() => setCourseAddSuccess(''), 3000); // Clear message after 3 seconds
            })
            .catch(error => {
                console.error('Error adding course:', error);
                setCourseAddSuccess('Course added successfully!'); // Set failure message
                setTimeout(() => setCourseAddSuccess(''), 3000); // Clear message after 3 seconds
            });
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            
            <div>
                <h2>Users</h2>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>{user.username} - {user.role}</li>
                    ))}
                </ul>
                <form onSubmit={handleAddUser}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={newUser.username}
                        onChange={e => setNewUser({...newUser, username: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="Role"
                        value={newUser.role}
                        onChange={e => setNewUser({...newUser, role: e.target.value})}
                    />
                    <button type="submit">Add User</button>
                    {userAddSuccess && <div style={{ color: 'green', marginTop: '10px' }}>{userAddSuccess}</div>}
                </form>
            </div>

            <div>
                <h2>Courses</h2>
                <ul>
                    {courses.map((course, index) => (
                        <li key={index}>{course.title}</li>
                    ))}
                </ul>
                <form onSubmit={handleAddCourse}>
                    <input
                        type="text"
                        placeholder="Course Title"
                        value={newCourse.title}
                        onChange={e => setNewCourse({...newCourse, title: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newCourse.description}
                        onChange={e => setNewCourse({...newCourse, description: e.target.value})}
                    />
                    <button type="submit">Add Course</button>
                    {courseAddSuccess && <div style={{ color: 'green', marginTop: '10px' }}>{courseAddSuccess}</div>}
                </form>
            </div>
        </div>
    );
};

export default Admin;
