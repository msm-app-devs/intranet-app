import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  /**
    @property firstName
    @type String
  */
  firstName: DS.attr('string'),

  /**
    @property lastName
    @type String
  */
  lastName: DS.attr('string'),

  /**
    @property gender
    @type String
  */
  gender: DS.attr('string'),

  // /**
  //   @property company
  //   @type String
  // */
  // company: Ember.computed('', function() {
  //   const arr = ["cQuest", "gemSeek"];

  //   return arr[Math.floor(Math.random() * Math.floor(2))];
  // }),

  /**
    @property position
    @type String
  */
  position: DS.attr('string'),

  /**
    @property team
    @type String
  */
  team: DS.attr('string'),

  /**
    @property company
    @type String
  */
  company: DS.attr('string'),

  /**
    @property dateStart
    @type String
  */
  dateStart: DS.attr('date'),

  /**
    @property isNew
    @type Boolean
  */
  isStarter: Ember.computed('dateStart', function() {
    const date = moment(this.get('dateStart'));
    const today = moment();
    const days = Math.round(moment.duration(today - date).asDays());

    return days < 90 ? true : false;
  }),

  /**
    @property periodInCompany
    @type String
  */
  periodInCompany: Ember.computed('dateStart', function() {
    const fromNow = moment(this.get('dateStart')).fromNow(true);

    return fromNow;
  }),

  /**
    @property birthday
    @type String
  */
  birthday: DS.attr('isodate'),

   /**
    @property isBirthday
    @type Boolean
  */
  isBirthday: Ember.computed('birthday', function() {
    const today = moment();
    const birthDate = moment(this.get('birthday'));
    const isBirthday = (today.month() === birthDate.month()) &&
      (today.date() === birthDate.date());

    return isBirthday;
  }),

   /**
    @property isBirthday
    @type Boolean
  */
  hasBirthday: Ember.computed('birthday', function() {
    const birthDate = moment(this.get('birthday'));
    const matrix  = [
      moment(),
      moment().add(1, 'days'),
      moment().add(2, 'days'),
      moment().add(3, 'days'),
      moment().add(4, 'days'),
      moment().add(5, 'days'),
      moment().add(6, 'days'),
    ];
    let hasBirthday = false;

    matrix.forEach(el => {
      if ((el.month() === birthDate.month()) && (el.date() === birthDate.date())) {
        hasBirthday = true;
      }
    })

    return hasBirthday;
  }),

  /**
    @property image
    @type String
  */
  image: DS.attr('string'),

  /**
    @property image
    @type String
  */
  photo: DS.attr('string'),

  /**
    @property avatar
    @type String
  */
  avatar: DS.attr('string'),

  /**
    @property education
    @type String
  */
  education: DS.attr('string'),

  /**
    @property expertise
    @type String
  */
  expertise: DS.attr('string'),

  /**
    @property languages
    @type String
  */
  languages: DS.attr('string'),

  /**
    @property hobbies
    @type String
  */
  hobbies: DS.attr('string'),

  /**
    @property song
    @type String
  */
  song: DS.attr('string'),

  /**
    @property thought
    @type string
  */
  thought: DS.attr('string'),

  /**
    @property book
    @type string
  */
  book: DS.attr('string'),
  
  /**
    @property pet
    @type string
  */
  pet: DS.attr('string'),

  /**
    @property skype
    @type string
  */
  skype: DS.attr('string'),

  /**
    @property email
    @type string
  */
  email: DS.attr('string'),

  /**
    @property lastUpdate
    @type String
  */
  // lastUpdate: DS.attr('date'),
  lastUpdate: Ember.computed('', function() {
    return new Date();
  }),

 /**
   @property isNew
   @type Boolean
 */
 isUpdated: Ember.computed('lastUpdate', function() {
   const date = moment(this.get('lastUpdate'));
   const today = moment();
   const days = Math.round(moment.duration(today - date).asDays());

   return days < 90 ? true : false;
 }),
});
