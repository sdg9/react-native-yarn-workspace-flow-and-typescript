//@flow

import { hello } from "util-hello-world";
// import { hello as helloTS } from "util-hello-world-ts"; // cannot import a TS file from vanilla js
import { hello as helloNoFlow } from "util-hello-world-no-flow";
// import { hello as helloFlow } from "util-hello-world-flow"; // cannot import a flow file as it has flow annotations vanilla js doesn't know about

console.log("Example of how I can have another consumer of a package", hello());
console.log("NoFlow", helloNoFlow());
