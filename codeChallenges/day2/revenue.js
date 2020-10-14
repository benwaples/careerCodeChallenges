const revenue = (transactions) => {

  const revenue = {};

  transactions.map(transaction => {
    const dateObject = new Date(transaction.timestamp);
    const mungedDate = dateObject.toDateString();

    revenue[mungedDate] ? (revenue[mungedDate] + transaction.price) : (revenue[mungedDate] = transaction.price);
      
  });

  return revenue;
};

module.exports = revenue;
