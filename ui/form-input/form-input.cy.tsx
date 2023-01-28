import React from 'react';
import { FormInput } from './form-input';

describe('<FormInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FormInput />);
  });
});
