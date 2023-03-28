import LabelledText from './labelled-text';

describe('<LabelledText />', () => {
  it('renders with required props', () => {
    cy.mount(<LabelledText label="Label" value="Value" />);
  });

  describe('rendering', () => {
    it('should render the label and value', () => {
      cy.mount(<LabelledText label="Label" value="Value" />);

      cy.get('span').should('have.length', 2);
      cy.get('span').first().should('have.text', 'Label: ');
      cy.get('span').last().should('have.text', 'Value');
    });

    it('should render empty fragment if value is null', () => {
      cy.mount(<LabelledText label="Label" value={null} />);

      cy.get('span').should('have.length', 0);
    });
  });
});
