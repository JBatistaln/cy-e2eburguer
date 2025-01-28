describe('Login', () => {
  //hooks
  //before - executar 1 vez antes de todos os testes
  //beforeEach - executar 1 vez para cada teste
  //after - executar 1 vez depois de todos os testes
  //afterEach - executar 1 vez depois de cada teste
  beforeEach(()=>{
    cy.acessarHome()
  })
  it('Login realizado com sucesso', () => {
    const usuario = {
      email: 'teste.qa@gmail.com',
      password: 'Teste@123!'
    }
    cy.preencher(usuario.email, usuario.password)
    cy.submitBtn("Acessar")
    cy.verificarMsgToast("Login realizado com sucesso!")  
  })
  
  it('Não deve logar com senha inválida', () =>{
    const teste = {
      email: 'teste.qa@gmail.com',
      password: '123'
    }
    cy.preencher(teste.email, teste.password)
    cy.submitBtn("Acessar")
    cy.verificarMsgToast("Credenciais inválidas. Verifique seu e-mail e senha.")
  })
  it('Não deve logar quando dados em branco', () =>{
    cy.submitBtn("Acessar")
    cy.verificarMsgErro('O campo de e-mail é obrigatório')
    cy.verificarMsgErro('O campo de senha é obrigatório')
  })
   
})