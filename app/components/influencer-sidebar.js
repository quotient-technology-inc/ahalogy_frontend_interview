import Component from '@ember/component';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);

    //save the blog url without the https as blogUrlName
    const blogUrl = this.get('blogUrl');
    if (typeof blogUrl === 'string') { //check that it's a string first
      let blogUrlName =  blogUrl.replace(/^https?\:\/\//i, "");
      this.set('blogUrlName', blogUrlName);
    } else { //if it's not a string then set it anyways
      this.set('blogUrlName', blogUrl);
    }

    //get the social media accounts
    const socialMediaAccount = this.get('socialMediaAccount');
    if(socialMediaAccount){
      //get the influencer's social media accounts and save the needed data to the socialAccountsArray
      let socialAccounts = socialMediaAccount.mapBy('socialMediaPage');
      let socialAccountsArray = []
      socialAccounts.forEach((account, i) => {
        let linkArray = account.mapBy('link');
        for (let j = 0; j < linkArray.length; j++) {
          //save the influencer's social media link
          let accountObj = {
            link: linkArray[j],
          }
          //check what social media site this is by searching the url
          let pinterest = /^https?\:\/\/www.pinterest.com\//g;
          let twitter = /^https?\:\/\/www.twitter.com\//g;
          let facebook = /^https?\:\/\/www.facebook.com\//g;
          if(linkArray[j].search(pinterest) !== -1){
            accountObj.pinterest = true;
          }else if(linkArray[j].search(twitter) !== -1){
            accountObj.twitter = true;
          }else if(linkArray[j].search(facebook) !== -1){
            accountObj.facebook = true;
          }

          //add the object to the social accounts array
          socialAccountsArray.push(accountObj);
        }
      });

      //save the social account info
      this.set('socialAccounts', socialAccountsArray);
    }

    //convert contentTopicsMuse from string to array so we can display the topics
    const contentTopicsMuse = this.get('contentTopicsMuse');
    if (typeof contentTopicsMuse === 'string') { //check that it's a string first
      let contentTopicsMuseArray = contentTopicsMuse.replace(/_/g, ' ').split(',');
      this.set('topics', contentTopicsMuseArray);
    } else { //if it's not a string then set it anyways
      this.set('topics', contentTopicsMuse);
    }

    //convert retailersFrequentedMuse from string to array so we can display the retailers
    const retailersFrequentedMuse = this.get('retailersFrequentedMuse');
    if (typeof retailersFrequentedMuse === 'string') { //check that it's a string first
      let retailersFrequentedMuseArray = retailersFrequentedMuse.replace(/_/g, ' ').split(',');
      this.set('retailers', retailersFrequentedMuseArray);
    } else { //if it's not a string then set it anyways
      this.set('retailers', retailersFrequentedMuse);
    }

    //save the text to be displayed if the influencer is married or not
    const married = this.get('married');
    let isMarried = "Not Married"
    if(married){
      isMarried = "Married"
    }
    this.set('isMarried', isMarried);

    //save the text to be displayed if the influencer has or does not have kids
    const doYouHaveKids = this.get('doYouHaveKids');
    if(doYouHaveKids){
      //this influencer has kids, did they tell us how many?
      const numberOfKids = this.get('numberOfKids');
      if(numberOfKids !== undefined){
        //this influencer told us how many kids they have, now let's find out if 'kids' should be plural or singular
        if(numberOfKids >= 2){
          //plural kids
          this.set('kids', `Has ${numberOfKids} Kids`);
        }else{
          //singular kid
          this.set('kids', `Has ${numberOfKids} Kid`);
        }
      }else{
        //this influencer did not tell us how many kids they have
        this.set('kids', `Has Kids`);
      }
    }else{
      //this influencer has no kids
      this.set('kids', "No Kids");
    }
  }
});
