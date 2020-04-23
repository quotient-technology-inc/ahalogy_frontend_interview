/* eslint ember/new-module-imports: "off" */
import Ember from 'ember';

const {
  inject: { service },
  Route
} = Ember;

export default Route.extend({
  store: service(),

  model(){
    return {
      influencer: this.get('store').findRecord('influencer', 8926)
    }
  },

  setupController(controller, model) {
    model.influencer
    .then((influencer)=>{
      controller.set('influencer', influencer);
    });
  }
});
