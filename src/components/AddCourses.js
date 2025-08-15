import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddCourses = () => {
  const [courseName, setCourseName] = useState('');
  const [Description, setDescription] = useState('');
  const [fees, setFees] = useState(0);
  const [startingDate, setStartingDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);


    const newCourse = {
      _id: Date.now(),
      name: courseName,
      description: Description,
      fees,
      startingDate,
      endDate,
      image: imageUrl
    };


    const storedCourses = JSON.parse(localStorage.getItem('courses') || '[]');


    storedCourses.push(newCourse);

    localStorage.setItem('courses', JSON.stringify(storedCourses));

    setTimeout(() => {
      setLoading(false);
      toast.success('New course added ');
      navigate('/dashboard/courses');
    }, 1000);
  };

  const fileHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
  };

  return (
    <div>
      <form onSubmit={submitHandler} className='form'>
        <h1>Add New Course</h1>
        <input required onChange={e => setCourseName(e.target.value)} placeholder='Course Name' type='text' />
        <input required onChange={e => setDescription(e.target.value)} placeholder='Description' type='text' />
        <input required onChange={e => setFees(e.target.value)} placeholder='Fees' type='number' />
        <input required onChange={e => setStartingDate(e.target.value)} placeholder='Starting Date (DD-MM-YY)' type='text' />
        <input required onChange={e => setEndDate(e.target.value)} placeholder='End Date (DD-MM-YY)' type='text' />
        <input required onChange={fileHandler} type='file' />
        {imageUrl && <img className='your-logo' alt='your logo' src={imageUrl} />}
        <button type='submit' className='submit'>
          {isLoading && <i className='fa-solid fa-spinner fa-spin-pulse'></i>}
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCourses;
