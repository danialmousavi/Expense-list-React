import categories from "./Categories";
interface props{
    onSelectCategory:(category:string)=>void;
}
const ExpenseFilter=({onSelectCategory}:props)=>{

    return(
        <>
        <select name="" id=" " className="form-select" onChange={(e)=>onSelectCategory(e.target.value)}>
            <option value="">All</option>
            {categories.map(category=><option key={category} value={category}>{category}</option>)}
        </select>
        </>
    )
}
export default ExpenseFilter;