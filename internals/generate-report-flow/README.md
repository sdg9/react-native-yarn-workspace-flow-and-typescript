Despite using flow and pre-building with `yarn workspace generate-report-flow build`, still when running
`yarn workspace generate-report-flow start` it fails if I've imported a library with an //@flow annotation.
This is not an issue when running from React Native.

Is there an equivalent of ts-node for flow to transpile on the fly?

Per [this article](https://www.jackfranklin.co.uk/blog/npm-flowjs-javascript/) looks like I need to
1. Compile the code using babel to es6
2. Also copy over original source, but with .flow extension
3. publish

The nice thing with TS is that if I use ts-node I don't need to compile anything, it just works as expected in dev.
Downside with flow is each individual package needs to be compiled even if being consumed by flow, as dependencies it pulls from, if not compiled, complain of flow annotations.
