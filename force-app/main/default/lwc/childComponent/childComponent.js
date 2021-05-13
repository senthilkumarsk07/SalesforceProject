import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

    /*name = null;

    data = [];

    studentName = null;
    
    @api
    set textValue(value) {
        console.log('value ::: ',);
        this.name = value;
    }
    
    get textValue() {
        console.log('getter ::: ');
        return this.name;
    }

    @api
    set textValue1(value) {
        console.log('value ::: ', value);
        this.name = value;
    }
    
    get textValue() {
        console.log('getter ::: ');
        return this.name;
    }

    get studentName() {
        console.log('getter studentName ::: ');
        return 'Irfan';
    }*/
    @api
    set value(value) {
        console.log('setter in child :::');
    }

    get value() {
        console.log('getter in child :::');
    }

    constructor() {
        super();
        console.log('constructor child :::');
    }

    connectedCallback() {
        console.log('connectedcallback child :::');
    }

    renderedCallback() {
        console.log('renderedcallback child :::');
    }

    disconnectedCallback() {
        console.log('disconnectedcallback parent :::');
    }

    get userNameChild() {
        console.log('get method child :::');
    }

}