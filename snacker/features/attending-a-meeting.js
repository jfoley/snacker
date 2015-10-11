require('spec/support/spec-helper');

import Snacker from 'snacker';

import MockMeetingRepo from 'spec/mocks/mock-meeting-repo';
import MockRegistrationRepo from 'spec/mocks/mock-registration-repo';
import MockUserRepo from 'spec/mocks/mock-user-repo';

Feature('attending a meeting', () => {
  let snacker = new Snacker({
    meetingRepo: new MockMeetingRepo(),
    registrationRepo: new MockRegistrationRepo(),
    userRepo: new MockUserRepo(),
  });
  let attendeesPresented;

  Given('a meeting exists', (done) => {
    snacker.useCases.createMeeting({ name: "meeting-name" }, () => done(), expect.fail);
  });

  When('I say that I am going to attend that meeting', () => {
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

  Then('I should show up in the list of attendees for that meeting', () => {
    expect(attendeesPresented).to.eql([
      {
        meetingName: "meeting-name",
        attendeeName: "Brian Butz"
      }
    ]);
  });
});
