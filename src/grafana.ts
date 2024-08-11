import * as cdk8s from 'cdk8s';
import * as kplus from 'cdk8s-plus-28';
import { Construct } from 'constructs';

export class Grafana extends cdk8s.Chart {

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.addDeployment();
  }

  private addDeployment() {

    const selectors = {
      'app.kubernetes.io/component': 'grafana',
      'app.kubernetes.io/name': 'grafana',
      'app.kubernetes.io/part-of': 'kube-prometheus',
    };
    const version = { 'app.kubernetes.io/version': '8.3.4' };

    const deployment = new kplus.Deployment(this, 'Deployment', {
      metadata: {
        namespace: 'monitoring',
        name: 'grafana',
        labels: { ...selectors, ...version },
      },
      replicas: 1,

      // TODO - expose default selector configuration and automatically add them as labels.
      select: false,
    });

    deployment.addContainer({
      image: 'grafana/grafana:8.3.4',
      name: 'grafana',
      port: 3000, // TODO - add support for port naming
      readiness: kplus.Probe.fromHttpGet('/api/health'),
    });

    for (const [label, value] of Object.entries(selectors)) {
      deployment.select(kplus.LabelSelector.of({ labels: { label: value } }));
      deployment.podMetadata.addLabel(label, value);
    }

    // TODO - these checksums are probably dynamic, figure out how to generate them.
    deployment.podMetadata.addAnnotation('checksum/grafana-config', 'da579b2ee81dc98ffbcc068a3422822a');
    deployment.podMetadata.addAnnotation('checksum/grafana-dashboardproviders', 'bc79f12017c019002ed650d44571a465');
    deployment.podMetadata.addAnnotation('checksum/grafana-datasources', 'c921684c6242ca2a8564803a9ae21504');

  }

}