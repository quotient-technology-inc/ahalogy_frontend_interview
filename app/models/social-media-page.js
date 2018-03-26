import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export const schema = {
  name: attr('string'),
  identifier: attr('string'),
  link: attr('string'),
  primaryPage: attr('boolean'),
  socialMediaAccount: belongsTo('social-media-account', { async: false, inverse: 'socialMediaPage' })
};

export default Model.extend(schema);
