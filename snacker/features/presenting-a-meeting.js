require('spec/support/spec-helper');

import Snacker from 'snacker';

import MockMeetingRepo from 'spec/mocks/mock-meeting-repo';
import MockRegistrationRepo from 'spec/mocks/mock-registration-repo';
import MockUserRepo from 'spec/mocks/mock-user-repo';

Feature('presenting a meeting', () => {
  let snacker = new Snacker({
    meetingRepo: new MockMeetingRepo(),
    registrationRepo: new MockRegistrationRepo(),
    userRepo: new MockUserRepo(),
  });
  let successCallbackArgs;

  Given('a meeting exists', (done) => {
    snacker.useCases.createMeeting({ name: "meeting-name" }, () => done(), expect.fail);
  });

  When('when I ask to see that meeting', (done) => {
    let useCase = snacker.useCases.presentMeeting();
    let success = function() {
      successCallbackArgs = arguments;
      done();
    };

    useCase.execute({ name: "meeting-name" }, success, expect.fail);
  });

  Then('I am presented that meeting', () => {
    expect(successCallbackArgs.length).to.eql(1);

    let meeting = successCallbackArgs[0];
    expect(meeting).to.eql({
      name: "meeting-name",
    });
  });
});
