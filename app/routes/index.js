import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('show');
  },

  actions: {
    save3(params) {
      var newShow = this.store.createRecord('show', params);
      newShow.save();
      this.transitionTo('index');
    },
  }
});
