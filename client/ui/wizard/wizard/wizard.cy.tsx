import Wizard from './wizard';

describe('<Wizard />', () => {
  it('renders with required props', () => {
    cy.mount(
      <Wizard>
        <form>Children</form>
      </Wizard>
    );
  });

  describe('rendering', () => {
    it('renders with children', () => {
      cy.mount(
        <Wizard>
          <form>Children</form>
        </Wizard>
      );
      cy.get('form').contains('Children');
    });

    it('renders with navigation', () => {
      cy.mount(
        <Wizard navigation={{ step: 1, totalSteps: 3, onNext: () => {} }}>
          <form>Children</form>
        </Wizard>
      );

      cy.get('[data-test=wizard-navigation]').should('exist');
    });

    it('renders with progress', () => {
      cy.mount(
        <Wizard progress={{ steps: [{ title: '1', variant: 'active' }] }}>
          <form>Children</form>
        </Wizard>
      );

      cy.get('[data-test=wizard-progress]').should('exist');
    });
  });
});
