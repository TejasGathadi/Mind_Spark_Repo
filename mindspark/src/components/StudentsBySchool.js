import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/StudentBySchool.css";
import { getAllSchoolParent } from "../common/SchoolAPI";

export default function StudentsBySchool() {
  const { schoolId } = useParams();
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/all-schools-parents"); // Go back to previous page
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getAllSchoolParent(schoolId);
        if (response.length > 0 && response[0].studentList) {
          setStudents(response[0].studentList);
        } else {
          setStudents([]); // fallback in case data structure changes
        }
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };
    fetchStudents();
  }, [schoolId]);

  console.log(students);

  const filteredStudents = students.filter(
    (student) =>
      student &&
      student.name &&
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
