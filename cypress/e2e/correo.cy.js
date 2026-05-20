describe('Prueba automatizada en Cypress', () => {
  it('Debe abrir la página, navegar, escribir, hacer clic y validar', () => {
    
    cy.visit('https://example.cypress.io')

    
    cy.get('.dropdown-toggle').click()
    cy.contains('Actions').click()

    
    cy.get('.action-email').type('usuario@ejemplo.com')

    
    cy.get('.action-form').submit()

    
    cy.contains('Your form has been submitted!')
  })
})
