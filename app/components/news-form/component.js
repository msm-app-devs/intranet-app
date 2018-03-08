import Ember from 'ember';

export default Ember.Component.extend({
  data: {},

    actions : {
        test(){
            const data = this.get('data');
            // this.send('createNews',data);
            // console.log(data);
            this.set('data.title',null);
            this.set('data.author',null);
            this.set('data.date',null);
            this.set('data.message',null);
        }
    }
});
