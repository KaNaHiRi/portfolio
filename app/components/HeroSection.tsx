import { ArrowDown, Github, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          フリーランス受付中
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          その紙の作業、
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Webに移しませんか。
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          予約表はExcel、問診票は手書き、検査結果はFAX——<br />
          その業務、そのままWebに移せます。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#works"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            実績を見る
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all hover:-translate-y-0.5"
          >
            無料相談する
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <a
            href="https://github.com/KaNaHiRi/delivery-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://delivery-app-delta-ecru.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <ExternalLink size={18} />
            デモサイト
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors animate-bounce"
        aria-label="下へスクロール"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
