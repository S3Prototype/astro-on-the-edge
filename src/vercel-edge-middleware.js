// Note the parameters are different from standard Astro middleware
export default function ({ request, context }) {
  console.log("Test from middleware");
  // Return an Astro.locals object with a title property
  return {
    title: "Spider-man's blog",
  };
}