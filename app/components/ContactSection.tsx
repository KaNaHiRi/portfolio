'use client';

import { useState } from 'react';
import { Send, Mail, MessageSquare, Clock } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  type: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = 'お名前を入力してください';
  if (!data.email.trim()) {
    errors.email = 'メールアドレスを入力してください';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'メールアドレスの形式が正しくありません';
  }
  if (!data.message.trim()) errors.message = 'メッセージを入力してください';
  return errors;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    type: 'consultation',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mdawkdjp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', type: 'consultation', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">お問い合わせ</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
            まずは無料相談から。要件が固まっていなくても大丈夫です。お気軽にご連絡ください。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex gap-4">
              <div className="w-9 h-9 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center shrink-0">
                <Mail size={16} className="text-slate-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">メール</p>
                <p className="text-slate-500 text-xs mt-0.5">通常24時間以内に返信</p>
                <p className="text-blue-400 text-xs mt-0.5">kanahiri.portfolio@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-9 h-9 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center shrink-0">
                <MessageSquare size={16} className="text-slate-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">CrowdWorks</p>
                <p className="text-slate-500 text-xs mt-0.5">プロフィールページからDM</p>
                <a
                  href="https://crowdworks.jp/public/employees/6351824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-xs mt-0.5 inline-block transition-colors"
                >
                  プロフィールを見る →
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-9 h-9 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center shrink-0">
                <Clock size={16} className="text-slate-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">対応時間</p>
                <p className="text-slate-500 text-xs whitespace-pre-line mt-0.5">{'平日 4:00〜7:00\n土日祝 随時'}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Send size={22} className="text-green-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">送信しました！</h3>
                <p className="text-slate-500 text-sm">24時間以内にご返信します。</p>
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
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      お名前 <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-slate-800 border rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-1 text-sm ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-700 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                      placeholder="山田 太郎"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      メールアドレス <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-slate-800 border rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-1 text-sm ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-700 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                      placeholder="yamada@clinic.jp"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-type" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    お問い合わせ種別
                  </label>
                  <select
                    id="contact-type"
                    value={formData.type}
                    onChange={(e) => handleChange('type', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  >
                    <option value="consultation">無料相談</option>
                    <option value="development">開発依頼</option>
                    <option value="maintenance">保守・改修</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    メッセージ <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`w-full px-3.5 py-2.5 bg-slate-800 border rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-1 resize-none text-sm ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-700 focus:ring-blue-500'
                    }`}
                    placeholder="例）受付業務のWeb化を検討しています。予算は50万円ほどで、来年4月の稼働を希望しています。..."
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center">
                    送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
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
        <p className="text-slate-600 text-xs">© 2026 KaNaHiRi. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/KaNaHiRi" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-300 text-xs transition-colors">GitHub</a>
          <a href="https://crowdworks.jp/public/employees/6351824" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-300 text-xs transition-colors">CrowdWorks</a>
          <a href="https://coconala.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-300 text-xs transition-colors">Coconala</a>
        </div>
      </div>
    </section>
  );
}