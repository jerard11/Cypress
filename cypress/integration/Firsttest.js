describe('My firste test suite',function()
{
it('My first case',function() {
    cy.visit("http://rahulshettyacademy.com/seleniumPractise/#/")
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
}
//Asynchronus

//const logo = cy.get('.brand')
//cy.log((logo).text())


)



})
}
)