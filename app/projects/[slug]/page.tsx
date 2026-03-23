import React from 'react';
import { ArrowLeft, ExternalLink, Github, FileText, Award, Figma } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectBySlug } from '../data';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[linear-gradient(180deg,#120321_0%,#090311_35%,#07040f_100%)] text-fuchsia-100 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 font-display text-fuchsia-200">Project Not Found</h1>
          <p className="text-fuchsia-100/70 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-fuchsia-300 hover:text-fuchsia-200 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#120321_0%,#090311_35%,#07040f_100%)] text-fuchsia-100 selection:bg-fuchsia-500/30 relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[320px] w-[320px] rounded-full bg-fuchsia-500/20 blur-[110px]" />
        <div className="absolute top-[24rem] -left-24 h-[260px] w-[260px] rounded-full bg-indigo-500/20 blur-[100px]" />
        <div className="absolute bottom-20 -right-24 h-[260px] w-[260px] rounded-full bg-purple-500/20 blur-[110px]" />
      </div>

      <nav className="fixed top-0 w-full z-50 bg-[#0d0517]/80 backdrop-blur-xl border-b border-fuchsia-300/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-fuchsia-100/70 hover:text-white transition">
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </Link>
          <span className="text-[10px] px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-300/30 rounded-full text-fuchsia-300">
            {project.category}
          </span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="mb-12">

          {project.previewImage && (
            <div className="relative h-96 rounded-3xl overflow-hidden mb-8 border border-fuchsia-200/20 shadow-[0_20px_70px_rgba(0,0,0,0.55)]">
              <Image
                src={project.previewImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          {!project.previewImage && (
            <div className={`h-80 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-80 mb-8 border border-fuchsia-200/20`} />
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight font-display bg-gradient-to-b from-fuchsia-200 to-fuchsia-400 bg-clip-text text-transparent">{project.title}</h1>
          {project.subject && (
            <p className="text-sm text-cyan-300 mb-2">Subject: {project.subject}</p>
          )}
          {project.competition && (
            <p className="text-sm text-orange-300 mb-2">Competition: {project.competition}</p>
          )}
          <p className="text-lg md:text-xl text-fuchsia-100/80 mb-6">{project.shortDescription}</p>
          {project.date && (
            <p className="text-sm text-fuchsia-100/55 mb-6">Date: {project.date}</p>
          )}
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 bg-white/10 border border-white/10 rounded-full text-fuchsia-100/80">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Quick Links */}
          {(project.documentLink || project.deckLink || project.certificationLink || project.figmaLink || project.githubLink || project.sourceCodeLink) && (
            <div className="flex gap-3 flex-wrap mt-8">
              {project.documentLink && (
                <a
                  href={project.documentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-600/20 hover:bg-fuchsia-600/30 border border-fuchsia-400/50 rounded-lg text-fuchsia-200 hover:text-white transition"
                >
                  <FileText size={16} />
                  Documentation
                </a>
              )}
              {project.deckLink && (
                <a
                  href={project.deckLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-400/50 rounded-lg text-indigo-200 hover:text-white transition"
                >
                  <FileText size={16} />
                  Deck
                </a>
              )}
              {project.certificationLink && (
                <a
                  href={project.certificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-400/50 rounded-lg text-amber-200 hover:text-white transition"
                >
                  <Award size={16} />
                  Certification
                </a>
              )}
              {project.figmaLink && (
                <a
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600/20 hover:bg-pink-600/30 border border-pink-400/50 rounded-lg text-pink-200 hover:text-white transition"
                >
                  <Figma size={16} />
                  Figma
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-fuchsia-100/80 hover:text-white transition"
                >
                  <Github size={16} />
                  GitHub Repository
                </a>
              )}
              {project.sourceCodeLink && (
                <a
                  href={project.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-400/50 rounded-lg text-emerald-200 hover:text-white transition"
                >
                  <ExternalLink size={16} />
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-12">
            <div className="card-glass p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-4 font-display text-fuchsia-200">Project Overview</h2>
              <p className="text-fuchsia-100/75 leading-relaxed text-lg">{project.fullDescription}</p>
            </div>

            <div className="p-8 rounded-2xl card-glass border border-white/10">
              <h3 className="text-2xl font-bold mb-3 text-rose-300 font-display">Challenge</h3>
              <p className="text-fuchsia-100/75 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-8 rounded-2xl card-glass border border-white/10">
              <h3 className="text-2xl font-bold mb-3 text-cyan-300 font-display">Solution</h3>
              <p className="text-fuchsia-100/75 leading-relaxed">{project.solution}</p>
            </div>

            <div className="p-8 rounded-2xl card-glass border border-white/10">
              <h3 className="text-2xl font-bold mb-3 text-emerald-300 font-display">Impact</h3>
              <p className="text-fuchsia-100/75 leading-relaxed">{project.impact}</p>
            </div>
          </div>

          <div className="space-y-8 md:sticky md:top-24 md:self-start">
            <div className="p-6 rounded-2xl card-glass border border-white/10">
              <h3 className="text-lg font-bold mb-4 font-display text-fuchsia-200">Tools & Technologies</h3>
              <div className="space-y-2">
                {project.tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-2 text-sm text-fuchsia-100/75">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-300" />
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl card-glass border border-white/10">
              <h3 className="text-lg font-bold mb-4 font-display text-fuchsia-200">Project Info</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-fuchsia-100/45 uppercase tracking-widest">Category</p>
                  <p className="text-sm text-fuchsia-100/80 mt-1">{project.category}</p>
                </div>
                <div>
                  <p className="text-xs text-fuchsia-100/45 uppercase tracking-widest">Year</p>
                  <p className="text-sm text-fuchsia-100/80 mt-1">{project.year}</p>
                </div>
                {project.subject && (
                  <div>
                    <p className="text-xs text-fuchsia-100/45 uppercase tracking-widest">Subject</p>
                    <p className="text-sm text-fuchsia-100/80 mt-1">{project.subject}</p>
                  </div>
                )}
                {project.competition && (
                  <div>
                    <p className="text-xs text-fuchsia-100/45 uppercase tracking-widest">Competition</p>
                    <p className="text-sm text-fuchsia-100/80 mt-1">{project.competition}</p>
                  </div>
                )}
                {project.date && (
                  <div>
                    <p className="text-xs text-fuchsia-100/45 uppercase tracking-widest">Duration</p>
                    <p className="text-sm text-fuchsia-100/80 mt-1">{project.date}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-12 border-t border-fuchsia-200/10">
          <p className="text-fuchsia-100/70 mb-6">Interested in seeing more work?</p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:brightness-110 text-white px-8 py-4 rounded-full font-bold transition shadow-[0_0_22px_rgba(217,70,239,0.4)]"
          >
            Back to Portfolio <ExternalLink size={18} />
          </Link>
        </div>
      </main>
    </div>
  );
}
