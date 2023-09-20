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
        location: 'JBMLD, NJ',
        duration: 'October 2019 - Present',
        description: "Dedicated to ensuring aircraft's integrity. The main role is to identify discrepancies, perform thorough inspections, keep detailed records, and coordinate maintenance."
      },
      {
        title: 'Pharmacy Technician',
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
        description: 'Study Strokes'
      }
    ],
    education: {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of XYZ',
      location: 'Anytown, USA',
      graduationYear: '2015'
    },
    skills: ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'SQL', 'Git', 'Express'],
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
        <p>{resumeData.education.degree}</p>
        <p>{resumeData.education.institution} | {resumeData.education.location}</p>
        <p>Graduated {resumeData.education.graduationYear}</p>
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
