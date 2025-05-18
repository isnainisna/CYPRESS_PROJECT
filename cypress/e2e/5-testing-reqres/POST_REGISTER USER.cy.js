describe('API Testing', () => {
  it('Test API POST REGISTER User', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol"
      }
    }).then((response) => {
      expect(response.status).to.eq(200) // atau 201 kalau sesuai docs
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('token')
    })
  })
})

