import {UseCases} from '../../index';
import {MockObserver} from '../support/mock-observer';
import {MockMeetingRepo} from '../support/mock-meeting-repo';
import chai from 'chai';
let expect = chai.expect;

export default function () {
  let observer = new MockObserver();
  let meetingAttributes = {
    name: 'Hungry Coders'
  };
  let meetingRepo = new MockMeetingRepo();

  this.Given(/^there is a meeting$/, () => {
    new UseCases.CreateMeeting(
      observer,
      meetingAttributes,
      meetingRepo
    ).execute();
  });

  this.When(/^I view meetings$/, () => {
    new UseCases.PresentMeetings(
      observer,
      meetingRepo
    ).execute();
  });

  this.Then(/^I should see that meeting$/, () => {
    expect(observer.meetingsPresented).to.eql(['Hungry Coders'])
  });
}
