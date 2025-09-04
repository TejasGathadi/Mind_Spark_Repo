import { useEffect, useState } from "react";
import "../css/AllSchools.css";
import { useNavigate } from "react-router-dom";
import { deleteSchoolById, getAllSchools } from "../common/SchoolAPI";

export default function AllSchools() {
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const data = await getAllSchools();
        setSchools(data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };
    fetchSchools();
  }, []);

  const deleteSchool = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this school?"
    );
    if (!confirmDelete) return;

    try {
      await deleteSchoolById(id);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting school", error);
    }
  };

  const handleBack = () => navigate("/progress-tracking-main");
  const handleAllStudents = (id) => navigate(`/all-students-admin/${id}`);
  const handleAddStudent = (id) => navigate(`/add-student/${id}`);
  const handleEdit = (id) => navigate(`/edit-school/${id}`);

  return (
    <div className="table-container">
      <h2 className="table-title">All Schools</h2>
      <div className="table-responsive">
        <table className="school-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>School Name</th>
              <th>Address</th>
              <th>Students</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school) =>
              school.schoolName ? (
                <tr key={school.id}>
                  <td>{school.id}</td>
                  <td>{school.schoolName}</td>
                  <td>{school.schoolAddress}</td>
                  <td>{school.studentList.length}</td>
                  <td className="action-buttons">
                    <div className="top-buttons">
                      <button onClick={() => handleAddStudent(school.id)}>
                        Add Student
                      </button>
                      <button onClick={() => handleAllStudents(school.id)}>
                        All Students
                      </button>
                    </div>
                    <div className="bottom-buttons">
                      <button onClick={() => handleEdit(school.id)}>
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => deleteSchool(school.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <button className="back-btn" onClick={handleBack}>
        ← Back
      </button>
    </div>
  );
}
