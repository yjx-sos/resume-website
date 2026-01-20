
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// 引入全局字体
const inter = Inter({ subsets: ['latin'] });

// 网站全局元数据（SEO用）
export const metadata: Metadata = {
  title: '个人简历 - 你的姓名 | 前端开发工程师',
  description: '专业的个人简历网站，展示我的工作经历、技能和项目作品',
  keywords: ['前端开发', 'React', 'Next.js', '个人简历'],
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
