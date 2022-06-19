describe('UI Automattion test', function(){
    it('UI Test Suite', function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //checkboxes
cy.get('#opentab').invoke('removeAttr','target').click()
cy.url().should('include','rahul')
cy.go('back')
cy.get('#select-class-example > fieldset > legend').type("hello")

cy.get('tr td:nth-child(2)').each(($el, index, $list) =>{x
const textpr = $el.text()
    if(textpr.includes("python")){
cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
    {
var pricets = price.text()
expect(pricets).to.equal('25')
    }
 )
}})
    })
})