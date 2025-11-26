const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: {
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
  author: string;
  featured: boolean;
  tags: string[] | null;
  readTime: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiBlogAttributes {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: {
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
  author: string;
  featured: boolean;
  tags: string[] | null;
  readTime: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface StrapiBlogItem {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: {
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
  author: string;
  featured: boolean;
  tags: string[] | null;
  readTime: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

function transformBlogPost(item: StrapiBlogItem): BlogPost {
  return {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    content: item.content,
    coverImage: item.coverImage ? {
      url: item.coverImage.url.startsWith('/') 
        ? `${STRAPI_URL}${item.coverImage.url}` 
        : item.coverImage.url,
      alternativeText: item.coverImage.alternativeText,
      width: item.coverImage.width,
      height: item.coverImage.height,
    } : undefined,
    author: item.author,
    featured: item.featured,
    tags: item.tags,
    readTime: item.readTime,
    publishedAt: item.publishedAt,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  };
}

export async function fetchBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/blogs?populate=coverImage&sort=publishedAt:desc`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch blogs:', response.status, response.statusText);
      return [];
    }

    const data: StrapiResponse<StrapiBlogItem[]> = await response.json();
    return data.data.map(transformBlogPost);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=coverImage`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch blog:', response.status, response.statusText);
      return null;
    }

    const data: StrapiResponse<StrapiBlogItem[]> = await response.json();
    
    if (data.data.length === 0) {
      return null;
    }

    return transformBlogPost(data.data[0]);
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return null;
  }
}

export async function fetchFeaturedBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/blogs?filters[featured][$eq]=true&populate=coverImage&sort=publishedAt:desc`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch featured blogs:', response.status, response.statusText);
      return [];
    }

    const data: StrapiResponse<StrapiBlogItem[]> = await response.json();
    return data.data.map(transformBlogPost);
  } catch (error) {
    console.error('Error fetching featured blogs:', error);
    return [];
  }
}

export { STRAPI_URL };

