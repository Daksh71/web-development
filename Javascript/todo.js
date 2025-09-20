let todo = [];

let request = prompt("Please enter a task:");

while(true) {
    if(request == "quit") {  
        console.log("quitting app");
        break;
    }
    else if(request == "add") {  
        let task = prompt("Please enter a task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(request == "list") {  
        for(i=0;i<todo.lenght;i++)
        console.log(i, todo[i]);
    }
    else if(request == "delete") { 
        let index = prompt("Please enter the index of the task you want to delete");
        todo.splice(index, 1);
        console.log("task deleted");
    }
    
    request = prompt("What would you like to do? (add/list/delete/quit)");
}