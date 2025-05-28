
import React from 'react';
import { Briefcase, School, Calendar } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  institution,
  period,
  description,
  type,
}) => {
  return (
    <div className="timeline-item animate-fade-in">
      <div className="timeline-dot">
        {type === 'work' ? (
          <Briefcase size={16} />
        ) : (
          <School size={16} />
        )}
      </div>
      <div className="timeline-card">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-neon-blue">
              {type === 'work' ? company : institution}
            </p>
          </div>
          <span className="flex items-center gap-1 text-sm text-gray-400">
            <Calendar size={16} />
            {period}
          </span>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const experiences = [
    {
      title: "Java Developer",
      company: "Dhruvacode",
      period: "2022-2023",
      description: "Led the development of enterprise applications using Java, React and leveraged cloud technologies for deployment and scaling.",
      type: 'work' as const,
    },
    {
      title: "NLP Developer",
      company: "Collaborated With Intel India",
      period: "2020-2021",
      description: "Built Speech-To-Text Transcription Tool using NLP techniques, enhancing accuracy and performance. It converts live audio to text in real-time.",
      type: 'work' as const,
    },
  ];

  const education = [
    {
      title: "Bachelor of Computer Science Engineering (AIML)",
      institution: "Inderprastha Engineering College",
      period: "2021 - 2025",
      description: "Specialized in Software Engineering with a focus on distributed systems and cloud computing.",
      type: 'education' as const,
    },
    {
      title: "Senior Secondary Education",
      institution: "Dr. Rajendra Prasad Kendriya Vidyalaya",
      period: "2019 - 2021",
      description: "Graduated with honors, focusing on core subjects including Physics, Chemistry, and Mathematics, with a strong emphasis on Computer Science. Developed foundational skills in programming, data structures, and algorithms.",
      type: 'education' as const,
    },
    {
      title: "Secondary School Education",
      institution: "Rajkiya Sarvodaya Bal Vidyalaya",
      period: "2017 - 2019",
      description: "Completed 10th grade under the Central Board of Secondary Education (CBSE) with a strong foundation in Mathematics, Science, English, and Travel & Tourism. Gained essential academic and analytical skills.",
      type: 'education' as const,
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black/80 to-background relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 justify-center mb-8">
              <Briefcase size={24} className="text-neon-purple" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="mt-12">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  {...exp}
                  type="work"
                />
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 justify-center mb-8">
              <School size={24} className="text-neon-purple" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="mt-12">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  {...edu}
                  type="education"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
