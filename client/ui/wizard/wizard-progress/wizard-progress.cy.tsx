import { defaultProviderProps } from '../utils/test';
import { WizardProvider } from '../wizard-ctx';
import WizardProgress from './wizard-progress';

describe('<WizardProgress/>', () => {
  it('renders with required props', () => {
    cy.mount(
      <WizardProvider {...defaultProviderProps}>
        <WizardProgress />
      </WizardProvider>
    );
  });

  describe('rendering', () => {
    it('renders the correct number of steps', () => {
      cy.mount(
        <WizardProvider {...defaultProviderProps}>
          <WizardProgress />
        </WizardProvider>
      );

      // 3 steps + 2 lines
      cy.get('button').should('have.length', 3);
      cy.get('[data-test=left-line]').should('have.length', 3);
      cy.get('[data-test=right-line]').should('have.length', 3);
    });
  });
});
