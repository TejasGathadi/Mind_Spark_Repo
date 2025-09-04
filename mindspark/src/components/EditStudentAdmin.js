import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getAllStudent,
  updateMarksOfStudent,
  updateStudent,
} from "../common/StudentAPI";
import "../css/EditStudentAdmin.css";

export default function EditStudentAdmin() {
  const { schoolId, studentId } = useParams();
  const [student, setStudent] = useState(null);
  const [marks, setMarks] = useState(["", "", "", "", ""]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const allStudents = await getAllStudent(schoolId);
        const target = allStudents.find((s) => s.id.toString() === studentId);
        if (target) {
          setStudent(target);
          const filledMarks = [...target.marks];
          while (filledMarks.length < 5) filledMarks.push(null);
          setMarks(filledMarks.map((m) => (m === null ? "" : m)));
        }
      } catch (err) {
        console.error("Error fetching student:", err);
        alert("Failed to fetch student.");
        navigate(-1);
      }
    };
    fetchStudent();
  }, [schoolId, studentId, navigate]);

  const handleNameChange = (e) => {
    setStudent({ ...student, name: e.target.value });
  };

  const handleMarkChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = value;
    setMarks(newMarks);
  };

  const handleUpdate = async () => {
    try {
      // First update student name only
      await updateStudent(student.id, { ...student });

      // Then send only valid marks
      for (let i = 0; i < marks.length; i++) {
        const val = marks[i];
        if (val !== "" && !isNaN(val)) {
          await updateMarksOfStudent(schoolId, student.id, i, parseInt(val));
        }
      }

      alert("Student updated successfully!");
      navigate(`/all-students-admin/${schoolId}`);
    } catch (err) {
      console.error(err);
      alert("Update failed.");
    }
  };

  if (!student) return <p>Loading student data...</p>;

  return (
    <div className="edit-student-container">
      <h2>Edit Student</h2>
      <div className="form-group">
        <label>Student Name</label>
        <input
          type="text"
          value={student.name}
          onChange={handleNameChange}
          placeholder="Enter student name"
        />
      </div>

      <div className="form-group">
        <label>Test Marks</label>
        {marks.map((mark, index) => (
          <input
            key={index}
            type="number"
            placeholder={`Test ${index + 1}`}
            value={mark}
            onChange={(e) => handleMarkChange(index, e.target.value)}
            min="0"
            max="100"
          />
        ))}
      </div>

      <div className="button-group">
        <button className="btn-update" onClick={handleUpdate}>
          Update Student
        </button>
        <button className="btn-cancel" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
