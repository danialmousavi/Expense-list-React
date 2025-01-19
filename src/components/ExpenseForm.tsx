  import categories from "./Categories";
  import z from 'zod'
  import { useForm } from 'react-hook-form';
  import { zodResolver } from "@hookform/resolvers/zod";

  const schema=z.object({
    description:z.string().min(3,{message:'description should be at least 3 char'}).max(50),
    amount:z.number({invalid_type_error:'Amount is Requierd'}).min(18).max(100_000),
    category:z.enum(categories,{
      errorMap:()=>({message:'category is requierd!'})
    })
  })
  type ExpenseFormData=z.infer<typeof schema>
  interface props{
    onSubmit:(data:ExpenseFormData)=>void;
  }
  const ExpenseForm = ({onSubmit}:props) => {
  const {register,handleSubmit,formState:{errors},reset}= useForm<ExpenseFormData>({resolver:zodResolver(schema)})
    return (
      <>
        <form action="" onSubmit={handleSubmit(data=>{
          onSubmit(data);
          reset()
        })}>
          <div className="mb-2 ">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input {...register('description')} id="description" type="text" className="form-control " />
            {errors.description&&<p className="text-danger">{errors.description.message}</p>}
          </div>
          <div className="mb-2">
            <label htmlFor="amount" className="form-label">
              amount
            </label>
            <input {...register('amount',{valueAsNumber:true})} id="amount" type="number" className="form-control" />
            {errors.amount&&<p className="text-danger">{errors.amount.message}</p>}

          </div>
          <div className="mb-2">
            <label htmlFor="category" className="form-label">
              category
            </label>
            <select {...register('category')} name="" id="category" className="form-select">
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
              
            </select>
            {errors.category&&<p className="text-danger">{errors.category.message}</p>}
          </div>
          <button className="btn btn-primary px-5 py-2" type="submit">
            submit
          </button>
        </form>
      </>
    );
  };
  export default ExpenseForm;
