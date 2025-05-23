/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef } from "react";
import { Resume } from "../types/resume";
import { Download, Printer } from "lucide-react";

interface ResumePreviewProps {
  resume: Resume;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resume }) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!targetRef.current) return;

    try {
      const element = targetRef.current;
      const opt = {
        margin: 0.25,
        filename: `${resume.fullName.replace(/\s+/g, "_")}_resume.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };
      // @ts-ignore
      await window.html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Resume Preview</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md shadow-sm transition-colors"
          >
            <Download className="w-4 h-4 mr-1" />
            Download PDF
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1.5 rounded-md shadow-sm transition-colors"
          >
            <Printer className="w-4 h-4 mr-1" />
            Print
          </button>
        </div>
      </div>

      <div
        ref={targetRef}
        className="resume-preview bg-white border border-gray-200 shadow-sm p-8 max-w-[794px] max-h-[1123px] overflow-y-auto mx-auto"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {resume.fullName}
          </h1>
          <div className="flex flex-wrap justify-center gap-x-3 mt-2 text-gray-600 text-sm">
            {resume.contactInfo?.email && (
              <span>{resume.contactInfo.email}</span>
            )}
            {resume.contactInfo?.phone && (
              <span>• {resume.contactInfo.phone}</span>
            )}
            {resume.contactInfo?.location && (
              <span>• {resume.contactInfo.location}</span>
            )}
            {resume.contactInfo?.linkedin && (
              <span>• {resume.contactInfo.linkedin}</span>
            )}
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {resume.professionalSummary}
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">
            Work Experience
          </h2>
          <div className="space-y-4">
            {resume.workExperience.map((job, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {job.position}
                    </h3>
                    <p className="text-gray-700">
                      {job.company}
                      {job.location ? `, ${job.location}` : ""}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    {job.startDate} - {job.endDate}
                  </p>
                </div>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-sm ml-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">
            Education
          </h2>
          <div className="space-y-4">
            {resume.education.map((edu, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700">
                      {edu.institution}
                      {edu.location ? `, ${edu.location}` : ""}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">{edu.graduationDate}</p>
                </div>
                {edu.gpa && (
                  <p className="text-sm text-gray-700 mt-1">GPA: {edu.gpa}</p>
                )}
                {edu.description && (
                  <p className="text-sm text-gray-700 mt-1">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {resume.certifications && resume.certifications.length > 0 && (
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {resume.certifications.map((cert, index) => (
                <li key={index} className="ml-4">
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
