import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  location: DS.attr(),
  genre: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  reviews: DS.hasMany('review', { async: true} )
});
