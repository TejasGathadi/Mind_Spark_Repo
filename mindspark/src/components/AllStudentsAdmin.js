import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteStudent, getAllStudent } from "../common/StudentAPI";
import "../css/AllStudentsAdmin.css";

export default function AllStudentsAdmin() {
  const { id: schoolId } = useParams();
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getAllStudent(schoolId);
        setStudents(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStudents();
  }, [schoolId]);

  const handleBack = () => navigate("/all-schools");

  const handleEdit = (studentId) => {
    navigate(`/edit-student/${schoolId}/${studentId}`);
  };

  const handleDelete = async (studentId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (!confirm) return;

    try {
      await deleteStudent(schoolId, studentId);
      setStudents((prev) => prev.filter((s) => s.id !== studentId));
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student.");
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-table-container">
      <h2 className="text-center mb-3">Students in School</h2>

      <input
        type="text"
        placeholder="Search by student name"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredStudents.length === 0 ? (
        <>
          <p className="no-students">No student available</p>
          <button className="back-btn" onClick={handleBack}>
            ← Back
          </button>
        </>
      ) : (
        <div className="table-responsive">
          <table className="student-table">
            <thead>
              <tr>
                <th>Student Name</th>
                {[...Array(5)].map((_, i) => (
                  <th key={i}>Test {i + 1}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <td key={index}>
                      {student.marks && student.marks[index] !== null
                        ? student.marks[index]
                        : "N/A"}
                    </td>
                  ))}
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(student.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="back-btn" onClick={handleBack}>
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}
