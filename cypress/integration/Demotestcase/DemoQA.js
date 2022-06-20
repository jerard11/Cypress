/// <reference types="cypress" />
import cypress from "cypress"
import ElementsPage from "../../support/PageObjects/ElementsPage"

describe('Demo Automation test',function(){

   before(function(){
cy.fixture('DemoQAbanner').then(function(data)
{
    this.data = data
})
    })
    it('Demo Test',function(){
        const elementsPage = new ElementsPage()
cy.visit("https://demoqa.com")
elementsPage.getBanner().invoke('attr','alt').should('contain',this.data.banner)
cy.selectCard(this.data.cardselectname)
elementsPage.getplayGround().should('have.text',this.data.cardselectname)
elementsPage.getEelements().click()
})


beforeEach(function(){
    cy.fixture('DemoQAElement').then(function(data1)
    {
        this.data1 = data1
    })
})
it('Elements Test',function(){
    const elementsPage = new ElementsPage()
    elementsPage.getEelements().click()
elementsPage.getusername().type(this.data1.name).wait(2000)
//cy.get('#userEmail').type(this.data1.email).wait(2000)
elementsPage.getcurrentAddress().type(this.data1.address)
elementsPage.getsubmitButton().click()
elementsPage.getName().should('contain',this.data1.name)
//cy.get("#email").should('contain',this.data1.email)
elementsPage.getborderAdrress().should('contain',this.data1.address)

})

beforeEach(function(){
    cy.fixture('DemoQAElement').then(function(data1)
    {
        this.data1 = data1
    })
})
it('Checkbox test',function(){
    const elementsPage = new ElementsPage()
elementsPage.getcheckBox().click()
elementsPage.getCollapse().click()
elementsPage.getcollapseNode().click()
//cy.get('svg[class="rct-icon rct-icon-uncheck:visible"]').check()
})

it('Radio test',function(){
    const elementsPage = new ElementsPage()
elementsPage.getradioButton().click()
//cy.get('input[id="impressiveRadio"]').check()
//.should('be.checked').and('have.text','Impressive')
})


it('Tables Test',function(){
    const elementsPage = new ElementsPage()
    elementsPage.getTables().click()
    elementsPage.getrecordButton().click()
    elementsPage.getregistrationModal().should('contain','Registration Form')
    elementsPage.getfirstname().type(this.data1.name)
    elementsPage.getlastname().type(this.data1.name)
    elementsPage.getuserMail().type(this.data1.email)
    cy.wait(2000)
    elementsPage.getAge().type(this.data1.age)
    elementsPage.getSalary().type(this.data1.salary)
    elementsPage.getDepartment().type(this.data1.department)
    elementsPage.getsubmitButton().click()
elementsPage.getSearchbox().type(this.data1.name).wait(2000)
elementsPage.getScroll().scrollTo('right')
elementsPage.getEditicon().click()
elementsPage.getCloseicon().click()

    })

    it('Button test',function(){
        const elementsPage = new ElementsPage()
        elementsPage.getclassButton().click()
        elementsPage.getdoubleclick().dblclick()
        elementsPage.getdblclkMsg().should('contain','You have done a double click')
        elementsPage.getrhtClick().rightclick()
        elementsPage.getrightclkMsg().should('contain','You have done a right click')
        })
        

 it('Link test',function(){
    const elementsPage = new ElementsPage()
     elementsPage.getLink().click()
     elementsPage.getSimplelink().invoke('removeAttr','target').click()
     cy.url().should("include",'demoqa')
 cy.go('back').wait(2000)
 cy.url().should("include",'links')
 /*
       cy.get("#simpleLink").then(function(el)
        {
         const url = el.prop('href')
         cy.visit(url)
         cy.url().should("include",'demoqa')
         cy.go("back")
    })
    */
})


 beforeEach(function(){
    cy.fixture('DemoQAElement').then(function(data1)
    {
        this.data1 = data1
    })
})
 it('Alerts test',function(){
    const elementsPage = new ElementsPage()
    cy.selectelementGroup(this.data1.elementname).wait(2000)
elementsPage.getAlerts().click()
elementsPage.getalertbutton().click()
cy.on('window:alert',(str)=>{
    expect(str).to.equal('You clicked a button')
})
elementsPage.getConfirmbutton().click()
cy.on('window:confirm',(str)=>{
    expect(str).to.equal('Do you confirm action?')
})
 })
})

