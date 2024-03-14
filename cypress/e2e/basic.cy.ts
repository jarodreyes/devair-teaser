describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('renders the video', () => {
    cy.get('video')
    .should('be.visible')
  })
})