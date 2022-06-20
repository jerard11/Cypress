describe('UI Automattion test', function()
{
it('UI Test Suite', function(){
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//checkboxes
cy.get('#checkbox-example > fieldset > legend').should('have.text','Checkbox Example')
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

//static dropdown
cy.get('select').select('option2').should('have.value','option2')
//dynamic dropdown
cy.get("#autocomplete").type('ind')
cy.get('.ui-menu-item div').each(($el, index, $list) => {
if($el.text() ==="India"){
    $el.click()
    cy.wait(2000)
}
})
cy.get("#autocomplete").should('have.value','India')

// hide or show button
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')



})
})

