// src/components/ProjectGrid.tsx
export default function ProjectGrid() {
  // 这里可以替换成你自己的项目信息
  const projects = [
    {
      title: "个人简历网站",
      description: "使用 Next.js + Tailwind CSS 构建的响应式个人简历，展示个人技能与项目经历。",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/resume-website"
    },
    {
      title: "电商平台",
      description: "基于 React 的全栈电商应用，支持商品展示、购物车和支付功能。",
      techStack: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      title: "任务管理系统",
      description: "团队协作任务管理工具，支持实时同步与权限控制。",
      techStack: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/task-manager"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-3">{project.description}</p >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href= "_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline flex items-center"
          >
            <span>查看源码</span>
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a >
        </div>
      ))}
    </div>
  );
}