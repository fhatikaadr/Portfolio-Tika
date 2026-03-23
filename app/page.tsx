import Image from 'next/image';
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { projects } from './projects/data';

type ProjectRowProps = {
  title: string;
  toneClass: string;
  cta: string;
  items: typeof projects;
};

function ProjectRow({ title, toneClass, cta, items }: ProjectRowProps) {
  return (
    <div className="space-y-4">
      <h3 className={`text-xl font-semibold ${toneClass}`}>{title}</h3>
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
        {items.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-300/40 flex-shrink-0 snap-center w-80 h-[430px] flex flex-col card-glass"
          >
            {project.previewImage ? (
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <Image
                  src={project.previewImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className={`h-44 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition flex-shrink-0`} />
            )}
            <div className="p-6 flex flex-col flex-1">
              <h4 title={project.title} className="text-2xl font-bold mb-2 truncate text-white">{project.title}</h4>
              <p className="text-fuchsia-100/70 mb-6 text-sm line-clamp-3">{project.shortDescription}</p>
              <div className="flex gap-2 mb-6 mt-auto">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-white/10 rounded-md text-fuchsia-100/80 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <span className={`flex items-center gap-2 font-medium group-hover:underline ${toneClass}`}>
                {cta} <ExternalLink size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const productManagementProjects = projects.filter(
    (project) => project.category === 'Product Management'
  );
  const uiuxProjects = projects.filter(
    (project) => project.category === 'UI/UX Design'
  );
  const dataAiProjects = projects.filter(
    (project) => project.category === 'Data & AI'
  );
  const othersProjects = projects.filter(
    (project) => project.category === 'Others'
  );

  const serviceRows = [
    {
      no: '01',
      name: 'Product Management',
      info: `${productManagementProjects.length} featured projects focused on strategy, operations, and growth execution.`,
      href: '#projects',
    },
    {
      no: '02',
      name: 'UI/UX Design',
      info: `${uiuxProjects.length} design projects centered on usability, clarity, and user-driven problem solving.`,
      href: '#projects',
    },
    {
      no: '03',
      name: 'Data & AI',
      info: `${dataAiProjects.length} analytical projects for insights, modeling, and machine learning implementation.`,
      href: '#projects',
    },
    {
      no: '04',
      name: 'Others',
      info: `${othersProjects.length} technical builds across web, mobile, OOP, and algorithmic systems.`,
      href: '#projects',
    },
  ];

  const statItems = [
    { value: '14+', label: 'Projects Completed' },
    { value: '4', label: 'Core Focus Areas' },
    { value: '8+', label: 'Tools Mastered' },
    { value: '2026', label: 'Latest Milestone' },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#120321_0%,#090311_35%,#07040f_100%)] text-gray-100 selection:bg-fuchsia-500/30 font-body relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[320px] w-[320px] rounded-full bg-fuchsia-500/20 blur-[110px]" />
        <div className="absolute top-[28rem] -left-24 h-[260px] w-[260px] rounded-full bg-indigo-500/20 blur-[100px]" />
        <div className="absolute bottom-20 -right-24 h-[260px] w-[260px] rounded-full bg-purple-500/20 blur-[110px]" />
      </div>

      <nav className="fixed top-0 w-full z-50 bg-[#0d0517]/80 backdrop-blur-xl border-b border-fuchsia-300/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 rounded-2xl overflow-hidden border border-fuchsia-200/50 shadow-[0_0_30px_rgba(192,132,252,0.7)] ring-2 ring-fuchsia-300/20">
              <Image
                src="/tika-photo.png"
                alt="Cute profile badge"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/25 to-cyan-300/15" />
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-fuchsia-300 flex items-center justify-center border border-fuchsia-100/70">
                <Sparkles size={10} className="text-[#2b0a45]" />
              </span>
            </div>
            <span className="text-xs sm:text-sm text-fuchsia-100/80 tracking-wide">fhatikaadr@gmail.com</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-fuchsia-100/60 tracking-wide uppercase">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#projects" className="hover:text-white transition">Works</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white shadow-[0_0_18px_rgba(217,70,239,0.45)] hover:brightness-110 transition"
            >
              Hire me
            </a>
          </div>

          <div className="md:hidden">
            <span className="text-sm font-semibold text-fuchsia-200 font-display">Tika</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 relative z-10">
        <section className="py-16 md:py-20 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center reveal">
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-display text-fuchsia-100">I am Tika</p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.04] md:leading-[1.02] tracking-tight font-display bg-gradient-to-b from-fuchsia-200 to-fuchsia-400 bg-clip-text text-transparent pb-2">
              Product Manager
              <br />
              + UI/UX Designer
            </h1>
            <p className="text-fuchsia-100/75 text-base md:text-lg max-w-xl leading-relaxed">
              I break down complex product and user problems into focused solutions that connect people, strategy, and measurable impact.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white hover:brightness-110 transition shadow-[0_0_24px_rgba(217,70,239,0.45)]"
              >
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/11f3RtqB6ZurD6oL3-rRrB6VJGoHZDZSO/view?usp=sharing"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 text-sm font-semibold border border-fuchsia-200/30 text-fuchsia-100 hover:bg-white/10 transition"
              >
                Download CV
              </a>
              <div className="flex items-center gap-3 pl-1 text-fuchsia-100/70">
                <a href="https://github.com/fhatikaadr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/fhatika-adhalisman-ryanjani/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><Linkedin size={18} /></a>
                <a href="mailto:fhatikaadr@gmail.com" className="hover:text-white transition"><Mail size={18} /></a>
              </div>
            </div>
          </div>

          <div className="relative justify-self-center reveal reveal-delay-1">
            <div className="absolute -inset-6 rounded-[2.4rem] bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 blur-2xl" />
            <div className="relative w-[260px] h-[340px] md:w-[320px] md:h-[410px] rounded-[2.4rem] overflow-hidden border border-fuchsia-200/25 bg-[#120a1d] shadow-[0_25px_75px_rgba(0,0,0,0.6)] rotate-[4deg]">
              <Image
                src="/tika-photo.png"
                alt="Tika portrait"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-6 md:py-10 reveal reveal-delay-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {statItems.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 card-glass px-4 py-5 text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-fuchsia-200 font-display">{stat.value}</p>
                <p className="text-xs md:text-sm text-fuchsia-100/65 mt-2 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-20 reveal">
          <div className="section-shell px-6 md:px-10 py-10 md:py-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-fuchsia-300 font-display">My Quality Services</h2>

            <div className="mt-8 divide-y divide-fuchsia-200/15">
              {serviceRows.map((row) => (
                <a
                  key={row.no}
                  href={row.href}
                  className="grid md:grid-cols-[70px_1fr_1.4fr_50px] items-center gap-4 py-5 text-fuchsia-100/80 hover:text-white transition group"
                >
                  <span className="text-sm font-semibold tracking-wide">{row.no}</span>
                  <h3 className="text-2xl font-bold font-display">{row.name}</h3>
                  <p className="text-sm text-fuchsia-100/70 leading-relaxed">{row.info}</p>
                  <span className="text-xl justify-self-end group-hover:translate-x-1 transition">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 reveal reveal-delay-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-fuchsia-300 font-display">My Skills</h2>
          <p className="text-fuchsia-100/70 text-center mt-3 mb-12">Tools and technologies I use to turn ideas into reliable products.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="p-6 rounded-2xl card-glass border border-fuchsia-200/15 hover:border-fuchsia-300/40 transition group text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <div className="absolute inset-0 rounded-full bg-fuchsia-400/20 blur-xl group-hover:bg-fuchsia-400/30 transition" />
                <Image src="/logo-figma.png" alt="Figma" fill className="object-contain group-hover:scale-110 transition" />
              </div>
              <h3 className="font-bold text-fuchsia-100">Figma</h3>
              <p className="text-xs text-fuchsia-100/65 mt-2 leading-relaxed">UI prototyping and design collaboration.</p>
            </div>

            <div className="p-6 rounded-2xl card-glass border border-fuchsia-200/15 hover:border-fuchsia-300/40 transition group text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <div className="absolute inset-0 rounded-full bg-purple-300/20 blur-xl group-hover:bg-purple-300/30 transition" />
                <Image src="/logo-c.png" alt="C" fill className="object-contain group-hover:scale-110 transition" />
              </div>
              <h3 className="font-bold text-fuchsia-100">C</h3>
              <p className="text-xs text-fuchsia-100/65 mt-2 leading-relaxed">Efficient logic and data structure implementation.</p>
            </div>

            <div className="p-6 rounded-2xl card-glass border border-fuchsia-200/15 hover:border-fuchsia-300/40 transition group text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <div className="absolute inset-0 rounded-full bg-amber-300/20 blur-xl group-hover:bg-amber-300/30 transition" />
                <Image src="/logo-java.png" alt="Java" fill className="object-contain group-hover:scale-110 transition" />
              </div>
              <h3 className="font-bold text-fuchsia-100">Java</h3>
              <p className="text-xs text-fuchsia-100/65 mt-2 leading-relaxed">Object-oriented architecture and scalable apps.</p>
            </div>

            <div className="p-6 rounded-2xl card-glass border border-fuchsia-200/15 hover:border-fuchsia-300/40 transition group text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-14 h-14 relative">
                  <div className="absolute inset-0 rounded-full bg-cyan-300/20 blur-xl group-hover:bg-cyan-300/30 transition" />
                  <Image src="/logo-mysql.png" alt="MySQL" fill className="object-contain group-hover:scale-110 transition" />
                </div>
                <div className="w-14 h-14 relative">
                  <div className="absolute inset-0 rounded-full bg-blue-300/20 blur-xl group-hover:bg-blue-300/30 transition" />
                  <Image src="/logo-postgresql.png" alt="PostgreSQL" fill className="object-contain group-hover:scale-110 transition" />
                </div>
              </div>
              <h3 className="font-bold text-fuchsia-100">SQL</h3>
              <p className="text-xs text-fuchsia-100/65 mt-2 leading-relaxed">Database design, querying, and optimization.</p>
            </div>

            <div className="p-6 rounded-2xl card-glass border border-fuchsia-200/15 hover:border-fuchsia-300/40 transition group text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <div className="absolute inset-0 rounded-full bg-indigo-300/20 blur-xl group-hover:bg-indigo-300/30 transition" />
                <Image src="/logo-python.png" alt="Python" fill className="object-contain group-hover:scale-110 transition" />
              </div>
              <h3 className="font-bold text-fuchsia-100">Python</h3>
              <p className="text-xs text-fuchsia-100/65 mt-2 leading-relaxed">Automation, analysis, and ML workflows.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 border-t border-fuchsia-200/10 reveal reveal-delay-2">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-fuchsia-300 font-display">Featured Work</h2>
              <p className="text-fuchsia-100/70">Selected projects grouped by focus area and impact.</p>
            </div>
          </div>

          <div className="space-y-12">
            <ProjectRow title="Product Management" toneClass="text-emerald-300" cta="Explore Project" items={productManagementProjects} />
            <ProjectRow title="UI/UX Design" toneClass="text-blue-300" cta="View Case Study" items={uiuxProjects} />
            <ProjectRow title="Data & AI" toneClass="text-cyan-300" cta="See Data Story" items={dataAiProjects} />
            <ProjectRow title="Others" toneClass="text-violet-300" cta="View Project" items={othersProjects} />
          </div>
        </section>

        <section className="py-16 reveal">
          <div className="section-shell px-6 md:px-10 py-10 md:py-12 text-center">
            <div className="space-y-5 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl italic text-fuchsia-100/85 leading-relaxed">
                &quot;Design is not just what users see, but how clearly they can move from confusion to confidence.&quot;
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="py-20 mt-10 border-t border-fuchsia-200/10 text-center relative z-10">
        <p className="text-fuchsia-100/65 text-sm mb-4">Ready to collaborate on your next project?</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-fuchsia-200 font-display">fhatikaadr@gmail.com</h2>
        <div className="flex justify-center gap-6 text-fuchsia-100/60">
          <a href="mailto:fhatikaadr@gmail.com" className="hover:text-white cursor-pointer transition">
            <Mail size={20} />
          </a>
          <a href="https://github.com/fhatikaadr/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/fhatika-adhalisman-ryanjani/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition">
            <Linkedin size={20} />
          </a>
        </div>
        <p className="mt-10 text-fuchsia-100/40 text-sm italic">Designed by Tika</p>
      </footer>
    </div>
  );
}
