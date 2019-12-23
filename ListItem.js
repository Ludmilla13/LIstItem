import React from 'react';
import Item from './item';

export default function ListItem({items, selectedItem}) {
    return (
       items.map(item => {
           return  <Item key={item.id} item = {item} selectedItem={selectedItem}/>
       })
    );
}