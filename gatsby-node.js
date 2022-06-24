const { cpuCoreCount } = require(`gatsby-core-utils`);

exports.onPostBuild = async ({ graphql, actions }) => {
  const coreCount = cpuCoreCount(false);
  console.log(`CPU COUNT: ${coreCount}`);
};
