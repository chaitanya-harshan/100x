/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
  let index;

function calculateTotalSpentByCategory(transactions) {
  let expenditure = [];
  let categories = [];


  for (let i = 0; i < transactions.length; i++) {
    if( i===0 ){
      expenditure.push( {"category": transactions[0].category, "totalSpent": 0 } );
    }
    if( searchArr(transactions[i].category, expenditure) ){
      expenditure[index].totalSpent += transactions[i].price;
    }
    else{
      expenditure.push( {"category": transactions[i].category, "totalSpent": transactions[i].price} );
    }
  }
  return expenditure;
}

function searchArr(element, array){
  for (let i = 0; i < array.length; i++) {
    if( element === array[i].category ){
      index = i;
      return true;
    }
  }
  return false
}

module.exports = calculateTotalSpentByCategory;

// const transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
// ];

// const result =
//   calculateTotalSpentByCategory(transactions);