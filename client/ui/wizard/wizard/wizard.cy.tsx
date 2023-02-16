import { defaultProviderProps } from '../utils/test';
import { WizardProvider } from '../wizard-ctx';
import Wizard from './wizard';

describe('<Wizard />', () => {
  it('renders with required props', () => {
    cy.mount(
      <WizardProvider {...defaultProviderProps}>
        <Wizard>
          <form>Children</form>
        </Wizard>
      </WizardProvider>
    );
  });

  describe('rendering', () => {
    it('renders with children', () => {
      cy.mount(
        <WizardProvider {...defaultProviderProps}>
          <Wizard>
            <form>Children</form>
          </Wizard>
        </WizardProvider>
      );

      cy.get('form').contains('Children');
    });
  });
});
