/* global Ember */

import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  removeHasManys(extractRelationships) {
    return Object.keys(extractRelationships).reduce((acc, val)=> {
      if (!Array.isArray(extractRelationships[val].data)) {
        acc[val] = extractRelationships[val];
      }

      return acc;
    }, {});
  },
  keyForAttribute: function(key) {
    if (key.includes('_')) return key;

    return Ember.String.dasherize(key);
  },
  extractRelationships(...args) {
    // rely on inverses for hasMany relationships
    // note: make sure to explicitly declare inverse to be safe
    return this.removeHasManys(this._super(...args));
  }
});
