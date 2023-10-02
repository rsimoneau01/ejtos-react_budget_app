import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import setCost from './AllocationForm'
import Budget from './Budget';
const Remaining = () => {
    const { expenses, budget, currency, setCost } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;

