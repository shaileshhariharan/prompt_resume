import { Resume } from '../types/resume';

// Mock data for development - in a real app, this would call the OpenAI API
export const generateResume = async (prompt: string): Promise<Resume> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Extract name from prompt or use default
  const nameMatch = prompt.match(/(\w+\s+\w+)/);
  const fullName = nameMatch ? nameMatch[0] : "Jane Doe";
  
  // Parse skills from prompt
  const techSkills = ["JavaScript", "React", "TypeScript", "Node.js", "HTML/CSS"];
  const softSkills = ["Communication", "Problem Solving", "Teamwork", "Leadership"];
  
  // Check for career level indicators
  const isSenior = prompt.toLowerCase().includes("senior") || prompt.toLowerCase().includes("5 years");
  const isRecent = prompt.toLowerCase().includes("recent graduate") || prompt.toLowerCase().includes("entry-level");
  
  // Generate a contextual resume based on the prompt
  const mockResume: Resume = {
    fullName,
    contactInfo: {
      email: "example@email.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/janedoe"
    },
    professionalSummary: isSenior 
      ? "Experienced software developer with a proven track record of delivering high-quality applications. Skilled in modern web technologies and passionate about creating efficient, scalable solutions."
      : isRecent 
        ? "Recent computer science graduate with a strong foundation in programming principles and a passion for technology. Eager to apply academic knowledge to real-world projects."
        : "Dedicated professional with a diverse skill set and a track record of success. Committed to continuous improvement and delivering exceptional results.",
    workExperience: isSenior ? [
      {
        position: "Senior Software Developer",
        company: "Tech Innovations Inc.",
        location: "San Francisco, CA",
        startDate: "Jan 2020",
        endDate: "Present",
        description: [
          "Led development of a customer-facing web application that increased user engagement by 45%",
          "Architected and implemented RESTful APIs serving over 1 million requests daily",
          "Mentored junior developers and conducted code reviews to ensure code quality",
          "Collaborated with product and design teams to optimize user experience"
        ]
      },
      {
        position: "Software Developer",
        company: "Digital Solutions LLC",
        location: "San Jose, CA",
        startDate: "Mar 2018",
        endDate: "Dec 2019",
        description: [
          "Developed responsive web applications using React and Node.js",
          "Implemented automated testing, reducing bugs in production by 30%",
          "Optimized database queries, improving application performance by 25%",
          "Participated in Agile development cycles with bi-weekly sprints"
        ]
      }
    ] : [
      {
        position: "Junior Developer",
        company: "StartUp Technologies",
        location: "Remote",
        startDate: "Jun 2022",
        endDate: "Present",
        description: [
          "Develop and maintain front-end components using React and TypeScript",
          "Collaborate with designers to implement responsive UI designs",
          "Fix bugs and improve application performance",
          "Participate in code reviews and team meetings"
        ]
      },
      {
        position: "Web Development Intern",
        company: "Digital Agency Co.",
        location: "Boston, MA",
        startDate: "Jan 2022",
        endDate: "May 2022",
        description: [
          "Assisted in developing websites for various clients",
          "Created responsive layouts using HTML, CSS, and JavaScript",
          "Learned version control with Git and collaborated through GitHub",
          "Participated in client meetings and requirement gathering sessions"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California",
        location: "Berkeley, CA",
        graduationDate: isRecent ? "May 2022" : "May 2017",
        gpa: "3.8/4.0"
      }
    ],
    skills: [...techSkills, ...softSkills],
    certifications: [
      "AWS Certified Developer - Associate",
      "Professional Scrum Master I (PSM I)"
    ]
  };
  
  return mockResume;
};