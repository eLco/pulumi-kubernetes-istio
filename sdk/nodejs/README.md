## Pulumi Istio

Pulumi Kubernetes resources for Istio generated from the [Istio API](https://github.com/istio/istio-api)

### Installation

```
$ npm i @elcodev/pulumi-istio
```

#### Example

Gateway

```ts
import * as istio from '@elcodev/pulumi-istio';

// ...

export const helloWorldGateway = new istio.networking.v1beta1.Gateway('hello-world-gateway', {
  metadata: {
    name: 'hello-world-gateway',
  },
  spec: {
    selector: {
      istio: 'ingressgateway',
    },
    servers: [
      {
        port: {
          number: 80,
          name: 'http',
          protocol: 'HTTP',
        },
        hosts: ['*'],
      },
    ],
  },
});
```
