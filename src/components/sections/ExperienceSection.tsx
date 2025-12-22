import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as Easing },
    },
  };

  const experiences = [
    {
      company: "MKCL (Maharashtra Knowledge Corporation Ltd)",
      role: "Software Development Intern",
      duration: "2024 - 2025",
      location: "Pune, India",
      type: "Internship",
      description: "Working on production-grade enterprise applications serving millions of users. Developing features for digital learning platforms and administrative systems.",
      highlights: [
        "Developed RESTful APIs using Node.js and Express",
        "Implemented responsive UI components with React",
        "Collaborated with cross-functional teams in Agile environment",
        "Optimized database queries improving performance by 40%"
      ],
      color: "primary"
    },
    {
      company: "Google Developers Group",
      role: "Co-Lead, Android Team",
      duration: "2023 - 2024",
      location: "Remote",
      type: "Leadership",
      description: "Leading the Android development team, organizing workshops, mentoring junior developers, and fostering a community of mobile developers.",
      highlights: [
        "Organized 10+ technical workshops on Android development",
        "Mentored 50+ student developers",
        "Led team of 8 developers for community projects",
        "Speaker at multiple tech events and meetups"
      ],
      color: "accent"
    },
    {
      company: "TechnoHacks EduTech",
      role: "Web Development Intern",
      duration: "2023",
      location: "Remote",
      type: "Internship",
      description: "Developed full-stack web applications using modern JavaScript frameworks. Focused on creating responsive, accessible, and performant web experiences.",
      highlights: [
        "Built 5+ responsive web applications",
        "Implemented authentication systems using JWT",
        "Created reusable component libraries",
        "Participated in code reviews and pair programming"
      ],
      color: "primary"
    },
    {
      company: "CodeClause",
      role: "Android Development Intern",
      duration: "2023",
      location: "Remote",
      type: "Internship",
      description: "Focused on Android app development using Kotlin and modern Android architecture components.",
      highlights: [
        "Developed 3 Android applications from scratch",
        "Implemented MVVM architecture pattern",
        "Integrated Firebase services for backend",
        "Published apps on Google Play Store"
      ],
      color: "accent"
    },
    {
      company: "AICTE",
      role: "Data Engineering Virtual Intern",
      duration: "2023",
      location: "Virtual",
      type: "Internship",
      description: "Completed intensive program on data engineering, learning about data pipelines, ETL processes, and big data technologies.",
      highlights: [
        "Completed 8-week intensive training program",
        "Learned data pipeline development with Python",
        "Worked with SQL and NoSQL databases",
        "Built data visualization dashboards"
      ],
      color: "primary"
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Professional Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A track record of delivering impactful solutions across multiple organizations.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative grid md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? '' : 'md:direction-rtl'
                  }`}
                >
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 md:-translate-x-1/2 ${
                      exp.color === 'primary' 
                        ? 'border-primary bg-primary/30' 
                        : 'border-accent bg-accent/30'
                    }`}
                    style={{ top: '2rem' }}
                  >
                    <div 
                      className={`absolute inset-1 rounded-full ${
                        exp.color === 'primary' ? 'bg-primary' : 'bg-accent'
                      }`} 
                    />
                  </div>

                  {/* Content */}
                  <div 
                    className={`pl-8 md:pl-0 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12 md:text-left'
                    }`}
                    style={{ direction: 'ltr' }}
                  >
                    <div className={`glass rounded-2xl p-6 hover-lift ${
                      index % 2 === 0 ? 'md:ml-auto' : ''
                    }`}>
                      {/* Header */}
                      <div className={`flex flex-wrap items-center gap-2 mb-2 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          exp.type === 'Leadership' 
                            ? 'bg-accent/20 text-accent' 
                            : 'bg-primary/20 text-primary'
                        }`}>
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      
                      <div className={`flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.highlights.map((highlight, hIndex) => (
                          <li 
                            key={hIndex} 
                            className={`text-sm text-muted-foreground flex items-start gap-2 ${
                              index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                              exp.color === 'primary' ? 'bg-primary' : 'bg-accent'
                            }`} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
