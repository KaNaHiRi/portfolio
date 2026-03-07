import { Stethoscope, Code2, TrendingUp, Users } from 'lucide-react';

const STRENGTHS = [
  {
    icon: Stethoscope,
    title: '医療現場を知っている',
    description:
      '電子カルテ・PACS・健康診断システムの開発・保守10年以上。「現場で使われないシステム」を作らないための視点を持っています。',
    color: 'text-red-500 bg-red-50',
  },
  {
    icon: Code2,
    title: 'C#からWebまで書ける',
    description:
      'C#/WPFの業務システムを10年書いてきた土台があるので、Next.js/TypeScriptへの移行もロジックの組み方が似ていてスムーズです。',
    color: 'text-blue-500 bg-blue-50',
  },
  {
    icon: TrendingUp,
    title: 'テストまで書きます',
    description:
      'Jest・Playwrightによる自動テスト、GitHub ActionsのCI/CDまで整備します。納品後に壊れにくい作りを心がけています。',
    color: 'text-green-500 bg-green-50',
  },
  {
    icon: Users,
    title: '専門用語を使いません',
    description:
      '医療スタッフとの打ち合わせを10年続けてきたので、ITに詳しくない方への説明には慣れています。',
    color: 'text-purple-500 bg-purple-50',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            紙運用を知っているから、Web化できる
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            本職では今も紙運用が現役です。大きな医療機関ほどシステム移行には時間とお金がかかります。
            だからこそ、身軽に動ける個人クリニックのWeb化を外から支援したいと思っています。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                K
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">KaNaHiRi</h3>
                <p className="text-gray-500 text-sm">医療システム部門 勤務</p>
                <p className="text-gray-500 text-sm">フリーランス（Web開発・副業）</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              医療機関のシステム部門で10年以上、電子カルテ・PACS・健診システムの開発・保守を担当してきました。今も現場では何十年前から変わらない紙の運用が動いています。
            </p>
            <p className="text-gray-600 leading-relaxed">
              その経験を活かして、個人クリニックの紙・Excel業務をWebに移す仕事を副業として始めました。
              <strong className="text-gray-900">「使われるシステム」</strong>
              を作るために、まず現場の運用を聞くことを大事にしています。
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['医療システム10年+', 'Next.js', 'TypeScript', 'C#/WPF'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {STRENGTHS.map((item) => (
              <div
                key={item.title}
                className="p-5 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${item.color}`}>
                  <item.icon size={20} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}