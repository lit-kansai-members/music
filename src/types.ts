export interface Song {
  title: string;
  author: string;
  description: string;
  damNumber: string;
  damUrl: string;
  joyNumber: string;
  joyUrl: string;
  lyricsSiteName?: string;
  lyricsUrl?: string;
  youtubeUrl?: string;
  spotify?: string;
  youtubeId?: string; // Appended after parsing
}

export interface EventData {
  name: string;
  background?: string;
  theme?: string;
  poem?: string;
  isBefore2024?: boolean;
  songs: Song[];
  year: string; // appended from parent
}

export interface QueuedSong extends Song {
  eventName: string;
}

export interface RootData {
  camp: Record<string, EventData[]>;
  school: Record<string, EventData[]>;
  event: Record<string, EventData[]>;
}
