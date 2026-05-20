import type { CollectionEntry } from 'astro:content';

export type WikiArticle = CollectionEntry<'wiki'>;

/**
 * Files with `publish: false` remain available to maintainers in the wiki tree
 * but are excluded from public frontend routes, navigation, counts, and graph data.
 */
export function isPublicWikiArticle(article: WikiArticle): boolean {
  return article.id !== '_index' && article.data.publish !== false;
}

export function publicWikiArticles(articles: WikiArticle[]): WikiArticle[] {
  return articles.filter(isPublicWikiArticle);
}
