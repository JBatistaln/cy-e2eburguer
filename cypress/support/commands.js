Cypress.Commands.add('acessarHome', () => {
    cy.visit('https://e2eburguer.netlify.app');
    //checkpoint
    cy.url().should('include', 'https://e2eburguer.netlify.app')
    cy.contains('h1', 'Faça seu login')
})
Cypress.Commands.add('preencher', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
})
Cypress.Commands.add('submitBtn', (textoBtn) => {
    cy.contains("button[type=submit]", textoBtn).click()
})
Cypress.Commands.add('verificarMsgToast', (msgEsperada) => {
    cy.get('.Toastify__toast-body > :nth-child(2)')
        .should('be.visible')
        .and('have.text', msgEsperada)
})
Cypress.Commands.add('verificarMsgErro', (msgEsperada) => {
    cy.get('[class^="home_errorText"]')
        .should('be.visible')
        .and('contain.text', msgEsperada)
        .and('have.css', 'color', 'rgb(230, 57, 70)')
})
Cypress.Commands.add('verificarPagina', (rota, textoPagina) => {
    cy.url().should("include", `${rota}`)
    cy.contains("h1", textoPagina)
})
{(
 Cypress.Commands.add('verificarUsuarioLogado', (name) => {
    const nomeUsuario = name.split(" ")[0]
    cy.get('[data-testid = "user-greeting"]')
    .should("be.visible")
    .and("contain.text", `Olá, ${nomeUsuario}!`)
    
})
)}