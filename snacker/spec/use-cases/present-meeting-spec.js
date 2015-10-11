import 'spec/support/spec-helper';

import PresentMeeting from 'snacker/use-cases/present-meeting';
import MeetingRepo, {MeetingNotFoundError} from 'spec/mocks/mock-meeting-repo';

describe('PresentMeeting Use Case', () => {
  let subject;
  let meetingRepo;

  beforeEach(() => {
    meetingRepo = new MeetingRepo();
    subject = new PresentMeeting(meetingRepo);
  });

  describe('when the meeting exists', () => {
    beforeEach(() => {
      meetingRepo.createMeeting({
        name: 'meeting-name'
      });
    });

    it('presents the meeting', (done) => {
      let success = (meeting) => {
        expect(meeting).to.eql({name: 'meeting-name'});
        done();
      };

      subject.execute({ name: 'meeting-name'}, success, expect.fail);
    });
  });

  describe('when the meeting does not exist', () => {
    it('calls the fail callback with a not found error', (done) => {
      let failure = (errors) => {
        expect(errors).to.be.an.instanceof(MeetingNotFoundError);
        done();
      };

      subject.execute({ name: "nonexistent-meeting" }, expect.fail, failure);
    });
  });
});
