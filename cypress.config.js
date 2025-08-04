// Importa el escritor de reportes Allure para Cypress
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  // Habilita la grabación de video de las pruebas
  video: true,
  // Toma capturas de pantalla automáticamente si una prueba falla
  screenshotOnRunFailure: true,
  // Define el tamaño del viewport del navegador
  viewportWidth: 1500,
  viewportHeight: 800,
  // Configura los reintentos de pruebas fallidas (2 en modo run, 0 en modo open)
  retries: { runMode: 2, openMode: 0 },
  e2e: {
    // Configuración de eventos de Node para Cypress
    setupNodeEvents(on, config) {
      // Inicializa el plugin de Allure para generación de reportes
      allureWriter(on, config);
      return config;
    },
    // URL base para las pruebas E2E
    baseUrl: 'https://www.selaski.com/public/reports/shared?token=20b8140da2164226f7d1ab0626547985903b',
    // Patrón de archivos de especificación de pruebas
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js'
  },
};