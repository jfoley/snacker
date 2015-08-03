import {UseCases} from '../../index';
import {MockMeetingRepo} from '../support/mock-meeting-repo';

import chai from 'chai';
let expect = chai.expect;

export default function () {
  let meetingRepo = new MockMeetingRepo();
  let meetingsPresented;

  this.Given(/^there is a meeting$/, () => {
    UseCases.CreateMeeting(
      meetingRepo,
      { name: 'meeting-name' },
      () => {},
      this.fail
    )
  });

  this.When(/^I view meetings$/, () => {
    new UseCases.PresentMeetings(
      meetingRepo,
      (meetings) => { meetingsPresented = meetings }
    );
  });

  this.Then(/^I should see that meeting$/, () => {
    expect(meetingsPresented).to.eql(['meeting-name'])
  });
}
