describe('Teste End-to-End', () => {
  it('Teste 1: Visita Página', () => {
    cy.visit('http://localhost:5000')
  })
  it('Teste 2: Verifica item na página', () => {
    cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
  })
  it('Teste 3: Calcula frete', () => {
    // Calcula o frete
    cy.get('[data-id=3]').within(() => {
      cy.get('input').type('10000-000')
      cy.contains('Calcular Frete').click().then
      cy.wait(2000)
    })
    cy.get('.swal-text').contains('O frete é: R$')

    // Fecha o pop-up com o preço do frete
    cy.get('.swal-button').click()
  })
  it('Teste 4: Realiza compra', () => {
    // Realiza a compra
    cy.get('[data-id=1]').within(() => {
      cy.contains('Comprar').click().then
      cy.wait(2000)
    })
    cy.get('.swal-text').contains('Sua compra foi realizada com sucesso')
    // Fecha o pop-up com a mensagem de compra realizada
    cy.get('.swal-button').click()
  })
});