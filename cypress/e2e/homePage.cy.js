import { HomePage } from "../pageObjects/homePage";
import { LoginPage } from "../pageObjects/loginPage";
import datosPin from "../fixture/datosPin.json";
import embarques from "../fixture/embarques.json";

// Instanciación de las páginas usando el patrón Page Object Model
const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Test Home Page', () => {
    // Antes de cada prueba, realiza el flujo de login
    beforeEach(() => {
        loginPage.irUrl(); // Navega a la URL de login
        loginPage.ingresarCodigo(datosPin.phines.pincode); // Ingresa el código PIN desde el fixture
        loginPage.clickIngresar(); // Hace clic en el botón de ingresar
    });

    it('validar filtrar embarques', () => {
        // Hace clic en el campo de filtro de texto
        homePage.clickElement(homePage.textFilter);

        // Hace clic en el botón de filtro
        homePage.clickElement(homePage.filter);

        // Selecciona la opción de embarques
        homePage.seleccionarEmbarques();

        // Ingresa el número de embarque desde el fixture
        homePage.ingresarTexto(embarques.numeroEmbarques.numeroEmbarque);

        // Valida que los resultados correspondan al número de embarque ingresado
        homePage.validarResultados(embarques.numeroEmbarques.numeroEmbarque);
    });  
});