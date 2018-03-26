import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  url: attr('string'),
  imageUrl: attr('string'),
  facebookUrl: attr('string'),
  pinterestUrl: attr('string'),
  instagramUrl: attr('string'),
  twitterUrl: attr('string'),
  youtubeUrl: attr('string'),
  includeInSpotlight: attr('boolean'),
  deleted: attr('boolean'),
  influencer: belongsTo('influencer', { async: false, inverse: 'brandable' }),
  campaign: belongsTo('campaign', { async: false, inverse: 'brandable' })
});
