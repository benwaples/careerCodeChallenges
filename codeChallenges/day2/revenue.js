const revenue = (transactions) => {

  const revenue = {};

  transactions.map(transaction => {
    const dateObject = new Date(transaction.timestamp);
    const mungedDate = dateObject.toDateString();

    if(revenue[mungedDate]) {
      return revenue[mungedDate] += transaction.price; 
    } else { 
      return revenue[mungedDate] = transaction.price;
    }

    
  });
  
  return revenue;
};

module.exports = revenue;
