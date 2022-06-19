class ElementsPage{
   getBanner() {
   return  cy.get('.banner-image')
}

getplayGround(){

    return cy.get('.playgound-header')
}
getEelements(){
   return  cy.get(':nth-child(1) > .element-list > .menu-list > #item-0')
}
getusername(){
    return cy.get('#userName')
}

getcurrentAddress(){
return cy.get('#currentAddress')
    }

getsubmitButton(){
   return cy.get('#submit')
}

getName(){
    return cy.get("#name")
}

getborderAdrress(){
return cy.get(".border > #currentAddress")
}

getcheckBox(){
   return cy.get(":nth-child(1) > .element-list > .menu-list > #item-1")
}


getCollapse(){
    return cy.get(".rct-collapse")
}

getcollapseNode(){
    return cy.get(".rct-node-expanded > ol > :nth-child(1) > .rct-text > .rct-collapse > .rct-icon")
}

getradioButton(){
   return cy.get(":nth-child(1) > .element-list > .menu-list > #item-2")
}

getTables(){
    return cy.get(":nth-child(1) > .element-list > .menu-list > #item-3")
}
getrecordButton(){
   return cy.get('#addNewRecordButton')
}

getregistrationModal(){
    return cy.get("#registration-form-modal")
}

getfirstname(){
   return cy.get('#firstName')
}

getlastname(){
  return   cy.get('#lastName')
}

getuserMail(){
    return  cy.get('#userEmail')
}

getAge(){
    return cy.get('#age')
}
getSalary(){
    return cy.get('#salary')
}

getDepartment(){
    return cy.get('#department')
}
getSearchbox(){
  return  cy.get('#searchBox')
}
getScroll(){
    return cy.get('div[class="rt-table"]')
}

getEditicon(){
    return cy.get("#edit-record-4 > svg")
}

getCloseicon(){
   return cy.get("button[class='close']")
}

getclassButton(){
return    cy.get(':nth-child(1) > .element-list > .menu-list > #item-4')

}
getdoubleclick(){
   return cy.get("#doubleClickBtn")
}
getdblclkMsg(){
   return cy.get("#doubleClickMessage")
}

getrhtClick(){
    return cy.get("#rightClickBtn")
}

getrightclkMsg(){
    return cy.get("#rightClickMessage")
}
getLink(){
   return cy.get(':nth-child(1) > .element-list > .menu-list > #item-5')
}
getSimplelink(){
   return cy.get("#simpleLink")
}

getAlerts(){
   return  cy.get(':nth-child(3) > .element-list > .menu-list > #item-1')
}

getalertbutton(){
  return  cy.get('#alertButton')
}
getConfirmbutton(){
   return cy.get('#confirmButton')
}

}
export default ElementsPage;