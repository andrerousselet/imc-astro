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
