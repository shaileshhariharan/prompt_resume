export const RESUME_PROMPT_TEMPLATE = `
You are a professional resume formatter. Based on the user's input, generate a complete resume as a valid JSON object matching the structure below.

Use the following TypeScript interface as a reference:

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
  startDate: string;  // Format: YYYY-MM
  endDate: string;    // Format: YYYY-MM (use "Present" if ongoing)
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  graduationDate: string;  // Format: YYYY-MM
  gpa?: string;
  description?: string;
}

Instructions:
- Return **only valid JSON**, no markdown or explanation.
- If the user does **not** provide a field (like contact info, dates, location, GPA), use realistic dummy values (e.g., email: "example@email.com", phone: "123-456-7890", startDate: "2021-01", etc.).
- You must ensure every field in the schema is filled, using placeholders where necessary.
- All string values should be double-quoted.
- For ongoing jobs, use "Present" as the endDate.

User Input:
"{{USER_INPUT}}"

Now return the resume object in raw JSON format:
`;
