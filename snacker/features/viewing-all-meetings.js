require('spec/support/spec-helper');
import _ from "lodash";
import Snacker from 'snacker';

import MockMeetingRepo from 'spec/mocks/mock-meeting-repo';
import MockRegistrationRepo from 'spec/mocks/mock-registration-repo';
import MockUserRepo from 'spec/mocks/mock-user-repo';

Feature('viewing all meetings', () => {
  let snacker = new Snacker({
    meetingRepo: new MockMeetingRepo(),
    registrationRepo: new MockRegistrationRepo(),
    userRepo: new MockUserRepo(),
  });

  let meetingsPresented;

  Given('a meeting exists', (done) => {
    snacker.useCases.createMeeting({ name: "meeting-name" }, () => done(), expect.fail);
  });

  When('when I view all meetings', (done) => {
    snacker.useCases.presentMeetings(
      (meetings) => {
        meetingsPresented = _.pluck(meetings, 'name');
        done();
      }
    );
  });

  Then('I should see that meeting', () => {
    expect(meetingsPresented).to.eql(['meeting-name']);
  });
});
