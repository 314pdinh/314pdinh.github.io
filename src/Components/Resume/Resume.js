import React from 'react';
import './Resume.css';

const Resume = () => {
  const resumeData = {
    name: 'Peter Dinh',
    title: 'Software Developer',
    summary: 'Experienced software developer with a passion for creating efficient and elegant solutions. Proficient in various programming languages and frameworks, with a strong foundation in computer science principles.',
    experience: [
      {
        title: 'Aircraft Crew Chief',
        company: 'Air Force',
        location: 'JBMDL, NJ',
        duration: 'October 2018 - Present',
        description: "Dedicated to ensuring aircraft's integrity. The main role is to identify discrepancies, perform thorough inspections, keep detailed records, and coordinate maintenance."
      },
      {
        title: 'Senior Pharmacy Technician',
        company: 'Rite Aid',
        location: 'Philadelphia, PA',
        duration: 'October 2020 - Present',
        description: 'Assist the pharmacists in providing quality pharmaceutical care. The role includes processing and verifying insurance, preparing medications, communicating over phone calls, recording medical information, and addressing conflicts with customers or insurance billing companies.'
      },
      {
        title: 'Research Assistant',
        company: 'VietCapacity',
        location: 'Philadelphia, PA',
        duration: 'October 2020 - Present',
        description: 'Focused on raising awareness about stroke symptoms and how to get help in an emergent event, through educational sessions and workshops. This research aimed to improve patient care outcomes and empower local healthcare professionals to emerge as influential leaders and advocates within their respective domains.'
      }
    ],
    education: [
      {
        degree: 'Certification of Software Engineer',
        institution: 'App Academy',
        location: 'Fulltime Online',
        graduationYear: '2023'
      },
      {
        degree: 'N/A',
        institution: 'Temple University',
        location: 'Philadelphia, PA',
        graduationYear: 'N/A'
      },
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'SQL', 'Git', 'Express', 'Python'],
    languages: ['English (Fluent)', 'Vietnamese (Intermediate)']
  };

  return (
    <div className="resume">
      <h1>{resumeData.name}</h1>
      <h2>{resumeData.title}</h2>

      <div className="summary">
        <h3>Summary</h3>
        <p>{resumeData.summary}</p>
      </div>

      <div className="experience">
        <h3>Experience</h3>
        {resumeData.experience.map((exp, index) => (
          <div key={index}>
            <h4>{exp.title}</h4>
            <p>{exp.company} | {exp.location}</p>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="education">
        <h3>Education</h3>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <p>Degree: {edu.degree}</p>
            <p>{edu.institution} | {edu.location}</p>
            <p>Graduated {edu.graduationYear}</p>
          </div>
        ))}
      </div>

      <div className="skills">
        <h3>Skills</h3>
        <ul>
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="languages">
        <h3>Languages</h3>
        <ul>
          {resumeData.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
