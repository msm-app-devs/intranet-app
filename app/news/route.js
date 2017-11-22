import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      news: [
        {
          "title": "Chapter 1",
          "date": "10.10.2000",
          "body": "The cQuest programming unit combines the IT expertise of programmers with the market research competencies of experienced analysts. In our daily activities we use HTML, JavaScript/jQuery, CSS, C#, VBScript, SQL. Our programming team provides high quality questionnaire programming, hosting, translations overlay and online fieldwork management around the clock. Our specialists advise clients at the questionnaire creation phase. We execute large-scale and high complexity projects on a regular basis. Work with both internal tools and client solutions.",
          "img": 'http://btckstorage.blob.core.windows.net/site10666/News.jpg'
        },
        {
          "title": "Chapter 2",
          "date": "10.11.2000",
          "body": "cQuest offers a full range of data processing services for quantitative market research – summarization, aggregation, validation, tabulation, as well as statistical analysis of various complexity. Dedication to data quality, speed of delivery and flexibility. Well seasoned professionals with over 10 years of experience in data processing. Supervision and quality control by advanced practitioners and academics with PhD in statistics. Rich experience working on multi-country, multi wave projects involving big data. Working on projects with over 200 product lines spread around over 30 countries with a data set containing over 600 000 records. Quantum, SPSS, SQL, Access, ASKIA Analyze.",
          "img": 'http://btckstorage.blob.core.windows.net/site10666/News.jpg'
        },
        {
          "title": "Chapter 3",
          "date": "12.10.2000",
          "body": "cQuest can perform the full range of consulting and operational activities related to the visualization of market research data. Template optimization and design, working with both tailor made and ready to use templates. Clear and understandable result presentation of actionable insights, which can be used by experienced researchers as well as marketing practitioners. Combined data processing, charting and analytics capabilities allowing to control the entire process. Automated tools and algorithms allowing for easy handling and visualization of large volumes of data. Experience in using clients’ custom charting platforms.",
          "img": 'http://btckstorage.blob.core.windows.net/site10666/News.jpg'
        },
        {
          "title": "Chapter 4",
          "date": "15.10.2001",
          "body": "The cQuest programming unit combines the IT expertise of programmers with the market research competencies of experienced analysts. In our daily activities we use HTML, JavaScript/jQuery, CSS, C#, VBScript, SQL. Our programming team provides high quality questionnaire programming, hosting, translations overlay and online fieldwork management around the clock. Our specialists advise clients at the questionnaire creation phase. We execute large-scale and high complexity projects on a regular basis. Work with both internal tools and client solutions.",
          "img": 'http://btckstorage.blob.core.windows.net/site10666/News.jpg'
        },
        {
          "title": "Chapter 5",
          "date": "11.11.2005",
          "body": "Our project based approach to allocating resources guarantees that we will select the right specialists for each job. Proactive approach to custom solutions that fit with our clients’ goals. Project managers specializing in different fields of research with a variety of industry backgrounds. Servicing projects 24/7 world-wide. Attention to detail and clear communication. Quick and efficient project ramp up.",
          "img": 'http://btckstorage.blob.core.windows.net/site10666/News.jpg'
        }
      ]
    });
  }
});
