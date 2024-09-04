export class Button {
    constructor(name, action) {
        this.button = document.createElement('button');
        this.button.textContent = name;
        this.button.onclick = action;
    }


    static setButton(buttons, container) {
        for (const button of buttons) {
            const tempButton = new Button(button.name, button.action);
            if (container) {
                container.appendChild(tempButton.button)
            }
        }
    }
}