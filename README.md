# search react engine

Get the AMD module located at `search-react-engine.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'SearchReactEngine': 'search-react-engine'
  }
});

require(['react', 'SearchReactEngine'], function(React, SearchReactEngine) {

  React.render(React.createElement(SearchReactEngine), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
