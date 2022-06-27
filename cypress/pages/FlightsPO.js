class FlightsPO {
  navigateTo() {
    cy.visit('../../site/flights.html');
  }

  setOrigin(origin) {
    cy.get('#flight-from').select(origin);
  }

  setDestination(destination) {
    cy.get('#flight-to').select(destination);
  }

  setDepartingDate(month, day, year) {
    // Not the cleanest way, but it looks more readable on the tests.
    cy.get('#departing').type(`${year}-${month}-${day}`);
  }

  setReturningDate(month, day, year) {
    cy.get('#returning').type(`${year}-${month}-${day}`);
  }

  setTravelers(numTravelers) {
    cy.get('#travelers').select(numTravelers);
  }

  search() {
    // TODO: This needs an ID.
    // TODO: Change to xpath? //button[.='Search'], This would be a bit less flaky.
    cy.contains('Search').click();
  }
}

export default FlightsPO;
