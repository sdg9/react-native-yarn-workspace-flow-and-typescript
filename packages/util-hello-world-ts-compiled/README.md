Flow is happy if .flow lives next to a js or json file.

Since the export is dist/index.js it's happy to read dist/index.js.flow

Note to make this I had to compile typescript (tsc) and then in this case I manually added the .flow file.  

While there may be ways to help automate it, it will be cumbersome on devs if they have to manually compile ts while developing locally.