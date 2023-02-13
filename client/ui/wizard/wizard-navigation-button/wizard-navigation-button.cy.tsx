import WizardNavigationButton from './wizard-navigation-button';

describe('<WizardNavigationButton />', () => {
  it('renders with required props', () => {
    cy.mount(<WizardNavigationButton variant="next">Button text</WizardNavigationButton>);
  });

  it('should render the correct children', () => {
    cy.mount(<WizardNavigationButton variant="next">Button text</WizardNavigationButton>);
    cy.get('button').contains('Button text');
  });

  it('should render with next button variant', () => {
    cy.mount(<WizardNavigationButton variant="next">Next</WizardNavigationButton>);
    cy.get('button').contains('Next');
    cy.get('button').should('have.class', 'bg-green-500');
  });

  it('should render with back button variant', () => {
    cy.mount(<WizardNavigationButton variant="back">Back</WizardNavigationButton>);
    cy.get('button').contains('Back');
    cy.get('button').should('have.class', 'bg-transparent');
  });

  it('should render with done button variant', () => {
    cy.mount(<WizardNavigationButton variant="done">Done</WizardNavigationButton>);
    cy.get('button').contains('Done');
    cy.get('button').should('have.class', 'bg-green-500');
  });
});
