// Will be used later to fetch data from Hashnode API

async function gql({ query, variables }) {
  const response = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  return response.json();
}

export async function fetchFromHashnodeBySlug({ slug = "", hostname = "" }) {
  const data = await gql({
    query: `query getPostFromId($slug: String!, $hostname: String!) {
      post(slug: $slug, hostname: $hostname) {
        _id,
        slug,
        title,
        type,
        dateUpdated,
        totalReactions,
        dateAdded,
        contentMarkdown,
        brief,
        coverImage,
      }
    }
    `,
    variables: {
      slug,
      hostname,
    },
  });

  if (data.errors) {
    throw new Error(data.errors[0].message);
  }

  return data.data.post;
}
