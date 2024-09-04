export class TextField{
    constructor(placeholder ) {
        this.textField = document.createElement("input");
        this.textField.placeholder = placeholder;
    }

    setTextField(container){
        if (container) {
          container.appendChild(this.textField)
        }
    }

}