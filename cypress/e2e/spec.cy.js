import { expect } from 'chai';
import FlightsPO from '../pages/FlightsPO';
import FlightsResultsPO from '../pages/FlightsResultsPO';
describe('empty spec', () => {
  let flightsPO;
  let resultsPO;

  before('Setup', () => {
    flightsPO = new FlightsPO();
    resultsPO = new FlightsResultsPO();
  });

  it('Navigate to Flights Page and Input Flight Data', () => {
    flightsPO.navigateTo();
    flightsPO.setOrigin('Merida');
    flightsPO.setDestination('La Habana');
    flightsPO.setDepartingDate('06', '28', '2022');
    flightsPO.setReturningDate('06', '30', '2022');
    flightsPO.search();
    resultsPO.sortPricesBy(resultsPO.sortCriteria.PriceAscending);
    resultsPO.getPricesList();
    cy.get('@pricesList').then((prices) => {
      let actualPrices = [...prices];
      let sortedPrices = prices.sort();
      expect(actualPrices).to.deep.eq(sortedPrices);
    });
  });
});
