export  function Todos({todos}){
    
    return <div>  
        <div>
            <h1>{todos[0].title}</h1>
            <h2>{todos[0].description}</h2>
         
         
            <button>{todos[0].completed==true? "Completed": "Mark as Complete"}</button>
        

        </div>
            {todos.map(function(todo){
                return  <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true? "Completed": "Mark as Complete"}</button>
                     
                </div>
            })}
        
          
        </div>
    
}



// Todos.jsx file in  forntend >component > Todos.js