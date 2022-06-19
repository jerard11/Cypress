// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('selectCard', (cardName) => { 
cy.get('div.card-body').each(($el, index, $list) =>{
    if($el.text().includes(cardName)){
        cy.wrap($el).click()
    }
    } )  
})

Cypress.Commands.add('selectelementGroup', (groupName) => { 
cy.get('div[class="element-group"]').each(($e1, index, $list) =>{
    if($e1.text().includes(groupName)){
        cy.wrap($e1).click()
    }
    } )  
})
Cypress.Commands.add('selectdate', (pickdate) => { 
cy.get('.react-datepicker__month').each(($e5, index, $list) => {
    if($e5.text()=== pickdate){
        cy.wrap($e5).click()
    }
})
})
Cypress.Commands.add('selectclourpick', (selectcolor) => { 
cy.get('input[aria-autocomplete="list"]').each(($e3, index, $list) =>{
    if($e3.text === selectcolor){
        cy.wrap($e3).click()
    }
})
    })


require('cypress-downloadfile/lib/downloadFileCommand')

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
