import React, { useEffect, useState } from 'react';


const Courses = () => {
  const [courseslist, setCoursesList] = useState([]);


  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses') || '[]');
    setCoursesList(storedCourses);
  }, []);


   // Function to delete a course
  const deleteCourse = (id) => {
    const updatedCourses = courseslist.filter(course => course._id !== id);
    setCoursesList(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  return (
    <div className='course-wrapper'>
      {courseslist.length === 0 ? (
        <p>No courses found</p>
      ) : (
        courseslist.map(course => (
          <div className='course-box' key={course._id}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p>Fees: ₹{course.fees}</p>
            <p>Start: {course.startingDate} | End: {course.endDate}</p>
            {course.image && <img src={course.image} alt={course.name} width="100" />}

            

             <button className='delete-course' onClick={() => deleteCourse(course._id)} >
                         
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Courses;
