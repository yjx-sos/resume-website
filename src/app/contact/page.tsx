import ContactForm from '../../components/ContactForm';
import { resumeData } from '@/data/resume-data';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const metadata = {
  title: '联系我 - 你的姓名 | 个人简历',
  description: '通过表单或社交平台联系我',
};

export default function ContactPage() {
  return (
    <div>
      <h1 className="section-title">联系我</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {/* 联系信息 */}
        <div>
          <h3 className="text-xl font-bold mb-6">联系信息</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-4 text-blue-500" />
              <div>
                <p className="font-medium">邮箱</p>
                <p className="text-gray-600">{resumeData.personalInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-4 text-blue-500" />
              <div>
                <p className="font-medium">电话</p>
                <p className="text-gray-600">{resumeData.personalInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-4 text-blue-500" />
              <div>
                <p className="font-medium">地址</p>
                <p className="text-gray-600">{resumeData.personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* 社交链接 */}
          <div className="mt-8">
            <h4 className="text-lg font-medium mb-4">社交平台</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* 联系表单 */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}