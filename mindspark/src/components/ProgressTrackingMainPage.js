import { useNavigate } from "react-router-dom";
import "../css/ProgressTrackingMain.css";
export default function ProgressTrackingMainPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    localStorage.removeItem("jwtToken");
    navigate("/progress-tracking-login"); // Go back to previous page
  };

  return (
    <div>
      <div className="school-home-container">
        <h1>Welcome to School Management</h1>
        <div className="button-group">
          <button onClick={() => navigate("/add-school")}>
            Add New School
          </button>
          <button onClick={() => navigate("/all-schools")}>All Schools</button>
        </div>
        <button className="back-btn" onClick={handleBack}>
          ← Logout
        </button>
      </div>
    </div>
  );
}
