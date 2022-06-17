import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/Pages/Rocket';


describe('Testing the rendering of rockets', () => {
  test('display empty list of rockets', () => {
    const { container } = render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
