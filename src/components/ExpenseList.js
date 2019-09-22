import React from 'react';
import Item from './ExpenseItem';
import { MdDelete } from 'react-icons/md';
const ExpenseList = ({expenses, handleEdit, handleDelete, clearItems}) => {
    return (
        <>
            <ul className="list">
                {
                    expenses.map((expense)=>{
                        return <Item 
                        handleDelete={handleDelete} 
                        handleEdit={handleEdit} 
                        key={expense.id} expense={expense} />;
                    })
                }
            </ul>
            {
                expenses.length > 0 && 
                <button className="btn" onClick={()=>clearItems()}>
                    clear expenses 
                    <MdDelete className="btn-icon" />
                </button> 
            }            
        </>
    )
}

export default ExpenseList;