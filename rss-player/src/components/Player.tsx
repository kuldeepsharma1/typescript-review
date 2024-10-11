// components/Player.tsx
"use client"; // Enable client-side rendering

import { useRef, useEffect } from 'react';

type PlayerProps = {
  audioUrl: string;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
};

const Player: React.FC<PlayerProps> = ({ audioUrl, isPlaying, onPlay, onPause }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div>
      <audio ref={audioRef} src={audioUrl} />
      <button onClick={isPlaying ? onPause : onPlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Player;
