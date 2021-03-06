/* eslint camelcase: "off" */
/* eslint max-len: "off" */
/* eslint ember/new-module-imports: "off" */

import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  email: attr('string'),
  address: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zip: attr('string'),
  country: attr('string'),
  phone: attr('string'),
  agent: attr('boolean'),
  agentEmail: attr('string'),
  agentName: attr('string'),
  oldContentAgreement: attr('boolean'),
  blogName: attr('string'),
  firstname: attr('string'),
  lastname: attr('string'),
  blogUrl: attr('string'),
  cms: attr('string'),
  other_cms_: attr('string'),
  content_topics_other_: attr('string'),
  healthFoodBlogger: attr('boolean'),
  other_diet_content: attr('string'),
  retailers_frequented_other_: attr('string'),
  just_social_share_rate: attr('number'),
  sponsoredContentFee: attr('number'),
  content_topics_muse_: attr('string'),
  retailers_frequented_muse_: attr('string'),
  diet_catered_content_muse_: attr('string'),
  video: attr('boolean'),
  sponsored_content_fee_video_: attr('number'),
  ahalogyPixel: attr('boolean'),
  thirdPartyPixel: attr('boolean'),
  photography: attr('boolean'),
  highResImagery: attr('boolean'),
  travel: attr('boolean'),
  standard_amount_of_time_for_one_post: attr('string'),
  quick_turnaround_content: attr('boolean'),
  fastest_you_can_complete_post: attr('string'),
  reasons_to_decline_a_brand: attr('string'),
  birthday: attr('string'),
  gender: attr('string'),
  married: attr('boolean'),
  do_you_have_kids: attr('boolean'),
  other_life_milestones: attr('string'),
  numberOfKids: attr('number'),
  do_you_have_pets: attr('string'),
  lifeMilestones: attr('string'),
  timeForVideoPost: attr('string'),
  petsOther: attr('string'),
  children: hasMany('influencer-child', { async: false, inverse: 'influencer' }),
  brandable: hasMany('brandable', { async: false, inverse: 'influencer' }),
  socialMediaAccount: hasMany('social-media-account', { async: false, inverse: 'influencer' }),
  user: belongsTo('user'),
  starred: attr('boolean'),
  jobInfluencers: hasMany('job-influencer', { async: false, inverse: 'influencer' }),
  instagramHandle: attr('string'),
  openToNegotiating: attr('boolean'),
  completedGeneral: attr('boolean'),
  completedBlogDetails: attr('boolean'),
  completedCapabilities: attr('boolean'),
  completedSocialMediaAccounts: attr('boolean'),
  completedPersonalDetails: attr('boolean'),
  isActivated: Ember.computed('completedPersonalDetails', 'completedSocialMediaAccounts', 'completedCapabilities', 'completedBlogDetails', 'completedGeneral', function() {
    return (this.get('completedPersonalDetails') && this.get('completedSocialMediaAccounts') && this.get('completedCapabilities') && this.get('completedBlogDetails') && this.get('completedGeneral'));
  })
});
