import DS from 'ember-data';

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
    @property dateStart
    @type String
  */
  dateStart: DS.attr('string'),

  /**
    @property birthday
    @type String
  */
  birthday: DS.attr('string'),

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
    @property skype
    @type string
  */
  skype: DS.attr('string'),

  /**
    @property email
    @type string
  */
  email: DS.attr('string')
});