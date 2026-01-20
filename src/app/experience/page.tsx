import ExperienceTimeline from '@/components/ExperienceTimeline';

export const metadata = {
  title: '工作经历 - 你的姓名 | 个人简历',
  description: '查看我的工作经历和项目经验',
};

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="section-title">工作经历</h1>
      <ExperienceTimeline />
    </div>
  );
}