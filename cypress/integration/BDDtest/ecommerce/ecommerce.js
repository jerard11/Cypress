import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('Open an ecommerce page',function(){
    cy.visit("http://rahulshettyacademy.com/seleniumPractise/#/")
  
})
When('Adding Itens to Cart',() => {
    cy.get("input[type='search']").type('cu')
    cy.wait(2000)
cy.get('.product:visible').should('have.length',2)
cy.get('.brand').should('have.text','GREENKART')
cy.get('.products').find('.product').should('have.length',2)
cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
cy.get('.products').find('.product').each(($el ,index, $list) => {

var textclick = $el.find('h4.product-name').text()
if(textclick.includes('Cucumber'))
{
    cy.get($el).find('button').click()
}    
})
})

And('validate the Prices',function(){
    cy.get('.tada').click()
cy.get('.cart-preview > .action-block > button').click()
cy.get('.promoCode').type('Promo30')
})

Then('Confirm order placed',function(){
    cy.get(':nth-child(14)').click()
cy.get('.chkAgree').check()
cy.get('button').click()
})


