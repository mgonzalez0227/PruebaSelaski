export class LoginPage {
  // Selectores de los campos de dígitos del PIN
  digit1 = 'input#digit1';
  digit2 = 'input#digit2';
  digit3 = 'input#digit3';
  digit4 = 'input#digit4';
  // Selector del botón de ingresar
  enterBtn ='button[type="submit"].bg-\\[\\#1e3a8a\\]'

  // Alternativamente, si prefieres usar formcontrolname:
  // digit1 = 'input[formcontrolname="digit1"]';
  // digit2 = 'input[formcontrolname="digit2"]';
  // digit3 = 'input[formcontrolname="digit3"]';
  // digit4 = 'input[formcontrolname="digit4"]';

  // Navega a la URL de login
  irUrl(){
    cy.visit('https://www.selaski.com/public/reports/shared?token=20b8140da2164226f7d1ab0626547985903b');
  }

  // Ingresa el código PIN en los campos correspondientes
  ingresarCodigo(codigo) {
    const [d1, d2, d3, d4] = codigo.split('');
    cy.get(this.digit1).type(d1);
    cy.get(this.digit2).type(d2);
    cy.get(this.digit3).type(d3);
    cy.get(this.digit4).type(d4);
  }

  // Método alternativo para visitar la raíz del sitio
  visit() {
    cy.visit('/')
  }

  // Método alternativo para ingresar un usuario (no usado en este flujo)
  InsertCode(username) {
    this.elements.usernameInput().type(username)
  }

  // Hace clic en el botón de ingresar
  clickIngresar() {
    cy.get(this.enterBtn).click()
  }

  // Método alternativo para login con usuario y contraseña (no usado en este flujo)
  submitLogin(username, password) {
    this.typeUsername(username)
    this.typePassword(password)
    this.clickLogin()
  }
}

export default LoginPage