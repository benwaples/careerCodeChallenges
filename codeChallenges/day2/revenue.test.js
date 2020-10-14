const revenue = require('./revenue');
const transactions = require('./data/transactions');

describe('revenue function', () => {
  it('should takes transactions and returns one object of the daily revenue', () => {
    const actualRevenue = revenue(transactions);

    expect(actualRevenue).toEqual(expect.objectContaining({ 'Fri Jul 12 2019': 7 }));
  });
});

