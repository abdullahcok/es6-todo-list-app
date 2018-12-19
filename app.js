//define ui vars
const form  = document.querySelector('#task-form');

//add task events
form.addEventListener('submit', function(e){
      const taskInput = document.querySelector('#task');
            if (taskInput.value === '') {
                alert('Add a thing to do');
            }else {
                //create li element
                const li = document.createElement('li');

                //add class
                li.className = 'collection-item';

                //create text node and append to li
                li.appendChild(document.createTextNode(taskInput.value));

                //create link
                const link = document.createElement('a');

                //add class
                link.className = 'delete-item secondary-content';

                //add icon html
                link.innerHTML = '<i class="fa fa-remove"> </i>';

                //append the link to li
                li.appendChild(link);

                //append the li to ul
                const taskList = document.querySelector('.collection');
                taskList.appendChild(li);

                //clear input
                taskInput.value;
            }

      e.preventDefault();
})

    //remove task
    const taskList = document.querySelector('.collection');
    taskList.addEventListener('click', removeTask);

    function removeTask(e){
          if(e.target.parentElement.classList.contains
              ('delete-item')){
                    if(confirm('Are you sure?')){
                          e.target.parentElement.remove();
                    }
              }
    }


    //filter task
    const filter = document.querySelector('#filter');
    filter.addEventListener('keyup', filterTask);

    function filterTask(e){
        const text = e.target.value.toLowCase();

        document.querySelectorAll('.collection-item')
                          .forEach(function(task){
                                          const item = task.firstChild.textContent;
                          if (item.toLowerCase().indexOf(text)!= -1){
                                task.style.display = 'block';
                          }else{
                                  task.style.display = 'none';
                          }
        });
    }

    //clear task
    const clearBtn = document.querySelector('.clear-task');
    clearBtn.addEventListener('click', clearTask);

    function clearTask(){
            const taskList = document.querySelector('.collection');
            taskList.innerHTML = ''; 
    }
