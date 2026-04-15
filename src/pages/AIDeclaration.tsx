import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Bot, Sparkles, Code, Brain, Shield } from "lucide-react";

const AI_TOOLS = [
  {
    name: "ChatGPT",
    description: "Phân tích giáo trình, tóm tắt dữ liệu gốc",
    icon: Bot,
    color: "from-emerald-500 to-green-600",
  },
  {
    name: "Gemini",
    description: "Gợi ý cấu trúc UI/UX, tạo Prompt design",
    icon: Sparkles,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Lovable + Claude",
    description: "Lập trình toàn bộ giao diện web dự án",
    icon: Code,
    color: "from-purple-500 to-pink-600",
  },
];

const INTEGRITY_POINTS = [
  {
    title: "Cam kết trung thực",
    content: "Dự án được thực hiện với tinh thần trung thực, không plagerism, tuân thủ nguyên tắc liêm chính học thuật.",
    icon: Brain,
  },
  {
    title: "Trích dẫn nguồn",
    content: "Tất cả tài liệu, dữ liệu và hình ảnh được trích dẫn rõ ràng. Không sử dụng nội dung có bản quyền khi chưa được phép.",
    icon: Shield,
  },
];

export default function AIDeclaration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mb-6 shadow-lg shadow-blue-500/25">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Khai báo sử dụng AI
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Thông tin minh bạch về các công cụ AI được sử dụng trong dự án
            </p>
          </motion.div>

          {/* AI Usage Table */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-100 text-blue-600 font-bold">1</span>
              Bảng sử dụng AI
            </h2>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-5 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-100">
                <div className="col-span-4 font-semibold text-gray-700">Công cụ AI</div>
                <div className="col-span-8 font-semibold text-gray-700">Mục đích sử dụng</div>
              </div>
              {AI_TOOLS.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className={`grid grid-cols-12 gap-4 p-5 items-center ${index !== AI_TOOLS.length - 1 ? "border-b border-gray-50" : ""} hover:bg-gray-50/80 transition-colors`}
                >
                  <div className="col-span-4 flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-md`}>
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">{tool.name}</span>
                  </div>
                  <div className="col-span-8 text-gray-600 leading-relaxed">
                    {tool.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Academic Integrity */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-green-100 text-green-600 font-bold">2</span>
              Liêm chính Học thuật
            </h2>

            <div className="grid gap-4">
              {INTEGRITY_POINTS.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-amber-50 rounded-xl p-5 border border-amber-100"
          >
            <p className="text-amber-800 text-sm">
              <span className="font-semibold">Lưu ý:</span> Nội dung học thuật (chính trị, lịch sử, kinh tế) do người dùng chịu trách nhiệm. AI chỉ hỗ trợ kỹ thuật và thiết kế.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
