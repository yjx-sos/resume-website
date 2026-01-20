// 可选：添加 SEO 配置
export const metadata = {
  title: '教育经历 - 你的姓名 | 个人简历',
  description: '我的教育背景和相关经历',
};

// ✅ 必须：默认导出 React 页面组件
export default function Education() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">教育经历</h1>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h3 className="text-xl font-semibold">某某大学 - 计算机科学与技术</h3>
          <p className="text-gray-600">2019-2023 | 本科</p>
        </div>
        {/* 可以添加更多教育经历 */}
      </div>
    </div>
  );
}