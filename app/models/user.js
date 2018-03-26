import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export const schema = {
  email: attr('string'),
  brandUsers: hasMany('brand-user', { async: false, inverse: 'user' }),
  comments: hasMany('comment', { async: false, inverse: 'user' }),
  jobs: hasMany('job', { async: false, inverse: 'createUser' }),
  notification: hasMany('notification', { async: false, inverse: 'createUser' }),
  firstName: attr('string'),
  lastName: attr('string'),
  image: attr('string'),
  password: attr('string'),
  auth0Id: attr('string'),
  inviteToken: attr('string'),
  influencer: attr('boolean')
};

export default Model.extend(schema);
