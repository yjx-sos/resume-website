// 保留你原来的 metadata（SEO 配置）
export const metadata = {
  title: '关于我 - 你的姓名 | 个人简历',
  description: '了解我的专业背景、工作经验和职业目标',
  keywords: ['关于我', '个人介绍', '前端开发'],
};

// ✅ 新增：Next.js 要求的「默认导出 React 页面组件」
export default function About() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">关于我</h1>
      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          这里是你的个人介绍，可以填写教育背景、工作经历、技术栈等信息。
        </p>
        <p>
          比如：专注于前端开发，拥有丰富的 React 和 Next.js 项目经验，热爱构建优雅、高效的 Web 应用。
        </p>
      </div>
    </div>
  );
}