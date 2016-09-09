import Ember from 'ember';

export default Ember.Component.extend({
  addNewShow: false,
  actions: {
    showFormDisplay() {
      this.set('addNewShow', true);
    },

    save1() {
      var params = {
        title: this.get("title"),
        location: this.get("location"),
        genre: this.get("genre"),
        image: this.get("image"),
        description: this.get("description")
      };
      this.set('addNewShow', false);
      this.sendAction('save2', params);
    }
  }
});
