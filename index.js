import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';
import uuidv4 from 'uuid/v4';

const LOCALSTORAGEKEY = 'itemsApp.items';

const App = () => {
    const [items, setItems] = useState([]);
    const itemName = useRef();

    function handleAddItem(e) {
       const name = itemName.current.value
       if (name === "") {
           return;
       }
       setItems(prevItems => {
           return [...prevItems, {id: uuidv4(), name: name, deleted: false}]
       })
       itemName.current.value = null;
    }

    function selectedItem(id){
         const newItems =items.filter(item => item.id !== id);
         setItems(newItems)
        }

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY))
        if (storedItems) setItems(storedItems)
    }, [])

    useEffect(() => {
     localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(items))
    }, [items]) 

    return (
        <div>
          <input ref={itemName} type="text" />
          <button onClick={handleAddItem}> Add Item </button>
          <ListItem items= {items} selectedItem= {selectedItem}/>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);