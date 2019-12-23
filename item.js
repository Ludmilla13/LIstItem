import React from 'react';

export default function item({item, selectedItem}) {
    function handleDeleteItem() {
        selectedItem(item.id)
      }
    return (
        <ul>
           <li>
             <button onClick={handleDeleteItem}>x</button> 
             <span> {item.name}</span>  
           </li>
        </ul>
    );
}