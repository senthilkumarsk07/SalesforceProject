import { LightningElement, api } from 'lwc';

export default class ParentLifeCycleComponent extends LightningElement {


    @api textValue = 'Salesforce';

    get userName() {
        console.log('get method parent :::');
        return null;
    }
    
    constructor() {
        super();
        const buttonClass = this.template.querySelector('.buttonClass');
        console.log('buttonClass ::: ', buttonClass);
        console.log('textValue in constructor ::: ', this.textValue);
        console.log('constructor parent :::');
    }

    connectedCallback() {
        console.log('connectedcallback parent :::');
        const buttonClass = this.template.querySelector('.c-comp');
        console.log('textValue in connected::: ', this.textValue);
        console.log('buttonClass in connectedcall back::: ', buttonClass);
    }

    renderedCallback() {
        console.log('renderedcallback parent :::');
        const buttonClass = this.template.querySelector('.buttonClass');
        console.log('buttonClass in renderedcall back::: ', buttonClass);
    }

    disconnectedCallback() {
        console.log('disconnectedcallback parent :::');
    }
}