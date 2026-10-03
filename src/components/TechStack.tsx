import React from "react";

interface TechCategory {
  title: string;
  skills: string[];
}

const techCategories: TechCategory[] = [
  {
    title: "Core Languages",
    skills: ["TypeScript", "Python", "JavaScript", "SQL", "C++"],
  },
  {
    title: "Full Stack & Web Systems",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Data Engineering & AI",
    skills: ["PyTorch", "YOLOv8", "OpenCV", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Databases & Analytics",
    skills: ["PostgreSQL", "MySQL", "Supabase", "MongoDB", "Git & GitHub", "Streamlit", "Tableau"],
  },
];

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      <div className="techstack-container">
        <h2>Tech Stack</h2>
        <p className="techstack-subtitle">
          Technologies and tools engineered for production web applications, data pipelines, and AI platforms.
        </p>

        <div className="techstack-grid">
          {techCategories.map((category) => (
            <div className="tech-category-card" key={category.title}>
              <h3>{category.title}</h3>
              <div className="tech-pills-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    className="tech-pill-tag"
                    key={skill}
                    style={{ "--pill-i": skillIndex } as React.CSSProperties}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
