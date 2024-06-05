import { useNavigate } from "react-router";

import "../styles/NotFoundPage.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-page">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Page Not Found</p>
      <img src="./404.jpeg" alt="Rick and Morty" className="not-found-image" />
      <p className="not-found-message">Sorry, this page does not exist!</p>
      <button className="back-button" onClick={() => navigate("/")}>
        Go back to home
      </button>
    </div>
  );
};

export default NotFoundPage;
