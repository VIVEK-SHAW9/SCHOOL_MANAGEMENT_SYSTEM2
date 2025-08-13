import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Courses = () => {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    try {
      // Mock API call
      const data = [
        { id: 1, courseName: 'Math 101', description: 'Basic Mathematics', fees: 1000 },
        { id: 2, courseName: 'Science 101', description: 'Basic Science', fees: 1200 },
      ];
      setCoursesList(data); // ✅ data is defined here
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong...');
    }
  };

  return (
    <div>
      {coursesList.map((course) => (
        <div key={course.id}>
          <h3>{course.courseName}</h3>
          <p>{course.description}</p>
          <p>Fees: ₹{course.fees}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
