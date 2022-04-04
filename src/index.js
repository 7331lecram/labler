const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
  try {
    const octokit = github.getOctokit(process.env.GITHUB_ACTION);
    const context = github.context;

    core.debug(octokit);
    core.debug(context);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
