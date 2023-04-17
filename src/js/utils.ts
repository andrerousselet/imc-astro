export function slugify(text: string): string {
  const normalizedText = text.normalize("NFD");
  return normalizedText
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\s]+|[^\p{L}\p{N}\-]+/gu, "-")
    .replace(/(-)+/g, "-")
    .replace(/^(-)+|(-)+$/g, '');
}

export function formatDate(date: string, timeZone: string = 'UTC'): string {
  const options = {
    timeZone,
  };
  return new Date(date).toLocaleDateString("pt-BR", options);
}

// export function formatBlogPosts(
//   posts,
//   {
//     filterOutDrafts = true,
//     filterOutFuturePosts = true,
//     sortByDate = true,
//     limit = undefined,
//   } = {}
// ) {
//   const filteredPosts = posts.reduce((acc, curr) => {
//     const { date, draft } = curr.frontmatter;
//     if (filterOutDrafts && draft) return acc;
//     if (filterOutFuturePosts && new Date(date) > new Date()) return acc;
//     acc.push(curr);
//     return acc;
//   }, [])

//   if (sortByDate) {
//     filteredPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
//   } else {
//     filteredPosts.sort(() => Math.random() - 0.5)
//   }

//   if (typeof limit === 'number') {
//     return filteredPosts.slice(0, limit);
//   }

//   return filteredPosts;
// }