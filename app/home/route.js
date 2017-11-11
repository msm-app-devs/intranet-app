import Ember from 'ember';
import RSVP from 'rsvp';
import shuffleArray from '../mixins/shuffle-array';
import notifyUser from '../mixins/notify-user';

export default Ember.Route.extend(shuffleArray, notifyUser, {
  // shuffledCars: Ember.computed('attrs.lastFiveEmployees.[]', function(){
  //   return this.get('attrs.lastFiveEmployees');
  // }),

  /**
    Fetches all `employee` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return RSVP.hash({
      employees: this.store.findAll('employee'),
      // news: this.store.findAll('news')
    });
  },

  /**
    Set locations for display, and default to picking the first
    @method setupController
    @param {LocationsController} controller
    @param {LocationModel[]} model
    @public
  */
  setupController(controller, model) {
    controller.setProperties({
      'attrs.lastFiveEmployees': this._findLastFiveRecords(model.employees),
      'attrs.randomFiveemployees': this._findRandomFiveRecords(model.employees),
      'attrs.isBirthdayShowingModal': this._birthdayChecker(model.employees),
      'attrs.chapters': [
        {
          "title": "Chapter 1",
          "body": "The cQuest programming unit combines the IT expertise of programmers with the market research competencies of experienced analysts. In our daily activities we use HTML, JavaScript/jQuery, CSS, C#, VBScript, SQL. Our programming team provides high quality questionnaire programming, hosting, translations overlay and online fieldwork management around the clock. Our specialists advise clients at the questionnaire creation phase. We execute large-scale and high complexity projects on a regular basis. Work with both internal tools and client solutions."
        },
        {
          "title": "Chapter 2",
          "body": "cQuest offers a full range of data processing services for quantitative market research – summarization, aggregation, validation, tabulation, as well as statistical analysis of various complexity. Dedication to data quality, speed of delivery and flexibility. Well seasoned professionals with over 10 years of experience in data processing. Supervision and quality control by advanced practitioners and academics with PhD in statistics. Rich experience working on multi-country, multi wave projects involving big data. Working on projects with over 200 product lines spread around over 30 countries with a data set containing over 600 000 records. Quantum, SPSS, SQL, Access, ASKIA Analyze."
        },
        {
          "title": "Chapter 3",
          "body": "cQuest can perform the full range of consulting and operational activities related to the visualization of market research data. Template optimization and design, working with both tailor made and ready to use templates. Clear and understandable result presentation of actionable insights, which can be used by experienced researchers as well as marketing practitioners. Combined data processing, charting and analytics capabilities allowing to control the entire process. Automated tools and algorithms allowing for easy handling and visualization of large volumes of data. Experience in using clients’ custom charting platforms."
        },
        {
          "title": "Chapter 4",
          "body": "The cQuest programming unit combines the IT expertise of programmers with the market research competencies of experienced analysts. In our daily activities we use HTML, JavaScript/jQuery, CSS, C#, VBScript, SQL. Our programming team provides high quality questionnaire programming, hosting, translations overlay and online fieldwork management around the clock. Our specialists advise clients at the questionnaire creation phase. We execute large-scale and high complexity projects on a regular basis. Work with both internal tools and client solutions."
        },
        {
          "title": "Chapter 5",
          "body": "Our project based approach to allocating resources guarantees that we will select the right specialists for each job. Proactive approach to custom solutions that fit with our clients’ goals. Project managers specializing in different fields of research with a variety of industry backgrounds. Servicing projects 24/7 world-wide. Attention to detail and clear communication. Quick and efficient project ramp up."
        }
      ]
    });
  },

  /**
    Find and return the last 5 records into the model
    @method _findLastFiveEmployees
    @param {LocationModel[]} model
    @private
  */
  _findLastFiveRecords(model) {
    const modelArr = model.toArray();
    const modelLen = modelArr.length;
    let lastFiveRecords = [];

    lastFiveRecords =  modelArr.slice(modelLen-5, modelLen);

    return lastFiveRecords;
  },

  /**
    Find and return random 5 records into the model
    @method _findRandomFiveEmployees
    @param {LocationModel[]} model
    @private
  */
  _findRandomFiveRecords(model) {
    const modelArr = model.toArray();
    const modelLen = modelArr.length;
    let randomFiveRecords = [];

    randomFiveRecords = this.shuffleArray(modelArr.slice(0, modelLen-5)).slice(0, 5);

    return randomFiveRecords;
  },

    /**
    Return 'true' if find a member with birthday
    @method _birthdayChecker
    @param {LocationModel[]} model
    @private
  */
  _birthdayChecker(model) {
    const modelArr = model.toArray();

    return modelArr.filterBy('birthday', '12/05/1980').length;
  },

  actions: {
    /**
      Delete and save employee to the API.
      @method deleteEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    deleteEmployee(employee) {
      employee.deleteRecord();
      employee.save();
      this.notifyUser('A member is deleted successfully', "success");
    },

    /**
      Update and save employee to the API.
      @method updateEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    updateEmployee(employee) {
      employee.set('firstName', 'David');
      employee.set('lastName', 'James');
      employee.set('position', 'Senior UI Developer');
      employee.set('Team', 'Mobile');
      employee.save();
    },

    /**
      Navigate to specific employee route.
      @method visitEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    visitEmployee(employee) {
      this.transitionTo('employee', employee.id);
    }
  }
});
