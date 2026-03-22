const STEPS = [
  { number: "01", title: "無料相談", duration: "1〜2日", description: "まず現状の業務を聞かせてください。紙の運用フロー、使っているExcelの内容、困っていることを整理します。専門用語は使いません。", icon: "💬", color: "bg-blue-50 border-blue-200", numberColor: "bg-blue-600" },
  { number: "02", title: "要件確認・お見積もり", duration: "2〜3日", description: "ヒアリング内容をもとに、作る機能の範囲と費用をご提案します。納得いただいてから開発をスタートします。", icon: "📋", color: "bg-emerald-50 border-emerald-200", numberColor: "bg-emerald-600" },
  { number: "03", title: "開発・途中確認", duration: "2〜4週間", description: "週1回程度、進捗を共有します。実際に触っていただきながら調整できるので、完成後のギャップがありません。", icon: "⚙️", color: "bg-violet-50 border-violet-200", numberColor: "bg-violet-600" },
  { number: "04", title: "納品・サポート", duration: "納品後1ヶ月", description: "本番環境への公開をサポートします。納品後1ヶ月は無償で修正対応します。操作マニュアルも作成します。", icon: "🚀", color: "bg-orange-50 border-orange-200", numberColor: "bg-orange-600" },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">導入の流れ</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">はじめての方でも安心して進められるよう、4つのステップで進めます</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div key={step.number} className={`border rounded-2xl p-6 h-full ${step.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 ${step.numberColor} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {step.number}
                </div>
                <span className="text-2xl">{step.icon}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">{step.title}</h3>
              <p className="text-xs font-medium text-gray-400 mb-3">目安：{step.duration}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-6">まずは気軽にご相談ください。費用は一切かかりません。</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg">
            💬 無料相談する
          </a>
        </div>
      </div>
    </section>
  )
}
