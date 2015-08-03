import {MockMeetingRepo} from '../../features/support/mock-meeting-repo';
import PresentMeetings from '../../lib/use-cases/present-meetings';

describe('PresentMeetings', () => {
  let useCase;
  let meetingRepo;

  beforeEach(() => {
    meetingRepo = new MockMeetingRepo();
  });

  it('calls the callback with the meetings', (done) => {
    meetingRepo.createMeeting({ name: 'meeting-one' });
    meetingRepo.createMeeting({ name: 'meeting-two' });

    PresentMeetings(meetingRepo, (meetings) => {
      expect(meetings).toContain('meeting-one', 'meeting-two');
      done();
    });
  });
});
