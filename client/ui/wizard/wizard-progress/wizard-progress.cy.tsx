import WizardProgress from './wizard-progress';

describe('<WizardProgress/>', () => {
  it('renders with required props', () => {
    cy.mount(<WizardProgress steps={[{ title: '1', variant: 'active' }]} />);
  });

  describe('rendering', () => {
    it('renders the correct number of steps', () => {
      cy.mount(
        <WizardProgress
          steps={[
            { title: '1', variant: 'completed' },
            { title: '2', variant: 'active' },
            { title: '3', variant: 'inactive' },
          ]}
        />
      );

      cy.get('button').should('have.length', 3);
      cy.get('[data-test=left-line]').should('have.length', 3);
      cy.get('[data-test=right-line]').should('have.length', 3);
    });
  });
});
