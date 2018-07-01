import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

// NB Change type of ADAPTER to be the same as in eployees adapter - RESTAdapter
// NB Delete findALl()
// NB Delete findRecord()
// export default DS.Adapter.extend({
export default DS.Adapter.extend(DataAdapterMixin, {
    findAll() {
    return [
        {
            id: '1',
            optionName: 'Female'
        },
        {
            id: '2',
            optionName: 'Male'
        }
    ]
    },
    findRecord() {
        return {
            id: '1',
            optionName: "Female"
        };
    }
});
