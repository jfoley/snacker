# Snacker

An app to help a meeting organizer order the appropriate food for the meeting's
attendees.

This is the package that contains the entities and use cases for the snacker
app.

## Installing
`npm install`

## Run the specs
`npm test`

To run just the cucumber feature specs, use:
`npm run-script cucumber`

## Notes

The code is written in ES6 (and higher) so all invocations must be run through
babeljs.

The practical implication of this is that simply running `node somefile.js` is
unlikely to work- instead run `babel-node somefile.js`. Likewise, other javascript
tools that have a CLI must be invoked via babel. For example, to run the cucumber
specs, you must run something like `babel-node /path/to/cucumber.js`. Shortcuts
for the common commands can be found in the package.json file.


## WAT

Use Cases: the boundary of your system.

Entities: business logic for domain objects.
These should not leak out of use cases.
