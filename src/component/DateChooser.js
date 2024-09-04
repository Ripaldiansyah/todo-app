export class DateChooser{
    constructor(placeholder ) {
        this.dateChooser = document.createElement("input");
        this.dateChooser.type = "date";
    }


    setTextField(container){
        if (container) {
            container.appendChild(this.dateChooser)
        }
    }

}