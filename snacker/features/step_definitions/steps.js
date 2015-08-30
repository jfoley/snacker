import {UseCases} from '../../index';
import {MockMeetingRepo} from '../support/mock-meeting-repo';
import {MockRegistrationRepo} from '../support/mock-registration-repo';
import {MockUserRepo} from '../support/mock-user-repo';
import {MockUser} from '../support/mock-user';

// import CreateMeetingSteps from './create_meeting_steps';

import chai from 'chai';
let expect = chai.expect;

export default function () {
  // CreateMeetingSteps.call(this);

  let mockUser = new MockUser();
  let meetingRepo = new MockMeetingRepo();
  let registrationRepo = new MockRegistrationRepo();
  let userRepo = new MockUserRepo();
  let meetingsPresented;
  let attendeesPresented;

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

  // this.When(/^I create a meeting called "([^"]*)"$/, (meetingName) => {
  //   meetingRepo.createMeeting({name: meetingName});
  // });
  //
  // this.Then(/^I see a meeting called "([^"]*)"$/, (meetingName) => {
  //   expect(meetingsPresented).to.eql(['meeting-name'])
  // });

  this.When(/^I say that I am going to attend that meeting$/, () => {
    let meetingToAttend = {name: "meeting-name"};
    let user = {name: "Brian Butz"};

    UseCases.RegisterForMeeting(
      meetingRepo,
      userRepo,
      registrationRepo,
      meetingToAttend,
      user,
      (registration) => {  }
    );

    UseCases.PresentAttendees(
      registrationRepo,
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
