import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';

const WORKS = [
  {
    title: '配送管理システム',
    subtitle: 'クリニック向け業務管理 — ポートフォリオ作品',
    description:
      '医薬品・医療器材の配送管理を想定して作ったWebシステムです。認証・権限管理・多言語・PWA・自動更新など、実案件で必要になる機能を一通り実装しました。',
    demoUrl: 'https://delivery-app-delta-ecru.vercel.app',
    githubUrl: 'https://github.com/KaNaHiRi/delivery-app',
    tags: ['Next.js 15', 'TypeScript', 'Prisma', 'NextAuth.js', 'Tailwind CSS'],
    features: [
      'RBAC（管理者/一般ユーザー）',
      'リアルタイム自動更新',
      'PDF・Excel出力',
      'メール通知（Resend）',
      'CI/CD（GitHub Actions）',
      '多言語対応（日英）',
    ],
    badge: 'デモあり',
    badgeColor: 'bg-green-100 text-green-700',
    status: '公開中',
  },
  {
    title: 'クリニック予約管理システム',
    subtitle: '個人クリニック向け予約・問診票管理 — 開発中',
    description:
      'Web問診票・予約カレンダー・キャンセル管理をまとめたシステムです。「紙の問診票をカルテに転記する手間をなくしたい」という声をもとに設計しています。',
    demoUrl: null,
    githubUrl: null,
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    features: [
      'Web問診票（PDF出力対応）',
      '予約カレンダー（Google Calendar連携）',
      'LINE通知',
      'Stripe決済',
      'マルチクリニック対応',
    ],
    badge: '開発中',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    status: '2025年内公開予定',
  },
];

export default function WorksSection() {
  return (
    <section id="works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">制作実績</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            クリニックの現場課題をもとに作ったシステムです
          </p>
        </div>

        <div className="space-y-8">
          {WORKS.map((work) => (
            <div
              key={work.title}
              className="border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:border-blue-200 group"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${work.badgeColor}`}>
                          {work.badge}
                        </span>
                        <span className="text-xs text-gray-400">{work.status}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">{work.subtitle}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {work.githubUrl && (
                        <a
                          href={work.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          aria-label="GitHubリポジトリ"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {work.demoUrl && (
                        <a
                          href={work.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink size={14} />
                          デモを見る
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm">{work.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-64 shrink-0">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    主な機能
                  </p>
                  <ul className="space-y-2">
                    {work.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
