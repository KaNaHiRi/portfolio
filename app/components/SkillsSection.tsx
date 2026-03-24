const SKILL_CATEGORIES = [
  {
    category: 'フロントエンド',
    color: 'border-blue-200 bg-blue-50',
    headerColor: 'text-blue-700 bg-blue-100',
    skills: [
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 80},
      { name: 'React', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'バックエンド・DB',
    color: 'border-green-200 bg-green-50',
    headerColor: 'text-green-700 bg-green-100',
    skills: [
      { name: 'C# / .NET', level: 90 },
      { name: 'Prisma / SQLite', level: 80 },
      { name: 'REST API設計', level: 80 },
      { name: 'Delphi、VBA（レガシー）', level: 90 },
    ],
  },
  {
    category: '品質・インフラ',
    color: 'border-purple-200 bg-purple-50',
    headerColor: 'text-purple-700 bg-purple-100',
    skills: [
      { name: 'Jest / RTL', level: 80 },
      { name: 'Playwright', level: 80 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'Vercel', level: 85 },
    ],
  },
  {
    category: '医療ドメイン',
    color: 'border-red-200 bg-red-50',
    headerColor: 'text-red-700 bg-red-100',
    skills: [
      { name: 'PACS連携', level: 70 },
      { name: 'HL7 / DICOM', level: 70 },
      { name: '電子カルテ連携', level: 80 },
      { name: '健診システム', level: 90 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
          style={{ width: `${level}%` }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name}: ${level}%`}
        />
      </div>
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
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
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