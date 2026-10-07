import type { ReactNode } from 'react'
import './globals.css'

const SITE = 'https://fugu4casino.vercel.app'
const SITE_TITLE =
  'Fugu Casino официальный сайт — играть онлайн, рабочее зеркало Фугу казино сейчас'
const SITE_DESCRIPTION =
  'Fugu Casino официальный сайт: играть онлайн в слоты и рулетку с честной отдачей. Рабочее зеркало Фугу казино выручит, если вход закрыт: регистрация за пять минут, быстрые выплаты и поддержка на русском.'
const SITE_KEYWORDS =
  'fugu casino, fugu casino официальный, fugu casino официальный сайт, fugu casino зеркало, fugu casino играть, фугу казино официальный, фугу казино, fugu казино, фугу казино зеркало рабочее, фугу казино играть, фугу казино онлайн, фугу казино зеркало, фугу казино официальный сайт'

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0e4a56" />
        <meta name="format-detection" content="telephone=no" />
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="keywords" content={SITE_KEYWORDS} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
        <link rel="canonical" href={`${SITE}/`} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content={`${SITE}/`} />
        <meta property="og:site_name" content="Fugu Casino" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE}/art/fugu-hero.jpg`} />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="305" />
        <meta
          property="og:image:alt"
          content="Fugu Casino — официальный сайт для игры онлайн"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE}/art/fugu-hero.jpg`} />
        {/* HEAD-SLOT: сюда вставляются дополнительные пользовательские теги для head
            (meta, link, script) — блок уже находится внутри <head> документа. */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
