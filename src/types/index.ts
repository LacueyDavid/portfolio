export interface Post {
  title: string;
  date: string;
  tags: string;
  description: string;
}

export interface Project {
  title: string;
  year: string;
  type: string;
  description: string;
  imageUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  alt: string;
}
