import { ReactNode } from 'react';

type SectionProps = {
  children?: ReactNode
  backgroundColor?: string
  showWave?: boolean
  waveColor?: String
  height?: string
};

export default function Section({  children, backgroundColor = 'bg-white', showWave = false, height='min-h-screen', waveColor='#f97316'}: SectionProps) {
  return (
    <section className={`relative ${backgroundColor} text-black overflow-hidden pb-24 ${height}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {children}
      </div>

      {/* Wave kecil-kecil di bawah */}

      {showWave && (
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-[60px]"
          preserveAspectRatio="none"
        >
          <path
            fill={`${waveColor}`}
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
       )}
    </section>
  );
}
