import React from 'react';
import WizardNavigation from './wizard-navigation';

describe('<WizardNavigation />', () => {
  it('renders with required props', () => {
    cy.mount(<WizardNavigation step={0} totalSteps={1} />);
  });

  it('should only show the next button when on first step', () => {
    cy.mount(<WizardNavigation step={0} totalSteps={3} />);
    cy.get('button').should('have.length', 1);
    cy.get('button').contains('Next');
  });

  it('should show the previous button and done button when on last step', () => {
    cy.mount(<WizardNavigation step={2} totalSteps={3} />);
    cy.get('button').should('have.length', 2);
    cy.get('button').contains('Previous');
    cy.get('button').contains('Done');
  });

  it('should show both previous and next button when in the middle step', () => {
    cy.mount(<WizardNavigation step={1} totalSteps={3} />);
    cy.get('button').should('have.length', 2);
    cy.get('button').contains('Previous');
    cy.get('button').contains('Next');
  });

  it('should call onNext when the next button is clicked', () => {
    const onNext = cy.stub();

    cy.mount(<WizardNavigation step={0} totalSteps={3} onNext={onNext} />);
    cy.get('button').contains('Next').click();
    cy.wrap(onNext).should('have.been.called');
  });

  it('should call onBack when the previous button is clicked', () => {
    const onBack = cy.stub();

    cy.mount(<WizardNavigation step={1} totalSteps={3} onBack={onBack} />);
    cy.get('button').contains('Previous').click();
    cy.wrap(onBack).should('have.been.called');
  });

  it('should call onDone when the done button is clicked', () => {
    const onDone = cy.stub();

    cy.mount(<WizardNavigation step={2} totalSteps={3} onDone={onDone} />);
    cy.get('button').contains('Done').click();
    cy.wrap(onDone).should('have.been.called');
  });
});
