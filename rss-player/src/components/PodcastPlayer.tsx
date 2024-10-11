"use client"; // Enable client-side rendering
import Link from 'next/link';

type Episode = {
  title: string;
  contentSnippet: string;
  enclosure: {
    url: string;
  };
};

type PodcastPlayerProps = {
  episodes: Episode[];
};

const PodcastPlayer: React.FC<PodcastPlayerProps> = ({ episodes }) => {
  return (
    <div>
      <h1>Podcast Player</h1>
      {episodes.length > 0 ? (
        <ul>
          {episodes.map((episode, index) => (
            <li key={index}>
              <h2>{episode.title}</h2>
              <p>{episode.contentSnippet}</p>
              <Link
                href={`/player?audioUrl=${encodeURIComponent(episode.enclosure.url)}&title=${encodeURIComponent(episode.title)}`}
              >
                <button>Play</button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading episodes...</p>
      )}
    </div>
  );
};

export default PodcastPlayer;
