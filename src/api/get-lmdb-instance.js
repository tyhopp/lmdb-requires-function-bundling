import { getLmdb } from "gatsby-core-utils";

export default async function getLmdbInstance(_, res) {
  try {
    const instance = getLmdb();
    res.json({ gotIt: typeof instance !== `undefined` });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
}
