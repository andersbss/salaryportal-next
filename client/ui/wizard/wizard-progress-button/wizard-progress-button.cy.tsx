import WizardProgressButton from './wizard-progress-button';

describe('<WizardProgressButton/>', () => {
  it('renders with required props', () => {
    cy.mount(<WizardProgressButton title="1" variant="active" />);
  });

  describe('rendering', () => {});

  describe('interactions', () => {});
});
