export interface ParsedContent {
  _id: string;
  _path: string;
  _dir: string;
  _draft?: boolean;
  _partial?: boolean;
  _locale?: string;
  _source?: string;
  _file?: string;
  _extension?: string;
}

export interface BlogContent extends ParsedContent {
  title: string;
  description: string;
  slug: string;
  published_at: string;
  readingTime: string;
  image: string;
}

export interface ProjectContent extends ParsedContent {
  title: string;
  description: string;
  slug: string;
  projectLink: string;
  mainLink: string;
  skills: string[];
  githubUrl: string;
  image: string;
}

export interface TalkInstance {
  conference: string;
  date: string;
  slidesUrl?: string;
  youtubeUrl?: string;
  tweetUrl?: string;
}

export interface RawTalk {
  title: string;
  instances: TalkInstance[];
}

export interface GroupedTalk {
  title: string;
  instances: TalkInstance[];
}

export interface TalksResponse {
  talks: RawTalk[];
} 
