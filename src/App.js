import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/expense/Card";

const App = () => {
    const expenses = [
        {id: 'dd', title: 'car insurance', amount: 255.2, date: new Date(2021, 5, 12)},
        {id: 'ef', title: 'carwash', amount: 156.3, date: new Date(2021, 6, 24)},
        {id: 'fg', title: 'car tire', amount: 485.6, date: new Date(2021, 1, 10)},
        {id: 'gh', title: 'car ghazgholang', amount: 752.9, date: new Date(2021, 12, 1)},
    ]

    return (
        <div className="App">
            {/*<header className="App-header">*/}


            {/*</header>*/}
            <Card className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                <p className="myFont">تست فونت</p>
                <p className="kalameh_black">تست فونت</p>
                <Card className="mainCard">
                    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
                    <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
                    <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
                    <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
                </Card>

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
