import Link from "next/link";

const stats = [
  { label: "累計導入企業", value: "120社" },
  { label: "平均コンバージョン率向上", value: "168%" },
  { label: "プロジェクト満足度", value: "4.9/5.0" },
];

const services = [
  {
    title: "ブランド戦略設計",
    description:
      "組織のビジョンと市場環境を読み解き、ユーザー中心のブランドシナリオを構築します。",
    highlights: ["未来洞察ワークショップ", "ブランドアーキテクチャ設計", "ストーリーテリング開発"],
  },
  {
    title: "デジタル体験デザイン",
    description:
      "UXリサーチからUIデザインまで、感性と機能性を併せ持つプロダクト体験を提供します。",
    highlights: ["ユーザー旅路の可視化", "プロトタイピング", "アクセシビリティ検証"],
  },
  {
    title: "統合コミュニケーション",
    description:
      "Webサイト・映像・イベントを横断したストーリーテリングで、ブランドの世界観を拡張します。",
    highlights: ["キャンペーン設計", "リッチメディア制作", "メトリクス最適化"],
  },
];

const process = [
  {
    step: "01",
    title: "洞察の共有",
    detail: "定量・定性調査を組み合わせた診断で、課題と可能性を余すことなく抽出します。",
  },
  {
    step: "02",
    title: "共創デザイン",
    detail: "クリエイターとクライアントが一体となり、アイデアを素早く形にして検証します。",
  },
  {
    step: "03",
    title: "体験の実装",
    detail: "エンジニアリングとクリエイティブを横断したチームで、質の高い体験を丁寧に仕上げます。",
  },
  {
    step: "04",
    title: "成長の伴走",
    detail: "運用後のデータを見える化し、継続的な改善と新しい価値創出を支援します。",
  },
];

const testimonials = [
  {
    company: "株式会社オーロラテック",
    quote:
      "プロジェクト開始からわずか3か月で、新サービスの世界観が市場に浸透しました。戦略とクリエイティブの統合力が圧倒的です。",
    name: "事業開発本部長 佐藤美咲",
  },
  {
    company: "ネクストロジスティクス",
    quote:
      "現場へのインタビューを重ねて体験を再設計したことで、問い合わせ率が2倍に。定量・定性の両面から伴走いただきました。",
    name: "プロダクトマネージャー 川上拓海",
  },
];

const resources = [
  {
    title: "生成AIの時代におけるブランドの信頼構築",
    category: "インサイトレポート",
    href: "#resources",
  },
  {
    title: "エモーショナルUXを実現する5つの設計原則",
    category: "ナレッジ",
    href: "#resources",
  },
  {
    title: "グローバル展開を視野に入れたローカライズ戦略",
    category: "ケーススタディ",
    href: "#resources",
  },
];

