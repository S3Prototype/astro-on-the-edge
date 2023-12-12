// Note the parameters are different from standard Astro middleware
/**
 *
 * @param options.request {Request}
 * @param options.context {import("@vercel/edge").RequestContext}
 * @returns {object}
 */
export default function ({ request, context }) {
  // do something with request and context
  return {
    title: "Spider-man's blog",
  };
}