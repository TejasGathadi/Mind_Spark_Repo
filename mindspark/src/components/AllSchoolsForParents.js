// src/components/AllSchoolsForParents.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllSchoolParent } from "../common/SchoolAPI";
import "../css/AllSchoolsForParent.css";

export default function AllSchoolsForParents() {
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Go back to previous page
  };

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await getAllSchoolParent();
        setSchools(response);
      } catch (err) {
        throw err;
      }
    };

    fetchSchools();
  }, []);

  const handleViewStudents = (schoolId) => {
    navigate(`/student-by-school/${schoolId}`);
  };

  return (
    <div className="parent-schools-container">
      <h2 className="text-center mb-4">All Available Schools</h2>
      <div className="school-list">
        {schools.map((school) => (
          <div key={school.id} className="school-card">
            <h4>{school.schoolName}</h4>
            <p>{school.schoolAddress}</p>
            <button onClick={() => handleViewStudents(school.id)}>
              View Students
            </button>
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={handleBack}>
        ← Back
      </button>
    </div>
  );
}
