
//tasks should be sorted.

function intervalScheduling(tasks){
    var newTasks =  []
    newTasks.push(tasks[0]);
    var comparation = tasks[0].end;
    for (let index = 1; index < tasks.length; index++) {
        if (tasks[index].start >= comparation) {
             newTasks.push(tasks[index]);
             comparation = tasks[index].end;
        } 
    }