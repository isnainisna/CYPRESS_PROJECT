/// ,refrence types="cypress" />

describe('API Testing',() => {
    it('Test API Create New User',()=>{
        cy.request('POST','https://reqres.in/api/users/2').
        then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.not.be.null
        })
    })
})