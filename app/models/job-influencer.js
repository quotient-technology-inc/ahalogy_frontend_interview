import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({
  job: belongsTo('job', { async: false, inverse: 'jobInfluencers' }),
  influencer: belongsTo('influencer', { async: false, inverse: 'jobInfluencers' }),
  chosen: attr('boolean')
});
