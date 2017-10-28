import Ember from 'ember';

export default Ember.Mixin.create({
  /**
    Shuffle array
    @property array
    @return [array]
  */
  shuffleArray(array) {
    var m = array.length, t, i;
    
      while (m) {
    
        i = Math.floor(Math.random() * m--);
    
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
  }
});
