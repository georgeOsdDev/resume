import React from 'react';
import renderer from 'react-test-renderer';
import Badges from './Badges';

test('snapshot', () => {
  const component = renderer.create(
    <Badges/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
