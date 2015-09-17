import Webdriverio from 'webdriverio';
import chai from 'chai';
let expect = chai.expect;

import MeetingRepo from '../../../persistence/meeting-repo';
import WebServer from '../../index';

export default function () {
  let browser;
  let meetingRepo;

  this.BeforeFeatures((event, done) => {
    let opts = { desiredCapabilities: { browserName: 'phantomjs' } };
    browser = Webdriverio.remote(opts).init(done);
  });

  this.AfterFeatures((event, done) => {
    browser.end(done);
  });

  this.Given(/^I am using the web UI$/, function(done) {
    meetingRepo = new MeetingRepo();
    WebServer.run({meetingRepo: meetingRepo});
    done();
  });

  this.Given(/^there is a meeting$/, (done) => {
    meetingRepo.createMeeting({name: 'hungry coders'});
    done();
  });

  this.When(/^I view meetings$/, (done) => {
    browser
      .url('http://localhost:3000/')
      .call(done);
  });

  this.Then(/^I should see that meeting$/, (done) => {
    browser
      .getText('ul.meetings li:first-child').then((meetingName) => {
        expect(meetingName).to.equal('hungry coders');
      }).call(done);
  });
}
