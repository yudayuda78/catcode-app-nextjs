// src/types/react-player.d.ts
declare module "react-player" {
  import * as React from "react";

  export interface ReactPlayerProps {
    src?: string | string[];
    playing?: boolean;
    loop?: boolean;
    controls?: boolean;
    volume?: number;
    muted?: boolean;
    width?: string | number;
    height?: string | number;
    onReady?: () => void;
    onStart?: () => void;
    onPlay?: () => void;
    onPause?: () => void;
    onBuffer?: () => void;
    onBufferEnd?: () => void;
    onEnded?: () => void;
    onError?: (e: any) => void;
    onProgress?: (state: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }) => void;
    onDuration?: (duration: number) => void;
    style?: React.CSSProperties;  
    className?: string;
  }

  export default class ReactPlayer extends React.Component<ReactPlayerProps> {}
}
