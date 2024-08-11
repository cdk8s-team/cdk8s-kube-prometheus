const { Cdk8sTeamJsiiProject } = require('@cdk8s/projen-common');
const { cdk } = require('projen');

const project = new Cdk8sTeamJsiiProject({
  release: false,
  defaultReleaseBranch: 'main',
  name: 'cdk8s-kube-prometheus',
  devDeps: ['cdk8s-cli', 'ts-node', '@cdk8s/projen-common'],
  deps: [
    'cdk8s',
    'cdk8s-plus-28',
    'constructs',
  ],
});

const synth = project.addTask('synth');
synth.exec('cdk8s synth');

project.synth();