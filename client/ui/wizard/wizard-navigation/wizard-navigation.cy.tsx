import React from 'react';
import { defaultProviderProps, getProviderPropsWithActiveStep, OmitWizardProviderProps } from '../utils/test';
import { WizardProvider, WizardProviderProps } from '../wizard-ctx';
import WizardNavigation from './wizard-navigation';

import { LocaleProvider } from '@client/test-utils';
import commonEN from '@locales/en/common.json';

describe('<WizardNavigation />', () => {
  it('renders with required props', () => {
    cy.mount(
      <WizardProvider {...defaultProviderProps}>
        <WizardNavigation />
      </WizardProvider>
    );
  });

  describe('rendering', () => {
    it('should only show the next button when on first step', () => {
      cy.mount(
        <LocaleProvider lang="en" namespaces={{ common: commonEN }}>
          <WizardProvider {...defaultProviderProps}>
            <WizardNavigation />
          </WizardProvider>
        </LocaleProvider>
      );

      cy.get('button').should('have.length', 1);
      cy.get('button').contains('Next');
    });

    it('should show the previous button and done button when on last step', () => {
      const providerProps: OmitWizardProviderProps = getProviderPropsWithActiveStep(2);

      cy.mount(
        <LocaleProvider lang="en" namespaces={{ common: commonEN }}>
          <WizardProvider {...providerProps}>
            <WizardNavigation />
          </WizardProvider>
        </LocaleProvider>
      );

      cy.get('button').should('have.length', 2);
      cy.get('button').contains('Previous');
      cy.get('button').contains('Done');
    });

    it('should show both previous and next button when in the middle step', () => {
      const providerProps: OmitWizardProviderProps = getProviderPropsWithActiveStep(1);

      cy.mount(
        <LocaleProvider lang="en" namespaces={{ common: commonEN }}>
          <WizardProvider {...providerProps}>
            <WizardNavigation />
          </WizardProvider>
        </LocaleProvider>
      );

      cy.get('button').should('have.length', 2);
      cy.get('button').contains('Previous');
      cy.get('button').contains('Next');
    });
  });

  describe('interaction', () => {
    it('should call next when the next button is clicked', () => {
      const next = cy.stub();

      const providerProps: Omit<WizardProviderProps, 'children'> = {
        ...defaultProviderProps,
        next,
      };

      cy.mount(
        <LocaleProvider lang="en" namespaces={{ common: commonEN }}>
          <WizardProvider {...providerProps}>
            <WizardNavigation />
          </WizardProvider>
        </LocaleProvider>
      );

      cy.get('button').contains('Next').click();
      cy.wrap(next).should('have.been.called');
    });

    it('should call back when the previous button is clicked', () => {
      const back = cy.stub();

      const providerProps: OmitWizardProviderProps = {
        ...getProviderPropsWithActiveStep(1),
        back,
      };

      cy.mount(
        <LocaleProvider lang="en" namespaces={{ common: commonEN }}>
          <WizardProvider {...providerProps}>
            <WizardNavigation />
          </WizardProvider>
        </LocaleProvider>
      );

      cy.get('button').contains('Previous').click();
      cy.wrap(back).should('have.been.called');
    });

    it('should call done when the done button is clicked', () => {
      const done = cy.stub();

      const providerProps: OmitWizardProviderProps = {
        ...getProviderPropsWithActiveStep(2),
        done,
      };

      cy.mount(
        <LocaleProvider lang="en" namespaces={{ common: commonEN }}>
          <WizardProvider {...providerProps}>
            <WizardNavigation />
          </WizardProvider>
        </LocaleProvider>
      );

      cy.get('button').contains('Done').click();
      cy.wrap(done).should('have.been.called');
    });
  });

  describe('styling', () => {
    describe('layout', () => {
      it('should render with space between buttons when there are multiple buttons', () => {
        const providerProps: OmitWizardProviderProps = getProviderPropsWithActiveStep(1);

        cy.mount(
          <LocaleProvider lang="en" namespaces={{ common: commonEN }}>
            <WizardProvider {...providerProps}>
              <WizardNavigation />
            </WizardProvider>
          </LocaleProvider>
        );

        cy.get('nav').should('have.class', 'justify-between');
      });

      it('should render to the right when there is only one button', () => {
        const providerProps: OmitWizardProviderProps = getProviderPropsWithActiveStep(0);

        cy.mount(
          <LocaleProvider lang="en" namespaces={{ common: commonEN }}>
            <WizardProvider {...providerProps}>
              <WizardNavigation />
            </WizardProvider>
          </LocaleProvider>
        );

        cy.get('nav').should('have.class', 'justify-end');
      });
    });

    describe('colors', () => {
      describe('light', () => {});
      describe('dark', () => {});
    });
  });
});
