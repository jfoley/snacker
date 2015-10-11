import PresentMeetings from 'snacker/use-cases/present-meetings';
import MockMeetingRepo from 'spec/mocks/mock-meeting-repo';

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
