import slugify from "slugify";

function formatSlug(input, slugStart) {
  const slug = slugify(input, { lower: true });
  return slugStart + slug;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export function slugWithType(prefix = "", source = "title") {
  const slugStart = prefix ? `/${prefix}/` : "/";

  return {
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source,
      slugify: (value) => formatSlug(value, slugStart),
    },
    validation: (Rule) =>
      Rule.required().custom(({ current }) => {
        if (typeof current === undefined) {
          return true;
        }

        if (current) {
          if (!current.startsWith(slugStart)) {
            return `Slug must begin with "${slugStart}". Click "Generate" to reset.`;
          }

          // eslint-disable-next-line unicorn/prefer-spread
          if (current.slice(slugStart.length).split("").includes("/")) {
            return `Slug cannot have another "/" after "${slugStart}"`;
          }

          if (current === slugStart) {
            return `Slug cannot be empty`;
          }

          if (current.endsWith("/")) {
            return `Slug cannot end with "/"`;
          }
        }

        return true;
      }),
  };
}
