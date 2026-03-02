class Validator {
    constructor(config) {

        this.elementsConfig = config;
        this.errors = {};

        this.generateErrorsObject();
        this.inputListener();
    }

    generateErrorsObject() {
        for(let field in this.elementsConfig) {
            this.errors[field] = [];
        }
    }

    inputListener() {
        let inputSelector = this.elementsConfig;

        for(let field in inputSelector) {
            let selector = `input[name="${field}"]`;
            let el = document.querySelector(selector);

            el.addEventListener('input', this.validate.bind(this));
        }
    }

    validate(e) {
        let elFields = this.elementsConfig;

        let field = e.target;
        let fieldName = field.getAttribute('name');
        let fieldValue = field.value;

        this.errors[fieldName] = [];

        if(elFields[fieldName].required) {
            if(fieldValue === '') {
                this.errors[fieldName].push('Polje je prazno');
            }
        }

        if(elFields[fieldName].email) {
            if(!this.validateEmail(fieldValue)) {

            }
        }
    }

    validateEmail(email) {
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        return true;
    }

    return false;
    }
}