const fetch = require('node-fetch');
const fs = require('fs');
const {
  buildClientSchema,
  printSchema,
} = require('graphql/utilities');
const introspectionQuery = require('./introspectionQuery.js');
const path = require('path');
const schemaPath = path.join(__dirname, 'schema');

const SERVER = 'http://graphql-swapi.parseapp.com';

// Save JSON of full schema introspection for Babel Relay Plugin to use
export function getSchema() {
  fetch(`${SERVER}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'query': introspectionQuery}),
  }).then(res => res.json()).then(schemaJSON => {
    fs.writeFileSync(
      `${schemaPath}.json`,
      JSON.stringify(schemaJSON, null, 2)
    );

    // Save user readable type system shorthand of schema
    const graphQLSchema = buildClientSchema(schemaJSON.data);
    fs.writeFileSync(
      `${schemaPath}.graphql`,
      printSchema(graphQLSchema)
    );
  });
}