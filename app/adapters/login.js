import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default JSONAPIAdapter.extend({
    host:'https://localhost:44327/EmployeeDataService.asmx/getAllUsers'
});