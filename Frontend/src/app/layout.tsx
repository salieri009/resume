import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
    title: 'Salieri - Refined Portfolio',
    description: 'Architecting Systems with Disciplined Passion',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`dark scroll-smooth ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
            <body suppressHydrationWarning className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-200 overflow-x-hidden antialiased selection:bg-primary selection:text-white">
                {children}
            </body>
        </html>
    )
}
