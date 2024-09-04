export class Validation {
    inputValidation(input, date){
        return !(input === '' || date === '');
    }
}