# Cypress POM Project

Este proyecto utiliza Cypress para realizar pruebas automatizadas de una aplicación web, implementando el patrón de diseño Page Object Model (POM) para una mejor organización y mantenimiento del código de prueba.

## Estructura del Proyecto

```
cypress-pom-project
├── cypress
│   ├── e2e
│   │   └── *.cy.js                # Archivos de pruebas de Cypress.
│   ├── pageObjects
│   │   └── *.js                   # Clases que representan páginas de la aplicación.
│   ├── fixture(s)
│   │   └── *.json                 # Datos de prueba (fixtures).
│   └── support
│       └── commands.js            # Comandos personalizados de Cypress.
├── cypress.config.js              # Configuración de Cypress.
├── package.json                   # Configuración de npm y dependencias.
├── allure-results/                # Resultados de las pruebas para Allure.
├── allure-report/                 # Reporte generado por Allure.
└── README.md                      # Documentación del proyecto.
```

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias necesarias.

## Ejecución de Pruebas

Para ejecutar las pruebas en modo interactivo:

```
npm run test
```

Para ejecutar las pruebas en modo headless:

```
npm run test:headless
```

## Reportes Allure

Genera el reporte Allure después de ejecutar las pruebas:

```
npm run allure:report
```

Abre el reporte Allure en tu navegador:

```
npm run allure:open
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia