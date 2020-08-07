import Model from '@ember-data/model';

export default Model.extend({
    email:attr('string'),
    password:attr('string'),

    get email(){
        return `${this.email}`;
    }
});
