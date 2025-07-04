import { ReactNode } from 'react';

type SectionProps = {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
};

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="relative bg-pink-400 text-black overflow-hidden pb-24">
      <div className="max-w-6xl mx-auto px-4 text-center pt-20">
        {title && <h1 className="text-6xl font-extrabold text-white mb-4">{title}</h1>}
        {subtitle && <h2 className="text-2xl font-medium text-white mb-8">{subtitle}</h2>}
        {children}
      </div>

      {/* Wave kecil-kecil di bawah */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-[60px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#facc15"
            d="
              M0,30 
              Q30,0 60,30 
              T120,30 
              T180,30 
              T240,30 
              T300,30 
              T360,30 
              T420,30 
              T480,30 
              T540,30 
              T600,30 
              T660,30 
              T720,30 
              T780,30 
              T840,30 
              T900,30 
              T960,30 
              T1020,30 
              T1080,30 
              T1140,30 
              T1200,30 
              T1260,30 
              T1320,30 
              T1380,30 
              T1440,30 
              L1440,60 
              L0,60 
              Z
            "
          />
        </svg>
      </div>
    </section>
  );
}
