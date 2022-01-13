const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'epolon',
  authorAddress: 'epolon@amazon.com',
  defaultReleaseBranch: 'main',
  name: 'cdk8s-kube-prometheus',
  repositoryUrl: 'git@github.com:cdk8s-team/cdk8s-kube-prometheus.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();