function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()
    return (
        <>
            <div>Month : {month}</div>
            <div>Day : {day}</div>
            <div>Year : {year}</div>
        </>

)
}

export default ExpenseDate;