import { Monitor, Database, Wrench, FileCode2, Check } from 'lucide-react';

const SERVICES = [
  {
    icon: Monitor,
    title: 'Webシステム開発',
    price: '15万円〜',
    description: '予約管理・問診票・業務管理など、クリニックの紙運用をWebに移します',
    items: [
      '要件定義・画面設計',
      'フロントエンド実装（Next.js）',
      'API・DB設計・実装',
      'テスト・デプロイ',
    ],
    highlight: false,
  },
  {
    icon: Database,
    title: '紙・Excel業務のWeb化',
    price: '20万円〜',
    description: '今の運用フローをそのままWebに移行。スタッフの操作を変えずに電子化します',
    items: [
      '現行業務ヒアリング',
      'データ移行設計・実施',
      '既存システムとの連携',
      '運用マニュアル作成',
    ],
    highlight: true,
  },
  {
    icon: Wrench,
    title: '保守・改修',
    price: '3万円/月〜',
    description: '既存Webシステムの機能追加・バグ修正・パフォーマンス改善',
    items: [
      '月次定期メンテナンス',
      '機能追加・仕様変更',
      'セキュリティアップデート',
      'チャットサポート',
    ],
    highlight: false,
  },
  {
    icon: FileCode2,
    title: 'スポット相談',
    price: '5,000円/h',
    description: 'どのシステムを入れればいいか迷っている、まず話を聞きたい、という方へ',
    items: [
      'システム選定アドバイス',
      '既存システムの診断',
      'コードレビュー',
      'パフォーマンス診断',
    ],
    highlight: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">サービス・料金</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            要件が固まっていなくても大丈夫です。まずは現状の業務を聞かせてください。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`relative p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                service.highlight
                  ? 'border-blue-500 bg-blue-600 text-white'
                  : 'border-gray-200 bg-white hover:border-blue-200'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                    よくあるご依頼
                  </span>
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  service.highlight ? 'bg-white/20' : 'bg-blue-50'
                }`}
              >
                <service.icon
                  size={22}
                  className={service.highlight ? 'text-white' : 'text-blue-600'}
                />
              </div>

              <h3
                className={`text-lg font-bold mb-1 ${
                  service.highlight ? 'text-white' : 'text-gray-900'
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-2xl font-bold mb-3 ${
                  service.highlight ? 'text-yellow-300' : 'text-blue-600'
                }`}
              >
                {service.price}
              </p>
              <p
                className={`text-sm mb-4 leading-relaxed ${
                  service.highlight ? 'text-blue-100' : 'text-gray-500'
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-2 text-xs ${
                      service.highlight ? 'text-blue-100' : 'text-gray-600'
                    }`}
                  >
                    <Check
                      size={13}
                      className={service.highlight ? 'text-yellow-300' : 'text-green-500'}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          ※ 価格は目安です。規模・要件により変動します。まずはお気軽にご相談ください。
        </p>
      </div>
    </section>
  );
}
