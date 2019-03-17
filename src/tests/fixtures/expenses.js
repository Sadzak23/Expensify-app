import moment from 'moment'

export default [{
  id: "1",
  description: "Water bill",
  note: "Last months bill",
  amount: 1520,
  createdAt: moment(0).subtract(2, "days")
},
{
  id: "2",
  description: "Gas bill",
  note: "",
  amount: 2500,
  createdAt: 0
},
{
  id: "3",
  description: "Rent",
  note: "Last months rent", 
  amount: 2000,
  createdAt: moment(0).add(2, "days").valueOf()
}];