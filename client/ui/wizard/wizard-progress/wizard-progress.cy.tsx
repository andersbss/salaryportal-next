import { defaultProviderProps, OmitWizardProviderProps } from '../utils/test';
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

      // 3 steps + 3 labels + 2 lines between each step
      cy.get('button').should('have.length', 3);
      cy.get('[data-test=left-line]').should('have.length', 3);
      cy.get('[data-test=right-line]').should('have.length', 3);
      cy.get('[data-test=label]').should('have.length', 3);
    });
  });

  describe('interaction', () => {
    it('calls the go to step handler when a completed step is clicked', () => {
      const goTo = cy.stub();

      const props: OmitWizardProviderProps = {
        ...defaultProviderProps,
        steps: [
          { index: 0, label: 'Step 1', number: 1, variant: 'completed' },
          { index: 1, label: 'Step 2', number: 2, variant: 'active' },
        ],
        activeStep: {
          index: 1,
          label: 'Step 2',
          number: 2,
          variant: 'active',
        },
        goTo,
      };

      cy.mount(
        <WizardProvider {...props}>
          <WizardProgress />
        </WizardProvider>
      );

      cy.get('button').eq(0).click();
      cy.wrap(goTo).should('have.been.calledWith', 0);
    });
  });
});
