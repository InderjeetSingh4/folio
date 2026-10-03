import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    name: "Ferry Capacity Analytics",
    category: "Predictive Analytics & ML",
    tools: "Python, Pandas, Scikit-learn, Streamlit",
    image: "/images/ferry-analytics.png"
  },
  {
    name: "CivilSite Platform",
    category: "Full Stack Web Engineering",
    tools: "TypeScript, React, Node.js, MySQL",
    image: "/images/civilsite.png"
  },
  {
    name: "Competitor Intelligence Dashboard",
    category: "Data Engineering & Analytics",
    tools: "SQL, Python, Data Visualization, ETL Pipelines",
    image: "/images/competitor-intelligence.png"
  },
  {
    name: "VisionPro Object Detection",
    category: "Computer Vision & Neural Networks",
    tools: "Python, PyTorch, YOLOv8, OpenCV, CUDA",
    image: "/images/visionpro.png"
  }
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
