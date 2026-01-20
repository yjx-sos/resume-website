import { ArrowDown } from 'lucide-react';
import { resumeData } from '@/data/resume-data';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          你好，我是 <span className="text-primary">{resumeData.personalInfo.name}</span>
        </h1>
        <h2 className="text-2xl text-gray-600 mb-6">
          {resumeData.personalInfo.title}
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          专注于前端开发，拥有丰富的React和Next.js项目经验。
          热衷于构建优雅、高效的Web应用程序。
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/contact"
            className="btn-primary"
          >
            联系我
          </Link>
          <Link
            href="/projects"
            className="btn-secondary"
          >
            查看项目
          </Link>
        </div>
        <div className="mt-12">
          <ArrowDown className="mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
}