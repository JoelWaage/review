import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  review: DS.attr(),
  show: DS.belongsTo('show', { async: true })
});
