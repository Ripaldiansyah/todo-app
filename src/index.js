import {Button} from "./component/Button.js";
import {colorData} from "./data/colorData.js";
import {COLOR_CONTAINER, REDIRECT_CONTAINER, TODO_CONTAINER, TODO_DATA} from "./global/constants.js";
import {redirectData} from "./data/redirectData.js";
import {TextField} from "./component/TextField.js";
import {DateChooser} from "./component/DateChooser.js";
import {Validation} from "./validation/Validation.js";
import {todoData} from "./data/todoData.js";
import {TodoService} from "./service/TodoService.js";

const  todoField = new TextField("Enter todo... " );
const  dateChooser = new DateChooser("Enter todo... " );
const validation = new Validation();
const submitButton = new Button("Submit",()=>{
    const todoValue = todoField.textField.value;
    const dateValue = dateChooser.dateChooser.value;
    handleSubmit(todoValue, dateValue)
})

Button.setButton(colorData, COLOR_CONTAINER)
Button.setButton(redirectData, REDIRECT_CONTAINER)
todoField.setTextField(TODO_CONTAINER)
dateChooser.setTextField(TODO_CONTAINER)
TODO_CONTAINER.appendChild(submitButton.button)
const todoService = new TodoService()

let id = 1;
function handleSubmit(todoValue, dateValue){
    const valid = validation.inputValidation(todoValue,dateValue);
    if (!valid){
        return alert("Semua input wajib diisi")
    }

    const todo = {
        id : id,
        todo : todoValue,
        date : dateValue
    }
    id ++
    todoData.push(todo)
    clearField()
    todoService.readTodo();
}

function clearField(){
    todoField.textField.value = null
    dateChooser.dateChooser.value = null
}


























