This project demonstrates react native, using flow, consuming several packages in a monorepo.

Initially there were flow errors importing packages but here are the various ways solved.

- util-hello-world
  - Add a local declaration file with a .js.flow extension https://flow.org/en/docs/libdefs/creation/
- util-hello-world-flow
  - Add the //@flow annotation to the top of the exported .js file
  - This seems to make the most sense if you want to write .js files (and not TS)
- util-hello-world-no-flow
  - Declare this package as a module in flow-typed and add the libdefs there https://flow.org/en/docs/libdefs/creation/
- util-hello-world-ts
  - Declare this package as a module in flow-typed and add the libdefs there https://flow.org/en/docs/libdefs/creation/
  - This seems to be the best way to deal with TS where the libdef acts as a bridge between TS and flow.  There is room for inconsistencies if updates aren't in sync.
- util-hello-world-ts-compiled
  - Compile the source so that I export a .js file, then it's essentially the same as util-hello-world.
  - Downside is every code change you must compile, then potentially re-create the .flow file