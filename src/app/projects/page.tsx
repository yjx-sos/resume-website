import ProjectGrid from '@/components/ProjectGrid';

export const metadata = {
  title: '项目作品 - 你的姓名 | 个人简历',
  description: '查看我参与的项目和作品',
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="section-title">项目作品</h1>
      <ProjectGrid />
    </div>
  );
}