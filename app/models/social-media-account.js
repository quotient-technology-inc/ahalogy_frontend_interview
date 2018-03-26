import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export const schema = {
  socialMediaServiceId: attr('number'),
  socialMediaPage: hasMany('social-media-page', { async: false, inverse: 'socialMediaAccount' }),
  influencer: belongsTo('influencer', { async: false, inverse: 'socialMediaAccount' })
};

export default Model.extend(schema);
