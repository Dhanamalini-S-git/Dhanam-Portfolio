const badges = [
  // Languages
  { label: "JavaScript", color: "F7DF1E", logo: "javascript", logoColor: "black" },
  { label: "Python", color: "3776AB", logo: "python", logoColor: "white" },
  { label: "Java", color: "007396", logo: "java", logoColor: "white" },
  { label: "HTML5", color: "E34F26", logo: "html5", logoColor: "white" },
  { label: "CSS3", color: "1572B6", logo: "css3", logoColor: "white" },

  // Frontend
  { label: "React", color: "61DAFB", logo: "react", logoColor: "black" },
  { label: "Tailwind CSS", color: "06B6D4", logo: "tailwindcss", logoColor: "white" },
  { label: "Figma", color: "F24E1E", logo: "figma", logoColor: "white" },

  // Backend & DB
  { label: "Node.js", color: "339933", logo: "nodedotjs", logoColor: "white" },
  { label: "MongoDB", color: "47A248", logo: "mongodb", logoColor: "white" },

  // Data & Tools
  { label: "Power BI", color: "F2C811", logo: "powerbi", logoColor: "black" },
  { label: "Excel", color: "217346", logo: "microsoftexcel", logoColor: "white" },
  { label: "Git", color: "F05032", logo: "git", logoColor: "white" },
  { label: "GitHub", color: "181717", logo: "github", logoColor: "white" },
];

const BadgesSection = () => {
  return (
    <section id="badges" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Tech <span className="text-primary">Badges</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-sm">Technologies I work with</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {badges.map((badge) => {
            const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${badge.color}?style=for-the-badge&logo=${badge.logo}&logoColor=${badge.logoColor}`;
            return (
              <div
                key={badge.label}
                className="group transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
                title={badge.label}
              >
                <img
                  src={badgeUrl}
                  alt={badge.label}
                  className="h-8 rounded shadow-md group-hover:shadow-primary/30 group-hover:shadow-lg transition-shadow"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BadgesSection;
