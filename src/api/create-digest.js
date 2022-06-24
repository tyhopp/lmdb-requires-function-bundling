import { createContentDigest } from "gatsby-core-utils";

export default async function createDigest(_, res) {
  const digest = createContentDigest(`hello world`);
  res.json({ digest });
}
