'use client';

import { useState } from 'react';
import { Send, Mail, MessageSquare, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'consultation',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', type: 'consultation', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">お問い合わせ</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            まずは無料相談から。要件が固まっていなくても大丈夫です。お気軽にご連絡ください。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: Mail,
                title: 'メール',
                desc: '通常24時間以内に返信',
                value: 'KaNaHiRi@gmail.com',
              },
              {
                icon: MessageSquare,
                title: 'CrowdWorks / Coconala',
                desc: 'プロフィールページからDM',
                value: '@KaNaHiRi_medical_dev',
              },
              {
                icon: Clock,
                title: '対応時間',
                desc: '平日 4:00〜7:00\n土日祝 随時',
                value: '',
              },
            ].map((info) => (
              <div key={info.title} className="flex gap-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <info.icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{info.title}</p>
                  <p className="text-slate-400 text-xs whitespace-pre-line">{info.desc}</p>
                  {info.value && <p className="text-blue-400 text-xs mt-0.5">{info.value}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <Send size={24} className="text-green-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">送信しました！</h3>
                <p className="text-slate-400 text-sm">24時間以内にご返信します。</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-4 py-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  別の問い合わせをする
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-1.5">
                      お名前 <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-1.5">
                      メールアドレス <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="yamada@clinic.jp"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-type" className="block text-sm font-medium text-slate-300 mb-1.5">
                    お問い合わせ種別
                  </label>
                  <select
                    id="contact-type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="consultation">無料相談</option>
                    <option value="development">開発依頼</option>
                    <option value="maintenance">保守・改修</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-1.5">
                    メッセージ <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
                    placeholder="例）受付業務のWeb化を検討しています。予算は50万円ほどで、来年4月の稼働を希望しています。..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      送信する（無料）
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">© 2026 KaNaHiRi. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/KaNaHiRi" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-sm transition-colors">GitHub</a>
          <a href="https://crowdworks.jp" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-sm transition-colors">CrowdWorks</a>
          <a href="https://coconala.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-sm transition-colors">Coconala</a>
        </div>
      </div>
    </section>
  );
}
