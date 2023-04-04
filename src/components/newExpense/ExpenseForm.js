import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle,setTitle] = useState('')
    const [enteredAmount,setAmount] = useState('')
    const [enteredDate,setDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
       // console.log("title changed", event.target.value)
        setTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }

    const AmountChangeHandler = (event) => {
        setAmount(event.target.value)
     //   console.log("setAmount changed", event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }
    const DateChangeHandler = (event) => {
        console.log(" setDate", event.target.value)
        setDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setTitle('')
        setAmount('')
        setDate('')
        //console.log("expenseData",expenseData)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__input">
                <div className="col-6">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="col-6">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={AmountChangeHandler}/>
                </div>
                <div className="col-6">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense-actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;