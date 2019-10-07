import {FormBuilderComponent} from '../../node_modules/angular-formio/components/formbuilder/formbuilder.component';

angular.module('flowableModeler').directive(
    'form-builder',
    downgradeComponent({component: FormBuilderComponent})
);
console.log('Directive Fired');
