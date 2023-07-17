/// <reference types="cypress" />

describe('Login tests', () => {
  
  beforeEach(()=>{
    cy.visit('http://localhost:3000');
  });

  it('is login page', ()=>{
    cy.contains('Login Page');
  });

  it('invalid login try', ()=> {
    cy.get('button[name="login-button"]').click();
    cy.contains('Invalid credentials!').and('be.visible');
  });

  it('complete login', ()=> {
    cy.fixture('example.json').as('usersData').then((usersData)=>{
      cy.get('input[name="email"]').type(usersData.email);
      cy.get('input[name="password"]').type(usersData.password);
      cy.get('button[name="login-button"]').click();
      cy.url().should('include', '/home');
    });   
  })
})

describe("home", ()=>{
  beforeEach(()=>{
    cy.visit("http://localhost:3000");
  })

  it("req send error", ()=> {
    cy.login();
    cy.get('input[id="title"]').type("foo");
    cy.get('textarea[id="body"]').type("bar");
    cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts', {
      statusCode: 500, 
      body: {}
    });
    cy.get('.form-submit-button').click();
    cy.contains('Sorry, an unexpected error has occurred.');
  });

  it("req send success", ()=>{
    cy.login();
    cy.get('input[id="title"]').type("foo");
    cy.get('textarea[id="body"]').type("bar");
    cy.get('.form-submit-button').click();
    cy.contains("Home");
  });

  it("request manipulation", ()=>{
    cy.pause();
    cy.login();
    cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts', (req) => {
      req.headers['Mock'] = 'true';
    }).as('getMockData');
    cy.get('.form-submit-button').click();
    cy.get('@getMockData').then((interception : any) => {
      const requestHeaders = interception.request.headers;
      expect(requestHeaders).to.have.property('Mock', 'true');
    });
  })

})