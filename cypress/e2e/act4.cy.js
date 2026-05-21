describe('Automatización de acciones', () => {

  it('Debe interactuar con distintos elementos en la sección Actions', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('Commands')
      .click()

    cy.contains('Actions')
      .click()

    // Escribir texto en un campo
    cy.get('.action-email')
      .type('marciajuarez@ejemplo.com')

    // Seleccionar un checkbox
    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .check()

    // Seleccionar un radio button
    cy.get('.action-radios [type="radio"]')
      .first()
      .check()

    // Seleccionar una opción de una lista
    cy.get('.action-select')
      .select('apples')

    // Dar clic en un botón
    cy.get('.action-btn')
      .click()

    // Validaciones con should()
    cy.get('.action-email')
      .should('have.value', 'marciajuarez@ejemplo.com')

    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .should('be.checked')

    cy.get('.action-radios [type="radio"]')
      .first()
      .should('be.checked')

    cy.get('.action-select')
      .should('have.value', 'fr-apples')

  })

})