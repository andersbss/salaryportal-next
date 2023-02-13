import WizardProgress from './wizard-progress';

describe('<WizardProgress/>', () => {
  it('renders with required props', () => {
    cy.mount(<WizardProgress step={0} steps={[{ title: '1' }]} />);
  });

  describe('rendering', () => {});
});
