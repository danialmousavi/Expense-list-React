import { useState } from "react"
import ExpenseList from "./components/ExpenseList"
import ExpenseFilter from "./components/ExpenseFilter"
import ExpenseForm from "./components/ExpenseForm";
function App() {
  const[selectCategory,setSelectCategory] = useState('')
  const [expenses,setExpenses] = useState([
    {id:1,description:'Rent',amount:1000,category:'Insurance'},
    {id:2,description:'Grocery',amount:100,category:'Food'},
    {id:3,description:'Internet',amount:50,category:'Utilities'},
    {id:4,description:'Car Insurance',amount:200,category:'Utilities'},
    {id:5,description:'Health Insurance',amount:200,category:'Insurance'},
  ]);
  const filteredExpenses = selectCategory?expenses.filter(e=>e.category===selectCategory):expenses;
  return (
    <>
      <div className="container  mt-5 text-center">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
          <div className="mb-5">
            <ExpenseForm onSubmit={expense=>setExpenses([...expenses,{...expense,id:expenses.length+1}])}/>
            </div>
            <div className="mb-5">
              <ExpenseFilter onSelectCategory={category=>setSelectCategory(category)}/>
            </div>
            <ExpenseList expenses={filteredExpenses} onDelete={(id)=>setExpenses(expenses.filter(e=>e.id!==id))}/>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
