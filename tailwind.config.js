/** @type {import('tailwindcss').Config} */
module.exports = {
  // 关键：覆盖你项目实际的文件路径
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // 使用 extend 来扩展默认主题
    extend: {
      colors: {
        primary: "#3b82f6",   // 你的主色
        secondary: "#10b981", // 你的次色
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}