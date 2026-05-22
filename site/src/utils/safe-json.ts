const UNSAFE_JSON_CHARS: Record<string, string> = {
  '<': '\\u003C',
  '>': '\\u003E',
  '&': '\\u0026',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029',
};

/**
 * Serialize data for embedding inside an inline JSON script tag.
 *
 * JSON.stringify alone can emit `</script>` or HTML-significant characters that
 * terminate a script element when parsed as HTML. Escaping these characters
 * keeps the payload inert until callers explicitly JSON.parse the textContent.
 */
export function safeInlineJson(value: unknown): string {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (char) => UNSAFE_JSON_CHARS[char] ?? char);
}
