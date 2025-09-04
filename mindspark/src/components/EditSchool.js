import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSchoolById, updateSchool } from "../common/SchoolAPI";
import "../css/EditSchool.css";
export default function EditSchool() {
  const { id } = useParams(); // capture school id from URL
  const navigate = useNavigate();

  const [schoolData, setSchoolData] = useState({
    schoolName: "",
    schoolAddress: "",
  });

  // Fetch school details by ID when component mounts
  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const response = await getSchoolById(id);
        setSchoolData({
          schoolName: response.schoolName,
          schoolAddress: response.schoolAddress,
        });
      } catch (error) {
        console.error("Error fetching school:", error);
        alert("Failed to fetch school details");
        navigate("/all-schools");
      }
    };
    fetchSchool();
  }, [id, navigate]);

  // Handle input changes
  const handleChange = (e) => {
    setSchoolData({ ...schoolData, [e.target.name]: e.target.value });
  };

  console.log(schoolData);

  // Handle submit (call update API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateSchool(id, schoolData);
      alert("School updated successfully!");
      navigate("/all-schools");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update school.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit School</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label htmlFor="schoolName" className="form-label">
            School Name
          </label>
          <input
            type="text"
            className="form-control"
            name="schoolName"
            value={schoolData.schoolName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="schoolAddress" className="form-label">
            School Address
          </label>
          <input
            type="text"
            className="form-control"
            name="schoolAddress"
            value={schoolData.schoolAddress}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Update
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-3"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
