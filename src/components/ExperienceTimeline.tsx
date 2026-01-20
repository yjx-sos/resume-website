import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { resumeData } from '@/data/resume-data';

export default function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 遍历所有工作经历，生成时间轴项 */}
      {resumeData.workExperiences.map((exp, index) => (
        <div
          key={exp.id}
          className="relative pl-8 pb-12"
        >
          {/* 时间轴连接线（除了最后一项） */}
          {index < resumeData.workExperiences.length - 1 && (
            <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-gray-300" />
          )}

          {/* 时间轴圆点 */}
          <div className="absolute left-0 top-0 w-6 h-6 bg-primary rounded-full border-4 border-white" />

          {/* 内容卡片 */}
          <div className="card">
            {/* 标题行：职位 + 公司 */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{exp.position}</h3>
              <span className="text-primary font-medium">{exp.company}</span>
            </div>

            {/* 时间 + 地点 */}
            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* 职责描述 */}
            <ul className="space-y-2 mb-4">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <Briefcase className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* 技术栈标签 */}
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
