import React, { useState } from "react";
import "../css/AddSchool.css";
import { useNavigate } from "react-router-dom";

import { addSchool } from "../common/SchoolAPI";

export default function AddSchool() {
  const [schoolName, setSchoolName] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const school = { schoolName, schoolAddress };
    console.log("Submitting School:", school);

    await addSchool(school);

    alert("School added successfully!");
    setSchoolName("");
    setSchoolAddress("");
  };

  const handleReset = () => {
    setSchoolName("");
    setSchoolAddress("");
  };
  const handleBack = () => {
    navigate("/progress-tracking-main"); // Go back to previous page
  };

  return (
    <>
      <div className="add-school-container">
        <h2>Add New School</h2>
        <form onSubmit={handleSubmit} className="add-school-form">
          <label htmlFor="name">School Name</label>
          <input
            type="text"
            id="name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            required
          />

          <label htmlFor="address">School Address</label>
          <input
            type="text"
            id="address"
            value={schoolAddress}
            onChange={(e) => setSchoolAddress(e.target.value)}
            required
          />

          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="button" onClick={handleReset} className="reset-btn">
              Reset
            </button>
          </div>
        </form>
        <button className="back-btn" onClick={handleBack}>
          ← Back
        </button>
      </div>
    </>
  );
}