const faqs = [
  {
    question: "プロジェクトの期間はどれくらいですか？",
    answer:
      "最短4週間のスプリント設計から、6か月以上の大型案件まで柔軟に対応しています。目的と予算に合わせて最適なチームを編成します。",
  },
  {
    question: "部分的な支援をお願いすることはできますか？",
    answer:
      "ブランド戦略のみ、UXリサーチのみといった部分的なご依頼も歓迎です。必要に応じて拡張可能なモジュラー型の支援プランをご用意しています。",
  },
  {
    question: "遠隔での打ち合わせは可能ですか？",
    answer:
      "はい。オンラインとオンサイトを組み合わせ、進行管理ツールを用いた透明性の高いコミュニケーションを実施しています。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-400 via-sky-400 to-emerald-300 text-lg font-semibold tracking-tight text-black shadow-lg shadow-indigo-500/25">
              未来
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
                Mirai Creative Lab
              </p>
              <p className="text-base font-medium text-white">
                未来創造ラボ
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">
              サービス
            </a>
            <a href="#process" className="transition hover:text-white">
              メソッド
            </a>
            <a href="#testimonials" className="transition hover:text-white">
              パートナーの声
            </a>
            <a href="#resources" className="transition hover:text-white">
              リソース
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>
          <Link
            href="#contact"
            className="hidden rounded-full bg-white/90 px-5 py-2.5 text-sm font-medium text-black shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition hover:bg-white md:inline-flex"
          >
            無料相談を予約
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 lg:px-8 lg:py-20">
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] px-8 py-16 shadow-[0_40px_120px_rgba(15,23,42,0.45)] sm:px-14 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.45),_transparent_60%)] opacity-80" />
          <div className="relative space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full bg-indigo-300" />
              データと感性で未来を描くクリエイティブスタジオ
            </div>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-8">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  次世代のブランド体験で、<br className="hidden sm:block" />
                  共感と成果を同時に実現する
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
                  未来創造ラボは、スタートアップから上場企業まで幅広いパートナーと共に、
                  戦略・デザイン・テクノロジーを横断した体験づくりを支援します。
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition hover:bg-white/90"
                  >
                    プロジェクトを相談する
                    <span aria-hidden className="text-lg">
                      →
                    </span>
                  </Link>
                  <Link
                    href="#resources"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                  >
                    ソリューションを見る
                  </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/40 px-5 py-6 text-center">
                      <p className="text-2xl font-semibold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-indigo-300/20 to-pink-400/20 blur-3xl" />
                <div className="relative space-y-6 rounded-3xl border border-white/10 bg-black/50 p-6 backdrop-blur">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 shadow-[0_20px_80px_rgba(15,23,42,0.35)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-200">
                      Vision Sprint
                    </p>
                    <p className="mt-4 text-xl font-semibold text-white">
                      ブランド体験の未来像を5日間で可視化
                    </p>
                    <p className="mt-3 text-sm text-white/70">
                      リサーチとクリエイティブを同時進行させ、チームの意思統一と迅速な意思決定を支援する集中プログラム。
                    </p>
                    <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
                      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                      最新のケーススタディを閲覧する
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-lg font-semibold text-white">
                      AR
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        AR×空間演出
                      </p>
                      <p className="text-xs text-white/60">
                        体験型インスタレーションでブランドの価値を体感
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-lg font-semibold text-white">
                      AI
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        AIパーソナライズ
                      </p>
                      <p className="text-xs text-white/60">
                        ユーザーごとに最適化されたエクスペリエンスを生成
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-12">
          <div className="space-y-4">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-100">
              Services
            </span>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                戦略から実装までをつなぐ<br className="hidden sm:block" />
                フルスタックなクリエイティブパートナー
              </h2>
              <p className="max-w-xl text-base text-white/70">
                ブランドの核となる価値を発見し、体験として昇華するまでを一貫して支援。
                横断的な専門領域とプロジェクトマネジメントで、スピードと品質を両立します。
              </p>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.25)] transition hover:-translate-y-1.5 hover:bg-white/[0.09]"
              >
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs uppercase tracking-[0.2em] text-indigo-100">
                    Core
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs text-indigo-100">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.02] p-10 shadow-[0_30px_120px_rgba(15,23,42,0.35)] md:p-14"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-100">
                Method
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                インサイトから継続成長までを描く共創プロセス
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/70">
              各ステップで専門チームが伴走。透明性のあるコミュニケーションと迅速なフィードバックで、
              プロジェクト全体をスムーズに推進します。
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {process.map((item) => (
              <div
                key={item.step}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/35 p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_65%)] opacity-80" />
                <div className="relative space-y-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-sm font-semibold text-white/60">
                      Step
                    </span>
                    <span className="text-2xl font-semibold text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="testimonials"
          className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-center"
        >
          <div className="space-y-6">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-pink-100">
              Partners
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              多様な業界のリーダーと共に、<br className="hidden sm:block" />
              未来のブランド体験を共創しています
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              SaaS、ヘルスケア、エンターテインメントなど幅広い領域で成果を創出。
              北米・アジア市場向けプロジェクトも数多く支援しています。
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-white/50 sm:max-w-sm">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center">
                Helio Robotics
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center">
                Luminous Bio
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center">
                Aurora Tech
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center">
                Nexus Logistics
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.company}
                className="rounded-[28px] border border-white/10 bg-white/[0.05] p-8 shadow-[0_30px_90px_rgba(15,23,42,0.35)]"
              >
                <blockquote className="text-lg leading-relaxed text-white/80">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-white/60">
                  <span className="font-semibold text-white/80">
                    {testimonial.name}
                  </span>{" "}
                  <span className="text-white/50">| {testimonial.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="resources"
          className="rounded-[32px] border border-white/10 bg-black/35 p-10 shadow-[0_30px_120px_rgba(15,23,42,0.35)] md:p-14"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-100">
                Insights
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                変化の激しい市場を読み解くための知見を公開しています
              </h2>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              ニュースレターを購読
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1.5 hover:bg-white/[0.09]"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    {resource.category}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-indigo-100">
                    {resource.title}
                  </h3>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white">
                  詳細を見る <span aria-hidden>↗</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="rounded-[32px] border border-white/10 bg-white/[0.05] p-10 shadow-[0_30px_110px_rgba(15,23,42,0.32)] md:p-14"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-100">
                FAQ
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                よくあるご質問
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/70">
              下記以外の点についてもお気軽にご相談ください。専門コンサルタントがプロジェクトの背景を丁寧にヒアリングいたします。
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-black/40 transition"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left text-sm font-semibold text-white/80 [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span className="text-lg text-white/60 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-white/10 px-6 py-5 text-sm leading-relaxed text-white/70">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-emerald-400/20 px-8 py-16 shadow-[0_30px_120px_rgba(15,23,42,0.35)] sm:px-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <span className="rounded-full border border-white/40 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                Contact
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                ビジョンを共に描き、確かな成果へ
              </h2>
              <p className="text-sm leading-relaxed text-white/80">
                リニューアル、プロダクト開発、新規事業など、どの段階からでもご相談ください。
                48時間以内に専門ディレクターからご連絡いたします。
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/30 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  初回相談無料
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/30 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-sky-300" />
                  オンライン対応
                </div>
              </div>
            </div>
            <form className="grid gap-4 rounded-3xl border border-white/20 bg-black/40 p-8 backdrop-blur">
              <label className="text-sm font-medium text-white/80">
                お名前
                <input
                  type="text"
                  placeholder="山田 太郎"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                />
              </label>
              <label className="text-sm font-medium text-white/80">
                メールアドレス
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                />
              </label>
              <label className="text-sm font-medium text-white/80">
                ご相談内容
                <textarea
                  rows={4}
                  placeholder="解決したい課題やご希望の進行スケジュールをお聞かせください。"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                送信する
                <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/40 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} 未来創造ラボ. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-white">
              プライバシーポリシー
            </Link>
            <Link href="#" className="transition hover:text-white">
              Instagram
            </Link>
            <Link href="#" className="transition hover:text-white">
              Behance
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
