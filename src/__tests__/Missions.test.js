import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Pages/Mission';

const mission = [
  {
    desc: 'Eutelsat S.A. is a European satellite operator',
    key: 'special',
    id: 1,
    name: 'defines the satellite',
    joining: true,
  },
];

describe('testing the rendering of missions', () => {
  it('', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions key={mission[0]} mission={mission[0]} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
