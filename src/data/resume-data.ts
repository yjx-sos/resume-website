// 定义数据类型（TypeScript 会帮你检查错误）
export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

// 你的简历数据（直接替换成自己的信息！）
export const resumeData = {
  personalInfo: {
    name: "杨佳欣",
    title: "国际商务",
    email: "2762929763@qq.com",
    phone: "+86 18573139072",
    location: "湖南，中国",
  },
  workExperiences: [
    {
      id: "1",
      company: "广东摩力智能有限公司",
      position: "跨境电商运营助理",
      period: "2025年9月 - 至今",
      location: "广州",
      description: [
        "客户开发",
        "订单跟进",
        "客户维系",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    // 可以添加更多工作经历
  ],
  education: [
    {
      id: "1",
      school: "武汉理工大学",
      degree: "硕士",
      major: "国际商务",
      period: "2025年 - 2028年",
      location: "武汉",
    },
    // 可以添加更多教育经历
  ],
  skills: {
    "前端开发": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    "后端开发": ["Node.js", "Python", "PostgreSQL", "Redis", "Docker"],
    "工具与平台": ["Git", "VSCode", "Figma", "Vercel", "AWS"],
  },
  projects: [
    {
      id: "1",
      title: "网页制作",
      description: "一个基于Next.js的个人简历网站）",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/yourproject",
      liveUrl: "https://yourproject.vercel.app",
    },
    // 可以添加更多项目
  ],
};