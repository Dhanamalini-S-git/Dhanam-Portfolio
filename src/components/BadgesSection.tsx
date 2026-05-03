const certBadges = [
  {
    title: "Introduction to RAG",
    issuer: "IBM SkillsBuild",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=300&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "OCI Developer Professional",
    issuer: "Oracle",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "IBM SkillsBuild",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "OCI AI Foundations Associate",
    issuer: "Oracle",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM SkillsBuild",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&auto=format&fit=crop",
    link: "#",
  },
];

const BadgesSection = () => {
  return (
    <section id="badges" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="text-primary">Badges</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-sm">Certifications & Digital Badges</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {certBadges.map((badge, index) => (
            <a
              key={index}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-[180px] bg-secondary border border-border hover:border-primary rounded-xl p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden mb-3 border border-border group-hover:border-primary transition-colors">
                <img
                  src={badge.image}
                  alt={badge.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-muted-foreground">{badge.issuer}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BadgesSection;
