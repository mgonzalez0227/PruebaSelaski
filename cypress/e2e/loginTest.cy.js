import { HomePage } from '../pageObjects/homePage';
import { LoginPage } from '../pageObjects/loginPage';
import datosPin from '../fixture/datosPin.json';

// Instanciación de las páginas usando el patrón Page Object Model
const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Test Login Page', () => {

  it('validar Login exitoso', () => {
    // Navega a la URL de login
    loginPage.irUrl();

    // Ingresa el código PIN obtenido del fixture
    loginPage.ingresarCodigo(datosPin.phines.pincode);

    // Hace clic en el botón de ingresar
    loginPage.clickIngresar();

    // Valida que el título del reporte esté presente en la página principal
    homePage.validateReportTitle();
  });      

});