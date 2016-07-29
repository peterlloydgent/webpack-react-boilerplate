# Boilerplate for ES6 App
As I hate setting up the same basic crap every time just like everyone else, I have - like everyone else - created a boilerplate for just how I like it for a good nice starting point.

This is a boilerplate for an Application written in ES6

## Chosen technologies
For ES5 compabitility I have chosen WebPack as the builder with Babel on top for the fallback.

The Application itself is based on BackboneJS for the MC part of MVC, and React for the V.

jQuery, Backbone, React are always available in your code as defined in [webpack-dev-server.config.js](https://github.com/IgorSzyporyn/webpack-react-backbone-boilerplate/blob/master/webpack-dev-server.config.js) and [webpack-production.config.js](https://github.com/IgorSzyporyn/webpack-react-backbone-boilerplate/blob/master/webpack-production.config.js) since these are use a LOT and are a pain to keep redeclaring.