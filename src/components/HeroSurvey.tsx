import { motion, AnimatePresence } from "framer-motion";
import { useVoting } from "@/hooks/useVoting";

const OPTIONS = [
  "Đồng tình với A",
  "Đồng tình với B",
  "Cả A và B đều đúng một phần",
];

const EXPLANATION = `Phân xử: Cả hai đều đúng một phần. A đúng vì sự ổn định, không xung đột sắc tộc là một thành tựu to lớn. Tuy nhiên, B cũng đúng vì "không xung đột" chưa đồng nghĩa với "bình đẳng thực tế".

Căn cứ lý luận: Theo Lênin, bình đẳng dân tộc không chỉ là quyền trên giấy tờ (chính trị, pháp lý) mà phải là bình đẳng thực tế (xóa bỏ chênh lệch kinh tế, văn hóa).

Nhận định: Thách thức lớn nhất của Việt Nam hiện nay là rút ngắn khoảng cách giàu - nghèo giữa đồng bào miền núi và miền xuôi, nhưng vẫn giữ được bản sắc văn hóa.`;

export default function HeroSurvey() {
  const { hasVoted, selectedOption, isLoading, castVote, getPercentage, votes, total } = useVoting(3);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto w-full"
      >
        <p className="text-sm font-semibold tracking-[0.3em] uppercase text-accent-crimson mb-6">
          Kinh tế chính trị Mác — Lênin
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-foreground mb-4">
          Vấn đề Dân tộc
          <br />
          <span className="text-accent-crimson">trong thời kỳ quá độ</span>
          <br />
          lên Chủ nghĩa xã hội
        </h1>
        <div className="w-24 h-1 bg-accent-crimson mt-6 mb-16" />
      </motion.div>

      {/* Survey Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-3xl mx-auto w-full"
      >
        <div className="border-2 border-foreground p-8 md:p-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-6">
            Tình huống thảo luận
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground mb-4">
            <strong>A</strong> cho rằng: <em>"Việt Nam có 54 dân tộc chung sống hòa thuận là bằng chứng chính sách dân tộc đã thành công hoàn toàn."</em>
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground mb-8">
            <strong>B</strong> phản bác: <em>"Chưa thành công hoàn toàn vì chênh lệch kinh tế, giáo dục giữa các dân tộc vẫn còn lớn."</em>
          </p>
          <p className="text-base font-semibold text-foreground mb-8">
            Nhóm bạn phân xử thế nào?
          </p>

          {/* Options */}
          <div className="space-y-3">
            {OPTIONS.map((opt, i) => (
              <button
                key={i}
                disabled={hasVoted || isLoading}
                onClick={() => castVote(i)}
                className={`w-full text-left p-4 border-2 transition-all duration-300 ${
                  selectedOption === i
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-foreground/20 hover:border-foreground"
                } ${hasVoted || isLoading ? "cursor-default" : "cursor-pointer"}`}
              >
                <span className="font-bold mr-3 text-sm">
                  {String.fromCharCode(65 + i)}.
                </span>
                <span className="text-base">{opt}</span>
              </button>
            ))}
          </div>

          {/* Loading */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-8 flex items-center gap-3"
              >
                <div className="w-4 h-4 border-2 border-accent border-t-transparent animate-spin" />
                <span className="text-sm text-muted-foreground">Đang ghi nhận...</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <AnimatePresence>
            {hasVoted && !isLoading && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
                className="mt-10"
              >
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-6">
                  Kết quả thời gian thực — {total} phiếu
                </p>
                <div className="space-y-4">
                  {OPTIONS.map((opt, i) => {
                    const pct = getPercentage(i);
                    return (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{opt}</span>
                          <span className="text-sm font-bold">{pct}%</span>
                        </div>
                        <div className="w-full h-3 bg-secondary overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className={`h-full ${i === 2 ? "bg-accent-crimson" : "bg-foreground/30"}`}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{votes[i]} phiếu</p>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-10 border-l-4 border-accent-crimson pl-6"
                >
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent-crimson mb-4">
                    Phân tích
                  </p>
                  {EXPLANATION.split("\n\n").map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-foreground mb-4 last:mb-0">
                      {para}
                    </p>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
