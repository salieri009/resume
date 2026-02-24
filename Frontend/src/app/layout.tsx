import type { Metadata } from 'next'
import './globals.css'

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
        <html lang="en" className="dark scroll-smooth">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-200 overflow-x-hidden antialiased selection:bg-primary selection:text-white">
                {children}
            </body>
        </html>
    )
}
