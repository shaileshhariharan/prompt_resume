# PromptResume

PromptResume is an AI-powered resume builder that generates professional resumes from simple text prompts. It combines a React frontend UI with an Express backend API to create personalized resumes using advanced language models.

---

## Features

- Generate resumes by entering natural language descriptions of your background and skills
- Example prompts to help you get started quickly
- Clean, responsive design with live preview
- Download resumes in PDF format (planned)
- Customizable and extendable

---

## Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Backend:** Express.js, Node.js  
- **AI Integration:** Calls to language model API for resume generation  
- **HTTP Client:** Axios for API requests  

---

## Screenshots
<img width="1470" alt="Screenshot 2025-05-24 at 12 07 33 AM" src="https://github.com/user-attachments/assets/65c94841-b411-423c-ae2d-7bdbb49fd292" />
<img width="1470" alt="Screenshot 2025-05-24 at 12 27 28 AM" src="https://github.com/user-attachments/assets/7bc2a5ba-56aa-4a74-828f-c73888bab1eb" />

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)  
- npm or yarn  
- API keys/configuration for your language model (if applicable)  

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/promptresume.git
   cd promptresume
   ```

2. Install dependencies for backend and frontend:

   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies (if in separate folder)
   cd frontend
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the backend folder with your API keys and configuration:

   ```
   GROQ_API_KEY=your_api_key_here
   ```

4. Run the backend server:

   ```bash
   npm run dev
   ```

5. Run the frontend app:

   ```bash
   cd frontend
   npm start
   ```

6. Open your browser and go to `http://localhost:3000` (or your configured port).

---

## Usage

* Enter your professional background and skills in the prompt box
* Use the example prompts to get started quickly
* Click **Generate Resume** to create your AI-powered resume
* Preview and (future) download your resume as PDF

---

## Project Structure

```
/backend     # Express server and API logic
/frontend    # React application and UI components
```

---

## Contact

Created by Shailesh H - feel free to reach out!

