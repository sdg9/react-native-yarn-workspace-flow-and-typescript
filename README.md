This project demonstrates react native, using flow, consuming several packages in a monorepo.

Initially there were flow errors importing packages but here are the various ways solved.

- util-hello-world
  - Add a local declaration file with a .js.flow extension https://flow.org/en/docs/libdefs/creation/
  - Can be imported directly by a TS project as the .js.flow file is ignored (assuming allowJs: true)
- util-hello-world-flow
  - Add the //@flow annotation to the top of the exported .js file
  - This seems to make the most sense if you want to write .js files (and not TS)
  - CANNOT be imported directly by a TS project as the .js file has flow annotations
- util-hello-world-no-flow
  - Declare this package as a module in flow-typed and add the libdefs there https://flow.org/en/docs/libdefs/creation/
  - Can be imported directly by a TS project (assuming allowJs: true)
- util-hello-world-ts
  - Declare this package as a module in flow-typed and add the libdefs there https://flow.org/en/docs/libdefs/creation/
  - This seems to be the best way to deal with TS where the libdef acts as a bridge between TS and flow.  There is room for inconsistencies if updates aren't in sync.
  - Can be used by TS 
- util-hello-world-ts-compiled
  - Compile the source so that I export a .js file, then it's essentially the same as util-hello-world.
  - Downside is every code change you must compile, then potentially re-create the .flow file
  - Can be used by TS

## Potential issues
Getting import type declarations can only be used in TypeScript files?
See https://stackoverflow.com/a/50385231

- Install Flow Language Support
- Open workspace settings and add `"javascript.validate.enable": false`
- https://github.com/flow/flow-for-vscode#setup
- As of now I don't know a good way to enable typescript on a worksapce and flow on another within the same project