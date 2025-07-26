import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function StudentForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [course, setCourse] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file && file.size > 2 * 1024 * 1024) { // 2MB limit
    alert("Please select an image smaller than 2MB.");
    return;
  }
  setImage(file);
  setPreview(URL.createObjectURL(file));
};


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowCard(false); // don't show card yet
  };

  const handleDownload = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      const link = document.createElement('a');
      link.download = 'student_card.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };


  const handleNew = () => {
    setName('');
    setNumber('');
    setCourse('');
    setImage(null);
    setPreview(null);
    setIsSubmitted(false);
    setShowCard(false);
  };
  

  return (
    <div className="form-container">
      {/* Form */}
      <form onSubmit={handleSubmit} className="form">
        <h2>Student Form</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Roll Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Course Name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        <button type="submit">Submit</button>

        {isSubmitted && (
          <>
            <button type="button" onClick={() => setShowCard(true)}>
              View Card
            </button>
            <button type="button" onClick={handleNew} className="btn-new">
              New
            </button>
          </>
        )}
      </form>

      {/* Example Card (Before submission) */}
      {!isSubmitted && (
        <div className="student-card example-card">
          <div className="student-card-header">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBXsm4uasPolOoXDPe3X7vFogxo5-vlFPsl8l1TAQZrPrtYgTd1H9mScx3HMreWTCF7o&usqp=CAU"
              className="student-card-logo"
              alt="Logo"
            />
            <div className="student-card-title">
              <h2>Jinnah College for Women</h2>
              <p>Student Identity Card</p>
            </div>
          </div>
          <div className="student-card-body">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="student-photo"
              alt="Student"
            />
            <div className="student-info">
              <p><strong>Name:</strong> Your name</p>
              <p><strong>Roll No:</strong> eg:12345</p>
              <p><strong>Program:</strong> eg: CS</p>
              <p><strong>Session:</strong> eg: 2023–2027</p>
            </div>
          </div>
          <div className="student-card-footer">
            <p>Valid Till: December 2027</p>
            <button disabled>Download Card</button>
          </div>
        </div>
      )}

      {/* Real Card (After clicking "View Card") */}
      {isSubmitted && showCard && (
        <div ref={cardRef} className="student-card">
          <div className="student-card-header">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBXsm4uasPolOoXDPe3X7vFogxo5-vlFPsl8l1TAQZrPrtYgTd1H9mScx3HMreWTCF7o&usqp=CAU"
              className="student-card-logo"
              alt="Logo"
            />
            <div className="student-card-title">
              <h2>Jinnah College for Women</h2>
              <p>Student Identity Card</p>
            </div>
          </div>
          <div className="student-card-body">
            {preview && (
              <img src={preview} className="student-photo" alt="Student" style={{borderRadius: '50%'}} />
            )}
            <div className="student-info">
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Roll No:</strong> {number}</p>
              <p><strong>Program:</strong> {course}</p>
              <p><strong>Session:</strong> 2023–2027</p>
            </div>
          </div>
          <div className="student-card-footer">
            <p>Valid Till: December 2027</p>
            <button onClick={handleDownload}>Download Card</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentForm;
