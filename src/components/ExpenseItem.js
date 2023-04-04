import React, {useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from "./expense/ExpenseDate";
import Card from "./expense/Card";
function ExpenseItem(props) {
    const [expenseTitle,setTitle] = useState(props.title);
    // const expenseDate = new Date(2021, 2 ,28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.55;
     //let expenseTitle = props.title;

    const changeTitle = () => {
        setTitle('updated');
        console.log("hi",expenseTitle)
        //expenseTitle = 'change titless'
    }

    return (
        <Card className="ex-item">
            <ExpenseDate  date={props.date} />
            <div>
                {expenseTitle}
            </div>
                <div className="ex-item1__price">${props.amount}</div>
            <button onClick={changeTitle}>Change Title</button>

        </Card>
    )
}

export default ExpenseItem;