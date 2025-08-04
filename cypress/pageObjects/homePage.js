export class HomePage {

  // Selectores de elementos de la página principal
  titleHomePage = 'h1.font-extrabold.text-lg'
  textFilter = 'div.filter-tab p'
  filter = 'span.items-center > .onclick_emitter > app-atom-select-input > .select-menu > .flex > .font-medium'
  seleccionarEmbarque = 'div.search-options span.flex > p:contains("Embarque")'
  embarqueXpath = "//div[contains(@class, 'select-btn')]//span[normalize-space(.)='Embarque']"
  imputBusqueda = 'input[placeholder="Escribe aquí tu búsqueda"]'
  textoFilaUno = 'div.table-list app-molecule-table-first-element:nth-of-type(1) p[title="Prueba 1-02"]'
  textoFilaDos  = 'div.table-list app-molecule-table-first-element:nth-of-type(2) p[title="Prueba 1-01"]'

  // Valida que el título del reporte esté visible y contenga el texto esperado
  validateReportTitle() {
    cy.get('h1.font-extrabold.text-lg')
      .should('be.visible')
      .and('contain.text', 'Reporte de Embarques');
  }

  // Hace clic en un elemento recibido como parámetro
  clickElement(textFilter) {
    cy.get(textFilter).click();
  }

  // Hace clic en la opción "Embarque" usando XPath
  clickEmbarque() {
    cy.xpath("//div[contains(@class, 'select-menu') and contains(@class, 'active')]//span[normalize-space(text())='Embarque']").should('have.length', 1).click();
  }

  // Selecciona la opción "Embarque" en el filtro de búsqueda
  seleccionarEmbarques() {
    cy.get('div.search-options p')
      .contains('Embarque')
      .should('be.visible')
      .click({ force: true });
  }

  // Ingresa texto en el campo de búsqueda y presiona Enter
  ingresarTexto(texto) {
    cy.get(this.imputBusqueda)
      .should('be.visible')
      .type(`${texto}{enter}`, { force: true });
  }

  // Valida que los resultados de la tabla contengan el texto buscado
  validarResultados(textoBuscado) {
    const filas = [this.textoFilaUno, this.textoFilaDos];
    filas.forEach((fila) => {
      cy.get(fila)
        .should('be.visible')
        .and('contain.text', textoBuscado);
    });
  }

}