class FlightsResultsPO {
  // TODO: When we migrate to TS, restrict inputs to sortPricesBy method to an Enum with this data.
  sortCriteria = {
    PriceAscending: 'Price ascending',
    PriceDescending: 'Price descending',
  };

  sortPricesBy(sortBy) {
    // Definitively NOT the best way to wait for this element.
    // TODO: Maybe use this wait as a validation in a spec?
    // TODO: Set a global timeout depending on the app's stability
    cy.get('#sort', { timeout: 15000 }).select(sortBy);
  }

  getPricesList() {
    let results = [];
    cy.get('.price', { timeout: 15000 })
      .each(($el) => {
        results.push($el.text().split('$')[1].trim());
      })
      .then(() => {
        cy.wrap(results).as('pricesList');
      });
  }
}

export default FlightsResultsPO;
