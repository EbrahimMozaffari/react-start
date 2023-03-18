import './ExpenseItem.css'
import ExpenseDate from "./expense/ExpenseDate";
function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 2 ,28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.55;

    return (
        <div className="ex-item">
            <ExpenseDate  date={props.date} />
            <div>
                {props.title}
            </div>
                <div className="ex-item1__price">${props.amount}</div>

        </div>
    )
}

export default ExpenseItem;