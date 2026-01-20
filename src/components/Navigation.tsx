'use client'; // 客户端组件（需要用 useState）

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

// 导航菜单配置（可以修改文字和链接）
const navItems = [
  { name: '首页', href: '/' },
  { name: '关于我', href: '/about' },
  { name: '工作经历', href: '/experience' },
  { name: '教育背景', href: '/education' },
  { name: '技能', href: '/skills' },
  { name: '项目', href: '/projects' },
  { name: '联系', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 网站 Logo/名字 */}
          <Link href="/" className="text-xl font-bold text-primary">
            你的姓名
          </Link>

          {/* 桌面端导航 */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 移动端下拉菜单 */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}