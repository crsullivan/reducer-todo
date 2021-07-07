import React from 'react'
import AddItem from './AddItem'

function ToDo(props){
     const toDos = props.state
     const toggle = props.toggleTask
     return(
          <div>
               {toDos.map(item => {
                    return(
                         <AddItem key={item.id} {...item} toggleTask={toggle}/>
                    )
               })
               }
          </div>
     )
}
export default ToDo;