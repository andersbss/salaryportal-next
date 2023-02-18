import WizardProgressButton from './wizard-progress-button';

describe('<WizardProgressButton/>', () => {
  it('renders with required props', () => {
    cy.mount(<WizardProgressButton number={1} variant="active" onClick={() => {}} />);
  });

  describe('rendering', () => {
    it('should render as active', () => {
      cy.mount(<WizardProgressButton number={1} variant="active" onClick={() => {}} />);

      cy.get('button').should('have.class', 'bg-green-500');
      cy.get('button').should('have.attr', 'disabled');
    });

    it('should render as inactive', () => {
      cy.mount(<WizardProgressButton number={1} variant="inactive" onClick={() => {}} />);

      cy.get('button').should('have.class', 'bg-gray-300');
      cy.get('button').should('have.attr', 'disabled');
    });

    it('should render as completed', () => {
      cy.mount(<WizardProgressButton number={1} variant="completed" onClick={() => {}} />);

      cy.get('button').should('have.class', 'bg-green-500');
      cy.get('button').should('not.have.attr', 'disabled');
    });
  });

  describe('interactions', () => {
    it('should call the onClick handler when completed is clicked', () => {
      const onClick = cy.stub();
      cy.mount(<WizardProgressButton number={1} variant="completed" onClick={onClick} />);

      cy.get('button').click();
      cy.wrap(onClick).should('have.been.called');
    });
  });
});
