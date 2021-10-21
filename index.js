const ci = require('miniprogram-ci');

async function publish(pluginConfig, context) {
  const { project: projectConfig, ...uploadConfig } = pluginConfig;
  const { commits, nextRelease, logger } = context;

  const project = new ci.Project(projectConfig);

  const uploadResult = await ci.upload({
    project,
    ...uploadConfig,
    version: nextRelease.version,
    desc: commits.map((_) => _.message).join('\n'),
    onProgressUpdate: logger.log,
  });

  logger.log(uploadResult);
}

module.exports = {
  publish,
};
