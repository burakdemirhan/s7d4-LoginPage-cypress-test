import { errorMessage } from "../../src/assets/components/login";

describe('Login Page', () => {
  describe('Error Message', () => {
    
    it('name input shows error for two characters', () => {
      cy.visit("http://localhost:5173/");
      cy.get(`[data-cy="ad-input"]`).type("em");
      cy.contains(errorMessage.ad);
    });

    it('surname input shows error for two characters', () => {
      cy.visit("http://localhost:5173/");
      cy.get(`[data-cy="soyad-input"]`).type("de");
      cy.contains(errorMessage.soyad);
    });

    it('email input shows error for invalid email format', () => {
      cy.visit("http://localhost:5173/");
      cy.get(`[data-cy="email-input"]`).type("emre@wit");
      cy.contains(errorMessage.email);
    });

    it('password input shows error for insufficient length', () => {
      cy.visit("http://localhost:5173/");
      cy.get(`[data-cy="password-input"]`).type("1234");
      cy.contains(errorMessage.password);
    });
    it('Button is disabled for for unvalidated inputs.', () => {
      cy.visit("http://localhost:5173/");
      cy.get(`[data-cy="password-input"]`).type("1234");
      cy.get(`[data-cy="submit-button"]`).should("be.disabled")
    });

  });
  describe('form input validate', () => {
    
    it('button enabled for right validation', () => {
      cy.visit("http://localhost:5173/");
      cy.get(`[data-cy="ad-input"]`).type("burak");
      cy.get(`[data-cy="soyad-input"]`).type("demirhan");
      cy.get(`[data-cy="email-input"]`).type("emre@wit.com.tr");
      cy.get(`[data-cy="password-input"]`).type("Salak.123");
      cy.get(`[data-cy="submit-button"]`).should("not.be.disabled")
     
    });

   

    

  });
});