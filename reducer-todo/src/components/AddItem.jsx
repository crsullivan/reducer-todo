import React from 'react'

function AddItem(props){
    console.log(props.completed)
     return(
          <div key={props.id} onClick={() => props.toggleTask(props.id)}>
               <p>{props.item}</p>
          </div>
     )
}
export default AddItem