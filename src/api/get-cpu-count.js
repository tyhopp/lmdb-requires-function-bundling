import { cpuCoreCount } from "gatsby-core-utils";

export default async function getCPUCount(_, res) {
  const coreCount = cpuCoreCount(false);
  res.json({ coreCount });
}
