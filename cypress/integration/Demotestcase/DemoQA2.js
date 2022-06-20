/// <reference types="cypress" />

describe('Demo Automation test 2',function(){

    before(function(){
 cy.fixture('DemoQA2Element').then(function(data)
 {
     this.data = data
 })
     })
     it('Auto complete',function(){
        cy.visit("https://demoqa.com")
 cy.selectCard(this.data.cardselectname2)
 cy.get(':nth-child(4) > .element-list > .menu-list > #item-1').click()
cy.get('#autoCompleteSingleContainer').type('r')
cy.selectclourpick(this.data.color)
 })

beforeEach(function(){
 cy.fixture('DemoQA2Element').then(function(data)
 {
     this.data = data
 })
})
it('Calendar', function(){
    cy.get(':nth-child(4) > .element-list > .menu-list > #item-2').click()
cy.get('#datePickerMonthYearInput').click()
cy.get('.react-datepicker__year-select').select(this.data.year)
cy.get('.react-datepicker__month-select').select(this.data.month)
cy.selectdate(this.data.date)

})
})

