import {MockMeetingRepo} from '../../features/support/mock-meeting-repo';
import CreateMeeting from '../../lib/use-cases/create-meeting';

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
        expect(meetingRepo.meetingCount()).toEqual(1);
        expect(createdMeeting).toEqual({name: 'meeting-name'});
        done();
      }

      useCase = CreateMeeting(meetingRepo, meetingAttributes, success, fail);
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
      useCase = CreateMeeting(meetingRepo, meetingAttributes, fail, () => {
        expect(meetingRepo.meetingCount()).toEqual(0);
      });
    });

    it('calls the fail callback with the passed in object overlayed with the validation errors', () => {
      useCase = CreateMeeting(meetingRepo, meetingAttributes, fail, (errors) => {
        expect(errors).toEqual({name: null, errors: {name: ['required']}});
      });
    });
  });
});
