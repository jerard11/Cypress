describe('Test Suite',function()
{
it('suite',function(){

cy.visit("http://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('cu')
cy.wait(2000)
cy.get('.brand').should('have.text','GREENKART')
cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').each(($el, index, $link) => {
const veglist = $el.find('h4.product-name').text()
if(veglist.includes('Cucumber'))
    {
    cy.wrap($el).find('button').click()
}
})
cy.get('.cart-icon > img').click()
cy.get('.cart-preview > .action-block > button').click()
cy.get('.promoCode').type('Promo30')
})
}
)