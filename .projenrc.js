const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  release: false,
  author: 'Amazon Web Services',
  authorUrl: 'https://aws.amazon.com',
  defaultReleaseBranch: 'main',
  name: 'cdk8s-kube-prometheus',
  repositoryUrl: 'git@github.com:cdk8s-team/cdk8s-kube-prometheus.git',
  devDeps: ['cdk8s-cli', 'ts-node'],
  deps: [
    'cdk8s',
    'cdk8s-plus-22',
    'constructs',
  ],
});

const synth = project.addTask('synth');
synth.exec('cdk8s synth');

project.synth();