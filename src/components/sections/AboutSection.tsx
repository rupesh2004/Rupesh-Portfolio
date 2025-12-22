import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as Easing },
    },
  };

  const timelineItems = [
    {
      year: "2025",
      title: "B.Tech CSE Graduation",
      description: "Completing Computer Science Engineering with strong academic performance",
      icon: GraduationCap,
      color: "primary",
    },
    {
      year: "2024",
      title: "Software Development Intern - MKCL",
      description: "Working on production-grade applications and enterprise solutions",
      icon: Briefcase,
      color: "accent",
    },
    {
      year: "2023",
      title: "Co-Lead Android Team - GDG",
      description: "Leading the Android development team at Google Developer Groups",
      icon: Users,
      color: "primary",
    },
    {
      year: "2023",
      title: "Multiple Internships",
      description: "TechnoHacks, CodeClause, AICTE Data Engineering",
      icon: Award,
      color: "accent",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate developer with a strong foundation in both web and mobile technologies,
              committed to building impactful solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Who I Am
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm <span className="text-foreground font-medium">Rupeshkumar Rajendra Bhosale</span>, 
                    a Full Stack Developer with expertise in building scalable web applications and 
                    cross-platform mobile apps.
                  </p>
                  <p>
                    Currently completed B.Tech in Computer Science Engineering (2025 Graduate ),
                    I've already gained substantial industry experience through multiple internships 
                    at organizations like MKCL, TechnoHacks, and CodeClause.
                  </p>
                  <p>
                    As the <span className="text-primary">Co-Lead of the Android Team at Google Developer Groups</span>, 
                    I've honed my leadership skills while mentoring fellow developers and organizing 
                    technical workshops.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5+", label: "Internships" },
                  { value: "10+", label: "Projects" },
                  { value: "5+", label: "Years Coding" },
                  { value: "15+", label: "Technologies" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="glass rounded-xl p-6 text-center hover-lift cursor-default"
                  >
                    <div className="text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
              
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-20"
                  >
                    {/* Timeline dot */}
                    <div 
                      className={`absolute left-6 top-2 w-5 h-5 rounded-full border-2 ${
                        item.color === 'primary' 
                          ? 'border-primary bg-primary/20' 
                          : 'border-accent bg-accent/20'
                      }`}
                    >
                      <div 
                        className={`absolute inset-1 rounded-full ${
                          item.color === 'primary' ? 'bg-primary' : 'bg-accent'
                        }`} 
                      />
                    </div>

                    {/* Content card */}
                    <div className="glass rounded-xl p-6 hover-lift">
                      <div className="flex items-start gap-4">
                        <div 
                          className={`p-2 rounded-lg ${
                            item.color === 'primary' 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-accent/10 text-accent'
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <span 
                            className={`text-xs font-medium ${
                              item.color === 'primary' ? 'text-primary' : 'text-accent'
                            }`}
                          >
                            {item.year}
                          </span>
                          <h4 className="text-lg font-semibold text-foreground mt-1">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mt-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
