import CardsList from "../components/features/card/CardsList";
import Container from "react-bootstrap/Container";
import transition from "../transition";
import "../css/about.css"

function ProjectsPage() {
  return (
    <Container>
      <h1 className="te">My Projects </h1>
 
      <CardsList />

      <a href="https://www.youtube.com/" target="_blank">
        <div className="card">
          <img
            className="card-image"
            src="/src/assets/utube2.png"
            alt="project 1"
          />
          <h2>Project: One</h2>
          <p>My First Project</p>
        </div>
      </a>

      <a href="https://www.google.com/" target="_blank">
        <div className="card">
          <img
            className="card-image"
            src="/src/assets/google2.png"
            alt="project 2"
          />
          <h2>Project: Two</h2>
          <p>My Second Project</p>
        </div>
      </a>

      
    </Container>
  );
}

export default transition(ProjectsPage);
