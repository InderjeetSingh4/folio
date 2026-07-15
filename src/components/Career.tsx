import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Unified Mentor Pvt. Ltd. (Remote)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed interactive web-based dashboards and data applications with a focus on usability and responsive design. Built Python (Pandas, NumPy) preprocessing pipelines to clean and transform raw datasets, accelerating EDA workflows. Designed data models and ran statistical analyses that feed stakeholder-facing reports and project deliverables. Utilized Git-based workflows and leveraged AI-assisted development tools to accelerate coding and collaboration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Engineer Intern</h4>
                <h5>Zeetron Network Pvt. Ltd. (Jaipur, India)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Contributed to AI-powered software solutions and built application features using Python and machine learning technologies. Ran exploratory data analysis and predictive modeling using Scikit-learn to uncover underlying patterns in complex research datasets. Tuned machine learning algorithms to directly support ongoing AI and automation research initiatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Artificial Intelligence & Data Science</h4>
                <h5>Bikaner Technical University (MITRC), Alwar</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Pursuing a Bachelor of Technology degree in Artificial Intelligence and Data Science. Currently developing foundational and advanced skills in Python, SQL, Web Development, Machine Learning, and Data Analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
