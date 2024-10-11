

"use client"; 

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const PlayerPage = () => {
  const searchParams = useSearchParams(); 
  const router = useRouter();

  // Get the URL and title from the search parameters
  const audioUrl = searchParams.get("audioUrl");
  const title = searchParams.get("title");

  useEffect(() => {
    // If no audioUrl is present, redirect back to the main page
    if (!audioUrl) {
      router.push('/');
    }
  }, [audioUrl, router]);

  return (
    <div>
      <h1>Now Playing: {title}</h1>
      {audioUrl ? (
        <audio controls autoPlay>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlayerPage;
