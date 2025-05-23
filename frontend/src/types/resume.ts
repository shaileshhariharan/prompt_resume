export interface Resume {
  fullName: string;
  contactInfo: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
  };
  professionalSummary: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
  certifications?: string[];
}

export interface WorkExperience {
  position: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  graduationDate: string;
  gpa?: string;
  description?: string;
}