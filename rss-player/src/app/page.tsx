

import PodcastPlayer from '@/components/PodcastPlayer';
import RSSParser from 'rss-parser';

// Define the structure of an Episode based on RSS feed data
type Episode = {
  title: string;
  contentSnippet: string;
  enclosure: {
    url: string;
  };
};

// Define the feed URL for the podcast
const FEED_URL = 'https://feeds.buzzsprout.com/1882267.rss';

// Async function to fetch and parse podcast data
async function fetchPodcastEpisodes(): Promise<Episode[]> {
  const parser = new RSSParser();
  const feed = await parser.parseURL(FEED_URL);
  console.log(feed);
  // Map feed items to the Episode type
  const episodes: Episode[] = feed.items.map((item: any) => ({
    title: item.title || 'No title',
    contentSnippet: item.contentSnippet || 'No description available',
    enclosure: {
      url: item.enclosure?.url || '',
    },
    
  }));

  return episodes;
}

// Main page component (server-side by default)
export default async function Home() {
  const episodes = await fetchPodcastEpisodes();

  return (
    <div>
      <h1>Welcome to the Podcast Player</h1>
      {/* Pass fetched episodes to PodcastPlayer component */}
      <PodcastPlayer episodes={episodes} />
    </div>
  );
}
