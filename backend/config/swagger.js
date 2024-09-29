/**
 * API Document Setting
 */
const swaggerJSDoc = require(`swagger-jsdoc`);

const swaggerDefinition = {
openapi: `3.0.0`,
info: {
title: `My API`,
version: `1.0.0`,
description: `My API Description`,
},
};

const options = {
swaggerDefinition,
apis: 
// Path to the API routes in your Node.js application
[`./API_Docs/*.yml`], 
// [`./API_Docs/*.json`],
// [`./API_Docs/*.js`],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;