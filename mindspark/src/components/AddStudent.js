import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/AddStudent.css";
import { addNewStudent } from "../common/StudentAPI";

export default function AddStudent() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [marks, setMarks] = useState(["", "", "", "", ""]);
  const navigate = useNavigate();

  const handleChangeMark = (index, value) => {
    const updatedMarks = [...marks];
    updatedMarks[index] = value;
    setMarks(updatedMarks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validMarks = marks.map((mark) =>
      mark === "" ? null : parseInt(mark, 10)
    );

    const studentData = {
      name,
      marks: validMarks,
    };

    try {
      await addNewStudent(id, studentData);
      navigate("/all-schools");
      alert("Student added successfully!");
      setName("");
      setMarks(["", "", "", "", ""]);
    } catch (err) {
      console.error("Error adding student:", err);
      alert("Failed to add student.");
    }
  };

  const handleBack = () => {
    navigate("/all-schools");
  };

  return (
    <div className="add-student-container">
      <h2>Add New Student to School #{id}</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <label>Student Name:</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label>Marks (Optional):</label>
        <div className="marks-inputs">
          {marks.map((mark, index) => (
            <input
              key={index}
              type="number"
              placeholder={`Test ${index + 1}`}
              value={mark}
              onChange={(e) => handleChangeMark(index, e.target.value)}
              min="0"
              max="100"
            />
          ))}
        </div>

        <div className="btn-group">
          <button type="submit">Add Student</button>
          <button type="button" onClick={handleBack}>
            ← Back
          </button>
          <button
            type="reset"
            onClick={() => {
              setName("");
              setMarks(["", "", "", "", ""]);
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
