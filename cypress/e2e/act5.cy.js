describe('Flujo completo de navegación', () => {

  it('Debe completar varias acciones correctamente', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('Commands').click()
    cy.contains('Actions').click()

    cy.get('.action-email')
      .type('ejemplo@test.com')
      .should('have.value', 'ejemplo@test.com')

    cy.get('.action-checkboxes [type="checkbox"]')
      .not('[disabled]')
      .check()

    cy.get('.action-radios [type="radio"]')
      .first()
      .check()

    cy.get('.action-select')
      .select('oranges')
      .should('have.value', 'fr-oranges')

    cy.contains('Commands').click()
    cy.contains('Traversal').click()

    cy.get('h1')
      .should('contain.text', 'Traversal')

    // regresar a Actions
    cy.go('back')

    // regresar a página principal
    cy.go('back')

    cy.contains('Kitchen Sink')
      .should('be.visible')

  })

})