import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';

export default class MyFirstLwcComponent extends LightningElement {
    firstName = '';
    lastName = 'Kumar';

    stringValue = '';

    @track record = {};
    @track dateProperty;


    connectedCallback() {
        console.log('connected call back ::: ');
    }

    get studentMailId() {
        console.log(' getter in studentMailid ::: ');
        if (this.firstName !== '') return 'Success';
    }

    /*@api apiMethod() {
        console.log('api method called :::');
        this.template.querySelector('c-child-component').apiMethod;
    }
    
    objectProperty = {name: '', value: ''};

    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
    wiredAccount({ error, data }) {
        console.log('wired method ::: ');
        if (data) {
            this.record = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;

            this.record = undefined;
        }
        console.log('wired method with data ::: ', JSON.parse(JSON.stringify(this.record)));
    }*/

    handleChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
    }



    handleButton() {
        /*console.log('button click ::: ');
        this.objectProperty.value = 'LC';
        this.dateProperty = new Date();*/

        console.log('account :::: ', JSON.parse(JSON.stringify(this.accountRecord)));
    }

    updateButton() {
        console.log('date ::: ', JSON.parse(JSON.stringify(this.dateProperty)));
        this.dateProperty.setHours(10);
    }
}