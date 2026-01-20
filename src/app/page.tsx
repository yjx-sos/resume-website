import Hero from '@/components/Hero';
import FeaturedSkills from '@/components/FeaturedSkills';
import LatestProjects from '@/components/LatestProjects';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="py-12">
        <h2 className="section-title">核心技能</h2>
        <FeaturedSkills />
      </section>
      <section className="py-12">
        <h2 className="section-title">精选项目</h2>
        <LatestProjects />
      </section>
    </div>
  );
}