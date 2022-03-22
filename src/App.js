import React, {useEffect, useState} from 'react'
import './App.css';
import Item from './Item';

function App() {
  const[list,setList]=useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((data) => data.json())
      .then((items) => {
        setList(items);
      });

  }, []);

  console.log(list);
  return (
    <div className="App">
            <h1>Create API</h1>
            {
              list.map(item=>{
                return (
                  <Item key={item.id} id={item.id} albumId={item.albumId} title={item.title} thumbnailUrl={item.thumbnailUrl} />
                )
              })
            }
    </div>
  );
}

export default App;
