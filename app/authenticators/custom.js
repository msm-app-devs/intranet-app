import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
    tokenEndpoint: 'http://q1q1.eu/employees/token',
    restore: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },

    authenticate: function() {
        return new Ember.RSVP.Promise((resolve, reject) => {
            Ember.$.ajax({
                url: this.tokenEndpoint,
                type: 'POST',
                data: JSON.stringify({
                    username: arguments[0],
                    password: arguments[1]
                }),
                contentType: 'application/json;charset=utf-8',
                dataType: 'json'
            }).then(function(response) {
                Ember.run(function() {
                    resolve({
                        token: response.id_token
                    });
                });
            }, function(xhr, status, error) {
                var response = xhr.responseText;
                Ember.run(function() {
                    reject(response);
                });
            });
        });
    },

    invalidate: function() {
        console.log('invalidate...');
        return Ember.RSVP.resolve();
    }
});