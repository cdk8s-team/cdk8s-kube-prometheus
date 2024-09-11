# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Grafana <a name="Grafana" id="cdk8s-kube-prometheus.Grafana"></a>

#### Initializers <a name="Initializers" id="cdk8s-kube-prometheus.Grafana.Initializer"></a>

```typescript
import { Grafana } from 'cdk8s-kube-prometheus'

new Grafana(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-kube-prometheus.Grafana.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-kube-prometheus.Grafana.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-kube-prometheus.Grafana.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-kube-prometheus.Grafana.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-kube-prometheus.Grafana.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-kube-prometheus.Grafana.addDependency">addDependency</a></code> | Create a dependency between this Chart and other constructs. |
| <code><a href="#cdk8s-kube-prometheus.Grafana.generateObjectName">generateObjectName</a></code> | Generates a app-unique name for an object given it's construct node path. |
| <code><a href="#cdk8s-kube-prometheus.Grafana.toJson">toJson</a></code> | Renders this chart to a set of Kubernetes JSON resources. |

---

##### `toString` <a name="toString" id="cdk8s-kube-prometheus.Grafana.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-kube-prometheus.Grafana.addDependency"></a>

```typescript
public addDependency(dependencies: ...IConstruct[]): void
```

Create a dependency between this Chart and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-kube-prometheus.Grafana.addDependency.parameter.dependencies"></a>

- *Type:* ...constructs.IConstruct[]

the dependencies to add.

---

##### `generateObjectName` <a name="generateObjectName" id="cdk8s-kube-prometheus.Grafana.generateObjectName"></a>

```typescript
public generateObjectName(apiObject: ApiObject): string
```

Generates a app-unique name for an object given it's construct node path.

Different resource types may have different constraints on names
(`metadata.name`). The previous version of the name generator was
compatible with DNS_SUBDOMAIN but not with DNS_LABEL.

For example, `Deployment` names must comply with DNS_SUBDOMAIN while
`Service` names must comply with DNS_LABEL.

Since there is no formal specification for this, the default name
generation scheme for kubernetes objects in cdk8s was changed to DNS_LABEL,
since it’s the common denominator for all kubernetes resources
(supposedly).

You can override this method if you wish to customize object names at the
chart level.

###### `apiObject`<sup>Required</sup> <a name="apiObject" id="cdk8s-kube-prometheus.Grafana.generateObjectName.parameter.apiObject"></a>

- *Type:* cdk8s.ApiObject

The API object to generate a name for.

---

##### `toJson` <a name="toJson" id="cdk8s-kube-prometheus.Grafana.toJson"></a>

```typescript
public toJson(): any[]
```

Renders this chart to a set of Kubernetes JSON resources.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-kube-prometheus.Grafana.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-kube-prometheus.Grafana.isChart">isChart</a></code> | Return whether the given object is a Chart. |
| <code><a href="#cdk8s-kube-prometheus.Grafana.of">of</a></code> | Finds the chart in which a node is defined. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-kube-prometheus.Grafana.isConstruct"></a>

```typescript
import { Grafana } from 'cdk8s-kube-prometheus'

Grafana.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-kube-prometheus.Grafana.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isChart` <a name="isChart" id="cdk8s-kube-prometheus.Grafana.isChart"></a>

```typescript
import { Grafana } from 'cdk8s-kube-prometheus'

Grafana.isChart(x: any)
```

Return whether the given object is a Chart.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-kube-prometheus.Grafana.isChart.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdk8s-kube-prometheus.Grafana.of"></a>

```typescript
import { Grafana } from 'cdk8s-kube-prometheus'

Grafana.of(c: IConstruct)
```

Finds the chart in which a node is defined.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-kube-prometheus.Grafana.of.parameter.c"></a>

- *Type:* constructs.IConstruct

a construct node.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-kube-prometheus.Grafana.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-kube-prometheus.Grafana.property.apiObjects">apiObjects</a></code> | <code>cdk8s.ApiObject[]</code> | Returns all the included API objects. |
| <code><a href="#cdk8s-kube-prometheus.Grafana.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels applied to all resources in this chart. |
| <code><a href="#cdk8s-kube-prometheus.Grafana.property.namespace">namespace</a></code> | <code>string</code> | The default namespace for all objects in this chart. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-kube-prometheus.Grafana.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiObjects`<sup>Required</sup> <a name="apiObjects" id="cdk8s-kube-prometheus.Grafana.property.apiObjects"></a>

```typescript
public readonly apiObjects: ApiObject[];
```

- *Type:* cdk8s.ApiObject[]

Returns all the included API objects.

---

##### `labels`<sup>Required</sup> <a name="labels" id="cdk8s-kube-prometheus.Grafana.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels applied to all resources in this chart.

This is an immutable copy.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-kube-prometheus.Grafana.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The default namespace for all objects in this chart.

---





