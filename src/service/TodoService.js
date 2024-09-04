import {todoData} from "../data/todoData.js";
import {TODO_DATA} from "../global/constants.js";
import {Button} from "../component/Button.js";

export class TodoService{

    createButton(text, onClick) {
        const button = new Button(text, onClick);
        return button.button;
    }


    createTableRow(todo) {
        const tableRow = document.createElement("tr");
        for (const todoKey in todo) {
            const tableData = document.createElement('td');
            tableData.textContent = todo[todoKey];
            tableRow.appendChild(tableData);
        }
        const actionCell = document.createElement('td');
        const deleteButton = this.createButton("Hapus", () => this.deleteTodo(todo.id));
        const editButton = this.createButton("Ubah", () => this.updateTodo(todo.id));
        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
        tableRow.appendChild(actionCell);
        return tableRow;
    }


    readTodo() {
        TODO_DATA.innerHTML = '';
        for (const todo of todoData) {
            const tableRow = this.createTableRow(todo);
            TODO_DATA.appendChild(tableRow);
        }
    }


    deleteTodo(id) {
        const index = todoData.findIndex(todo => todo.id === id);
            todoData.splice(index, 1);
        this.readTodo();
    }


    updateTodo(id) {

    }




}