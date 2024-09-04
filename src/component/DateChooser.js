export class DateChooser{
    constructor() {
        this.dateChooser = document.createElement("input");
        this.dateChooser.type = "date";
    }


    setTextField(container){
        if (container) {
            container.appendChild(this.dateChooser)
        }
    }

}