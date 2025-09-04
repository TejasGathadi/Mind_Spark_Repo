import "../css/TempSchoolPage.css";
import { useNavigate } from "react-router-dom";

export default function TempSchoolPage() {
  const navigate = useNavigate();

  const staticSchools = [
    {
      id: 1,
      schoolName: "S.S. Agrawal School",
      schoolAddress: "Pune",
    },
    {
      id: 2,
      schoolName: "Modern Primary School",
      schoolAddress: "Pune",
    },
    {
      id: 3,
      schoolName: "Pandit Rao Agashe School",
      schoolAddress: "Pune",
    },
    {
      id: 4,
      schoolName: "Scholars's Vally",
      schoolAddress: "Pune",
    },
    {
      id: 5,
      schoolName: "VIbgyor School",
      schoolAddress: "Chatrapati Shambhaji Nagar",
    },
  ];

  //   const handleBack = () => {
  //     navigate("/");
  //   };

  //   const handleViewStudents = (schoolId) => {
  //     navigate(`/student-by-school/${schoolId}`);
  //   };

  return (
    <div className="parent-schools-container">
      <h2 className="text-center mb-4">All Available Schools</h2>
      <div className="school-list">
        {staticSchools.map((school) => (
          <div key={school.id} className="school-card">
            <h4>{school.schoolName}</h4>
            <p>{school.schoolAddress}</p>
            {/* <button onClick={() => handleViewStudents(school.id)}>
              View Students
            </button> */}
          </div>
        ))}
      </div>
      {/* <button className="back-btn" onClick={handleBack}>
        ← Back
      </button> */}
    </div>
  );
}
