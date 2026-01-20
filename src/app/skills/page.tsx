import SkillsGrid from '@/components/SkillsGrid';
export const metadata = {
  title: '技能展示 - 你的姓名 | 个人简历',
  description: '查看我的技术栈和专业技能',
};

export default function SkillsPage() {
  return (
    <div>
      <h1 className="section-title">技能展示</h1>
      <SkillsGrid />
    </div>
  );
}