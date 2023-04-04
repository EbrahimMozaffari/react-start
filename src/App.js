// import logo from './logo.svg';
import './App.css';
import Card from "./components/expense/Card";
import NewExpense from "./components/newExpense/newExpense";
import Expenses from "./components/expenses";
// import {useState} from "react";

const App = () => {
    // const [expenses,setExpenses] = useState([
    //     {id: 'dd', title: 'car insurance', amount: 255.2, date: new Date(2021, 5, 12)},
    //     {id: 'ef', title: 'carwash', amount: 156.3, date: new Date(2021, 6, 24)},
    //     {id: 'fg', title: 'car tire', amount: 485.6, date: new Date(2021, 1, 10)},
    //     {id: 'gh', title: 'car ghazgholang', amount: 752.9, date: new Date(2021, 12, 1)},
    // ])
    const expensesData = [
        {id: 'dd', title: 'car insurance', amount: 255.2, date: new Date(2021, 5, 12)},
        {id: 'ef', title: 'carwash', amount: 156.3, date: new Date(2021, 6, 24)},
        {id: 'fg', title: 'car tire', amount: 485.6, date: new Date(2021, 1, 10)},
        {id: 'gh', title: 'car ghazgholang', amount: 752.9, date: new Date(2021, 12, 1)},
    ]

    const addExpenseHandler = expense =>{
        console.log('In App.js',expense)
        expensesData.push(expense)
    }

    return (
        <div className="App">
            {/*<header className="App-header">*/}


            {/*</header>*/}
            <Card className="App-header">
                <NewExpense onAddExpenseHandler={addExpenseHandler} />
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                <p className="myFont">تست فونت</p>
                <p className="kalameh_black">تست فونت</p>
                <Expenses expensesData={expensesData} />

                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </Card>
        </div>
    );
}

export default App;
