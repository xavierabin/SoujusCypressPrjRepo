/// <reference types="cypress" />

it('Google test',function(){

    cy.visit('https://staging.fleetonline.net')
    cy.get('[id=okBtn]').click()
    cy.get('#tbUsername').type('test_141@sst.com')
})
