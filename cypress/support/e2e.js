// Importa el plugin de Allure para generación de reportes
// Este archivo se ejecuta antes de cada archivo de prueba
// Puedes usarlo para importar comandos personalizados:
import './commands.js';
import '@shelex/cypress-allure-plugin';
// Importa el soporte para selectores XPath en Cypress
require('cypress-xpath');

// Maneja las excepciones no capturadas para evitar que fallen los tests por errores inesperados de la app
Cypress.on('uncaught:exception', () => {
  return false; // Previene que Cypress falle el test ante excepciones no controladas
});