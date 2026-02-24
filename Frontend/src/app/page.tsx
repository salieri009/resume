'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cometControls = useAnimation();

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const animateComet = async () => {
            // Random wait time between 5s and 10s
            const waitTime = Math.random() * 5000 + 5000;

            timeoutId = setTimeout(async () => {
                // Start from top-left off-screen
                const startY = Math.random() * (window.innerHeight / 2) - 100;

                // Reset properties before animation starts
                await cometControls.set({
                    x: '-20vw',
                    y: startY,
                    rotate: 20, // Downward and to the right
                    scale: 1,
                    opacity: 0
                });

                // Faster, sharper flyby without CSS trails
                await cometControls.start({
                    x: '100vw', // Move to the right
                    y: startY + 500, // Move downwards
                    opacity: [0, 1, 1, 0],
                    transition: {
                        duration: 0.25, // Extremely fast
                        ease: "linear",
                        times: [0, 0.1, 0.9, 1],
                    }
                });

                // Loop
                animateComet();
            }, waitTime);
        };

        // Start loop
        animateComet();

        return () => clearTimeout(timeoutId);
    }, [cometControls]);

    return (
        <>
            <div className="bg-grain"></div>
            <div className="fixed inset-0 pointer-events-none z-[60] bg-scanlines opacity-20"></div>

            {/* Overhauled Char's Red Comet Animation */}
            <motion.div
                className="fixed w-0 h-0 z-40 pointer-events-none"
                animate={cometControls}
                initial={{ opacity: 0 }}
            >
                <div className="relative flex items-center h-4 w-[400px]">
                    {/* Tail - Linear trail fading into transparency (Tail is behind on the left now) */}
                    <div className="absolute left-6 w-[350px] h-[3px] bg-gradient-to-r from-transparent via-primary to-[#FFD700] opacity-80 shadow-[0_0_15px_1px_rgba(158,27,17,0.8)]"></div>
                    {/* Head Glow/Corona - Deep intense crimson surrounding the core */}
                    <div className="absolute left-1 w-12 h-12 rounded-full bg-primary blur-md mix-blend-screen z-0"></div>
                    {/* Head Core - Intense blinding white-yellow (Lead is on the left) */}
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-white blur-[1px] z-10 shadow-[0_0_30px_10px_#FFD700]"></div>
                </div>
            </motion.div>

            <div className="relative flex min-h-screen w-full flex-col">
                <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b bg-background-light/90 dark:bg-background-dark/80 backdrop-blur-xl px-6 py-4 lg:px-10 border-solid border-slate-200 dark:border-white/5">
                    <div className="flex items-center gap-4">
                        <div className="size-8 text-primary flex items-center justify-center border border-primary/30 bg-primary/5 rounded">
                            <span className="material-symbols-outlined text-xl">terminal</span>
                        </div>
                        <h2 className="text-lg font-bold font-mono tracking-tighter uppercase dark:text-white">
                            Salieri<span className="text-primary blink">_</span>
                        </h2>
                    </div>
                    <nav className="hidden md:flex flex-1 justify-center gap-10">
                        <a className="font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#about">01. About</a>
                        <a className="font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#stack">02. Stack</a>
                        <a className="font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#hobbies">03. Hobbies</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <a className="hidden sm:flex h-9 items-center justify-center border border-primary/50 bg-primary/10 px-6 text-xs font-mono font-bold text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-wider tech-border hover-tech-border" href="#contact">
                            Initialize_Contact
                        </a>
                    </div>
                </header>

                <main className="flex-grow pt-16">
                    {/* Hero Section */}
                    <section className="relative flex min-h-[95vh] flex-col items-center justify-center p-4 overflow-hidden">
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZaUTNG7axFDrhLiU-J-Vx7DFEO9z6kWWX8Gwt17ePD2XDHWCab-_3iwt7zNDRLG6iPD2w1BMso92K0kfWp11okWFRGE0rBqWtH5M0-XcRo8HIdDoHUXzLbUQXiYAc_ktWr9ik9k_0nMngL3x6hSfvgSuQlt_Awot68KghmK9H8ex5M8wv6aJR6idT4ZCtW4EzFIAzv8ur5lpJ06zjO_IVSzgvIbvmu7KDNln3DPzZ_CH3I0PU0J72oalLnjeXHEzCOv0U2zu5sn4')", filter: "grayscale(100%) contrast(120%) brightness(50%)" }}
                        ></div>
                        <div className="absolute inset-0 z-10 bg-background-dark/80 backdrop-blur-[2px]"></div>
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
                        <div className="absolute inset-0 z-10 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="relative z-20 flex max-w-5xl flex-col items-center gap-10 text-center"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center border border-primary/40 bg-black/40 px-4 py-1.5 text-[10px] font-mono font-medium tracking-[0.2em] text-primary uppercase backdrop-blur-md">
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow"></span>
                                System Status: Online
                            </motion.div>
                            <motion.h1 variants={fadeInUp} className="text-5xl font-bold leading-none tracking-tight text-white sm:text-7xl lg:text-9xl mix-blend-overlay opacity-90">
                                SALIERI
                            </motion.h1>
                            <motion.div variants={fadeInUp} className="space-y-2 -mt-4 relative">
                                <h2 className="text-3xl font-light tracking-tighter text-slate-200 sm:text-5xl">
                                    Restrained <span className="text-primary italic font-serif">Passion</span>
                                </h2>
                                <h2 className="text-3xl font-light tracking-tighter text-slate-200 sm:text-5xl">
                                    Intellectual <span className="font-bold text-white">Perfectionism</span>
                                </h2>
                            </motion.div>
                            <motion.p variants={fadeInUp} className="max-w-2xl text-sm font-mono leading-relaxed text-slate-400 sm:text-base border-l-2 border-primary/50 pl-6 text-left bg-black/20 p-4 backdrop-blur-sm">
                                &gt; Architecting disciplined AI systems.<br />
                                &gt; Bridging theoretical deep learning with production infrastructure.<br />
                                &gt; Executing with precision.
                            </motion.p>
                            <motion.div variants={fadeInUp} className="flex flex-col gap-6 sm:flex-row mt-8 mb-16 relative z-50">
                                <a href="#contact" className="group relative flex items-center justify-center h-12 min-w-[180px] overflow-hidden bg-primary px-8 text-xs font-mono font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black">
                                    <span className="relative z-10">Init Contact</span>
                                    <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0"></div>
                                </a>
                                <a href="/resume.pdf" download="Jungwook_Van_Resume.pdf" className="group h-12 min-w-[180px] flex items-center justify-center gap-3 border border-white/20 bg-transparent px-8 text-xs font-mono font-bold uppercase tracking-widest text-white transition-all hover:border-primary hover:text-primary backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-lg" style={{ fontSize: '20px', fontFamily: '"Material Symbols Outlined"' }}>download</span>
                                    <span>Download Resume</span>
                                </a>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-12 left-8 z-20 flex flex-col items-center gap-4">
                            <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll to Init</span>
                        </motion.div>
                    </section>

                    {/* Quick Stats Section */}
                    <section className="relative z-30 -mt-24 px-4 pb-16 lg:px-40">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mx-auto max-w-7xl glass-panel p-1 rounded-none border-l-4 border-l-primary relative z-40"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-black/40">
                                <div className="flex flex-col gap-1 p-6 hover:bg-white/5 transition-colors">
                                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Core Focus</span>
                                    <span className="text-xl font-bold text-white font-display">Enterprise Dev.</span>
                                </div>
                                <div className="flex flex-col gap-1 p-6 hover:bg-white/5 transition-colors">
                                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Institution</span>
                                    <span className="text-xl font-bold text-white font-display">UTS</span>
                                </div>
                                <div className="flex flex-col gap-1 p-6 hover:bg-white/5 transition-colors">
                                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Degree</span>
                                    <span className="text-xl font-bold text-white font-display">BSc Info Tech</span>
                                </div>
                                <div className="flex flex-col gap-1 p-6 hover:bg-white/5 transition-colors">
                                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Academic Grade</span>
                                    <span className="text-xl font-bold text-white font-display">GPA 6.0 | WAM 79.9</span>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* About Section */}
                    <section className="px-4 py-24 lg:px-40 relative border-t border-white/5" id="about">
                        <div className="absolute top-20 right-10 text-9xl font-black text-white/[0.02] pointer-events-none select-none font-display">
                            PASSION
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="mx-auto flex max-w-6xl flex-col items-center gap-20 md:flex-row"
                        >
                            <div className="flex-1 space-y-10">
                                <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 text-primary font-mono font-bold tracking-[0.2em] uppercase text-xs">
                                    <span className="text-slate-500">01.</span>
                                    <span>Philosophy</span>
                                </motion.div>
                                <motion.h2 variants={fadeInUp} className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white lg:text-6xl">
                                    Disciplined <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Passion.</span>
                                </motion.h2>
                                <motion.div variants={fadeInUp} className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                                    <p className="font-light">
                                        I operate at the intersection of mathematical rigor and creative chaos to build robust systems. I believe that true innovation lies in the details others overlook.
                                    </p>
                                    <p className="font-light">
                                        수학적 엄밀함과 창조적 혼돈의 교차점에서 견고한 시스템을 구축합니다. 진정한 혁신은 남들이 간과하는 디테일에 있다고 믿습니다.
                                    </p>
                                    <p className="font-light">
                                        数学的な厳密さと創造的な混沌の交差点で堅牢なシステムを構築します。真の革新は他の人が見落とす細部にあると信じています。
                                    </p>
                                </motion.div>
                                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-6">
                                    <div className="group flex items-center gap-3 border border-white/10 bg-white/5 px-5 py-3 transition-all hover:border-primary/50">
                                        <span className="material-symbols-outlined text-primary text-lg group-hover:animate-pulse">terminal</span>
                                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300">System Design</span>
                                    </div>
                                    <div className="group flex items-center gap-3 border border-white/10 bg-white/5 px-5 py-3 transition-all hover:border-primary/50">
                                        <span className="material-symbols-outlined text-primary text-lg group-hover:animate-pulse">memory</span>
                                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300">Model Optimization</span>
                                    </div>
                                </motion.div>
                            </div>
                            <motion.div variants={fadeInUp} className="relative flex-1 w-full max-w-md">
                                <div className="relative z-10 overflow-hidden border border-white/10 bg-surface-dark shadow-2xl">
                                    <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-4 py-2">
                                        <div className="flex gap-1.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-red-500/20"></div>
                                            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20"></div>
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500/20"></div>
                                        </div>
                                        <div className="font-mono text-[10px] text-slate-500">arch_v2.py</div>
                                    </div>
                                    <div className="bg-cover bg-center h-[450px] w-full opacity-80 grayscale mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcP8X5B2pYniDZXYaE9RUUNaMYV97_u_ec4F-zqwJuNfBma9WkCrN_FDLDD2zikcI63_6c7IOXx5Zlq3vkXV4TddxEyw4sW1d4NMrCuQ4Pznn9QLL4Zpg2yGbhlIJ7DBkzVnci3VZmPnSTOlT7ke0NJ4MAJY94A9qyP8xtPJ-LiO7pfCsUoZ5V_Rc2_tbNbewECabeTvWcQDlziNqtu1awwJChrVwl6fi4hXbrnzKxB7eKgWySG2zAlY70H_WMUmZf1rU9yMDRhq8')" }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black/60 backdrop-blur-sm">
                                        <div className="font-mono text-xs text-primary mb-1">&gt; /usr/bin/salieri --verbose</div>
                                        <div className="text-white font-bold text-lg tracking-tight">System Architecture v2.0</div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 h-24 w-24 border-t border-r border-primary/30"></div>
                                <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b border-l border-primary/30"></div>
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* Stack Section */}
                    <section className="bg-surface-dark py-24 px-4 border-y border-white/5 relative overflow-hidden" id="stack">
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
                        <div className="mx-auto max-w-7xl relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-16 flex items-end justify-between border-b border-white/10 pb-6"
                            >
                                <div>
                                    <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">02. Arsenal</span>
                                    <h2 className="text-3xl font-bold text-white md:text-5xl tracking-tight">Technical Proficiency</h2>
                                </div>
                                <div className="hidden md:block font-mono text-[10px] text-slate-500 text-right">
                                    STATUS: OPTIMIZED<br />
                                    LOAD: 100%
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                            >
                                {[
                                    { icon: 'code', title: 'Software Engineering', desc: 'Enterprise Software Development Major. Distinctions in Data Structures (92%), Advanced Software Development (87%), and Software Architecture (80%).' },
                                    { icon: 'schema', title: 'Deep Learning', desc: 'Completed Advanced Deep Learning and Computational Intelligence focusing on neural networks and complex algorithms.' },
                                    { icon: 'cloud', title: 'Cloud Environments', desc: 'High Distinction in Cloud Computing and Software as a Service (86%).' },
                                    { icon: 'sports_esports', title: 'Game Development', desc: 'Sub-Major in Computer Graphics and Animation. Strong background in interactive media and game design methodologies.' },
                                    { icon: 'database', title: 'Data Foundations', desc: 'Solid fundamentals in Database Modeling, Web Systems, and Information Systems.' },
                                    { icon: 'architecture', title: 'Project Management', desc: 'Distinction level project management skills with practical, studio-driven development methodology.' }
                                ].map((item, i) => (
                                    <motion.div key={i} variants={fadeInUp} className="group relative bg-[#121214] p-8 border border-white/5 hover:border-primary/40 transition-all duration-300">
                                        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="font-mono text-[10px] text-primary">KOREA</span>
                                        </div>
                                        <div className="mb-6 flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined" style={{ fontSize: '24px', fontFamily: '"Material Symbols Outlined"' }}>{item.icon}</span>
                                        </div>
                                        <h3 className="mb-3 text-lg font-bold text-white font-mono uppercase tracking-wide">{item.title}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed font-light">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>


                    {/* Hobbies Section */}
                    <section className="py-24 px-4 lg:px-40 relative overflow-hidden" id="hobbies">
                        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        <div className="mx-auto max-w-5xl relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12 flex items-end justify-between border-b border-primary/20 pb-6"
                            >
                                <div>
                                    <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">04. Beyond Code</span>
                                    <h2 className="text-3xl font-bold text-white">Digital &amp; Analog Crafts</h2>
                                </div>
                                <span className="hidden text-right font-mono text-xs text-slate-500 sm:block">
                                    &lt;Precision extends beyond the terminal /&gt;
                                </span>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                                <motion.div variants={fadeInUp} className="relative group overflow-hidden border border-white/10 bg-surface-dark p-8 hover:border-primary/50 transition-colors">
                                    <div className="absolute top-4 right-4 text-slate-700 opacity-20">
                                        <svg className="w-24 h-24" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="40"></circle>
                                            <line x1="50" x2="50" y1="10" y2="90"></line>
                                            <line x1="10" x2="90" y1="50" y2="50"></line>
                                            <path d="M20 20 L80 80 M80 20 L20 80"></path>
                                        </svg>
                                    </div>
                                    <div className="flex items-start gap-6 relative z-10">
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-none border border-slate-700 bg-black/50 text-white">
                                            <span className="material-symbols-outlined font-light" style={{ fontSize: '32px', fontFamily: '"Material Symbols Outlined"' }}>fitness_center</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white font-mono uppercase">Iron Routine</h3>
                                            <div className="h-px w-10 bg-primary my-3"></div>
                                            <p className="text-sm text-slate-400 font-light leading-relaxed">
                                                Rigorous daily weight training. Fortifying the physical vessel to endure prolonged cognitive exertion. Consistent effort yields compounding results.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div variants={fadeInUp} className="relative group overflow-hidden border border-white/10 bg-surface-dark p-8 hover:border-primary/50 transition-colors">
                                    <div className="absolute top-4 right-4 text-slate-700 opacity-20">
                                        <svg className="w-24 h-24" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100">
                                            <rect height="40" width="60" x="20" y="30"></rect>
                                            <circle cx="35" cy="50" r="10"></circle>
                                            <circle cx="65" cy="50" r="10"></circle>
                                        </svg>
                                    </div>
                                    <div className="flex items-start gap-6 relative z-10">
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-none border border-slate-700 bg-black/50 text-white">
                                            <span className="material-symbols-outlined font-light" style={{ fontSize: '32px', fontFamily: '"Material Symbols Outlined"' }}>precision_manufacturing</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white font-mono uppercase">Gunpla Modeling</h3>
                                            <div className="h-px w-10 bg-primary my-3"></div>
                                            <p className="text-sm text-slate-400 font-light leading-relaxed">
                                                The meditative art of scale modeling. Applying patience and dexterity to create mechanical perfection. Panel lining, custom decals, and matte finishes.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="bg-background-dark border-t border-white/5 py-12 px-4 lg:px-40 relative" id="contact">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto max-w-4xl text-center"
                        >
                            <h2 className="mb-6 text-2xl font-bold text-white tracking-tight">Ready to initiate?</h2>
                            <a className="group inline-flex items-center gap-4 border border-primary bg-primary/10 px-8 py-3 text-xs font-mono font-bold uppercase tracking-widest text-white transition-all hover:bg-primary hover:shadow-[0_0_30px_-5px_rgba(158,27,17,0.5)]" href="mailto:kordalek@naver.com">
                                <span className="material-symbols-outlined group-hover:animate-bounce" style={{ fontSize: '20px', fontFamily: '"Material Symbols Outlined"' }}>mail</span>
                                Initialize Contact
                            </a>
                            <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/5 pt-6 sm:flex-row relative">
                                <p className="font-mono text-[10px] text-slate-600 uppercase tracking-wider">© 2026 Salieri. All systems nominal.</p>
                                <p className="font-mono text-[8px] text-primary/30 italic group hover:text-primary transition-colors cursor-default">Deployed 3 times faster</p>
                            </div>
                        </motion.div>
                    </section>
                </main>
            </div>
        </>
    );
}
