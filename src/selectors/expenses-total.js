export default (expenses) => {
  return expenses
    .map(e => e.amount)
    .reduce((sum, a) => sum + a, 0);
};

// export default (expenses) => {
//   if (expenses.length === 0) {
//     return 0;
//   }
//   else {
//     return expenses
//       .map(e => e.amount)
//       .reduce((sum, a) => sum + a);
//   };
// };