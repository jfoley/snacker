import Snacker from '../../index';
import {MockMeetingRepo} from '../support/mock-meeting-repo';
import {MockRegistrationRepo} from '../support/mock-registration-repo';
import {MockUserRepo} from '../support/mock-user-repo';
import {MockUser} from '../support/mock-user';

import chai from 'chai';
let expect = chai.expect;

export default function () {
  let snacker = new Snacker({
    meetingRepo: new MockMeetingRepo(),
    registrationRepo: new MockRegistrationRepo(),
    userRepo: new MockUserRepo(),
  });

  let meetingsPresented;
  let attendeesPresented;

  this.Given(/^there is a meeting$/, () => {
    snacker.useCases.createMeeting(
      { name: 'meeting-name' },
      () => {},
      this.fail
    )
  });

  this.When(/^I view meetings$/, () => {
    snacker.useCases.presentMeetings(
      (meetings) => { meetingsPresented = meetings }
    );
  });

  this.Then(/^I should see that meeting$/, () => {
    expect(meetingsPresented).to.eql(['meeting-name'])
  });

  this.When(/^I say that I am going to attend that meeting$/, () => {
    let meetingToAttend = {name: "meeting-name"};
    let user = {name: "Brian Butz"};

    snacker.useCases.registerForMeeting(
      meetingToAttend,
      user,
      (registration) => {  }
    );

    snacker.useCases.presentAttendees(
      meetingToAttend,
      (attendees) => { attendeesPresented = attendees; }
    );
  });

  this.Then(/^I should show up in the list of attendees for that meeting$/, () => {
    expect(attendeesPresented).to.eql([
      {
        meetingName: "meeting-name",
        attendeeName: "Brian Butz"
      }
    ]);
  });
}
