import 'spec/support/spec-helper';

import CreateMeeting from 'snacker/use-cases/create-meeting';
import MockMeetingRepo from 'spec/mocks/mock-meeting-repo';

describe('CreateMeeting', () => {
  describe('when the meeting attributes are valid', () => {
    let useCase;
    let meetingRepo;
    let meetingAttributes;

    beforeEach(() => {
      meetingRepo = new MockMeetingRepo();
      meetingAttributes = {
        name: 'meeting-name'
      };
    });

    it('creates the meeting', (done) => {
      let success = (createdMeeting) => {
        expect(meetingRepo.meetingCount()).to.eql(1);
        expect(createdMeeting).to.eql({name: 'meeting-name'});
        done();
      };

      useCase = CreateMeeting(meetingRepo, meetingAttributes, success, expect.fail);
    });
  });

  describe('when the meeting attributes are not valid', () => {
    let useCase;
    let meetingRepo;
    let meetingAttributes;

    beforeEach(() => {
      meetingRepo = new MockMeetingRepo();
      meetingAttributes = {
        name: null
      };
    });

    it('does not create the meeting', () => {
      useCase = CreateMeeting(meetingRepo, meetingAttributes, expect.fail, () => {
        expect(meetingRepo.meetingCount()).to.eql(0);
      });
    });

    it('calls the fail callback with the passed in object overlayed with the validation errors', () => {
      useCase = CreateMeeting(meetingRepo, meetingAttributes, expect.fail, (errors) => {
        expect(errors).to.eql({name: null, errors: {name: ['required']}});
      });
    });
  });
});
