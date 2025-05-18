/// ,refrence types="cypress" />
describe('API Testing', () => {
  it('Test API Update Existing User', () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: {
        name: 'morpheus',
        job: 'zion resident'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name', 'morpheus')
      expect(response.body).to.have.property('job', 'zion resident')
      expect(response.body).to.have.property('updatedAt')
    })
  })
})

