// SEO 元数据配置（和其他页面格式保持一致）
export const metadata = {
  title: '教育经历 - 你的姓名 | 个人简历',
  description: '查看我的教育背景、学历和相关专业培训经历',
  keywords: ['教育经历', '学历', '专业背景', '培训经历']
};

// Next.js 要求的默认导出页面组件（核心）
export default function Education() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* 和其他页面统一的标题样式 */}
      <h1 className="section-title">教育经历</h1>
      
      {/* 教育经历列表（可根据你的实际情况修改） */}
      <div className="space-y-8 mt-8">
        {/* 第一条教育经历 */}
        <div className="border-l-4 border-blue-500 pl-6 py-2">
          <h3 className="text-xl font-semibold text-gray-800">某某大学 - 计算机科学与技术</h3>
          <p className="text-gray-600 mt-1">2019.09 - 2023.06 | 本科 | 学士学位</p>
          <p className="text-gray-700 mt-2">
            主修课程：Web前端开发、数据结构、计算机网络、React框架应用<br/>
            荣誉：校级奖学金、优秀毕业生、前端开发竞赛二等奖
          </p>
        </div>

        {/* 第二条教育经历（可选，比如培训/深造） */}
        <div className="border-l-4 border-blue-500 pl-6 py-2">
          <h3 className="text-xl font-semibold text-gray-800">某某培训机构 - 全栈开发进阶</h3>
          <p className="text-gray-600 mt-1">2022.07 - 2022.09 | 线下培训</p>
          <p className="text-gray-700 mt-2">
            学习内容：Next.js实战、Tailwind CSS、Node.js后端开发<br/>
            成果：完成3个实战项目，获得培训结业证书
          </p>
        </div>
      </div>
    </div>
  );
}