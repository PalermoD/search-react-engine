import React from 'react/addons';
import SearchReactEngine from '../lib/search-react-engine.jsx';

describe('SearchReactEngine', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <SearchReactEngine/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('search-react-engine');
  });
});
