const SKILL_CATEGORIES = [
  {
    category: 'フロントエンド',
    color: 'border-blue-200 bg-blue-50',
    headerColor: 'text-blue-700 bg-blue-100',
    badgeColor: 'bg-blue-100 text-blue-700',
    skills: [
      { name: 'Next.js', badge: '実装済み' },
      { name: 'TypeScript', badge: '実装済み' },
      { name: 'React', badge: '実装済み' },
      { name: 'Tailwind CSS', badge: '実装済み' },
    ],
  },
  {
    category: 'バックエンド・DB',
    color: 'border-green-200 bg-green-50',
    headerColor: 'text-green-700 bg-green-100',
    badgeColor: 'bg-green-100 text-green-700',
    skills: [
      { name: 'C# / .NET', badge: '実務10年+' },
      { name: 'Prisma / SQLite', badge: '実装済み' },
      { name: 'REST API設計', badge: '実装済み' },
      { name: 'Delphi / VBA', badge: '実務10年+' },
    ],
  },
  {
    category: '品質・インフラ',
    color: 'border-purple-200 bg-purple-50',
    headerColor: 'text-purple-700 bg-purple-100',
    badgeColor: 'bg-purple-100 text-purple-700',
    skills: [
      { name: 'Jest / RTL', badge: 'CI/CD構築済み' },
      { name: 'Playwright', badge: 'CI/CD構築済み' },
      { name: 'GitHub Actions', badge: '構築済み' },
      { name: 'Vercel', badge: '運用中' },
    ],
  },
  {
    category: '医療ドメイン',
    color: 'border-red-200 bg-red-50',
    headerColor: 'text-red-700 bg-red-100',
    badgeColor: 'bg-red-100 text-red-700',
    skills: [
      { name: 'PACS連携', badge: '実務経験あり' },
      { name: 'HL7 / DICOM', badge: '実務経験あり' },
      { name: '電子カルテ連携', badge: '実務経験あり' },
      { name: '健診システム', badge: '実務10年+' },
    ],
  },
];

function SkillBadge({ name, badge, badgeColor }: { name: string; badge: string; badgeColor: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${badgeColor}`}>
        {badge}
      </span>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">技術スタック</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            医療システム開発で培った幅広い技術力で、要件に合わせた最適な開発をご提案します
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.category} className={`p-6 rounded-2xl border-2 ${cat.color}`}>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-5 ${cat.headerColor}`}>
                {cat.category}
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} badge={skill.badge} badgeColor={cat.badgeColor} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">
            使用ツール・ライブラリ
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'SQLite',
              'NextAuth.js', 'Zod', 'Jest', 'Playwright', 'Storybook', 'Vercel',
              'GitHub Actions', 'Sentry', 'Resend', 'jsPDF', 'recharts',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
