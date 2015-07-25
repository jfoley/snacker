export class MockMeetingRepo {
  constructor() {
    this.meetings = [];
  }

  createMeeting(meeting) {
    this.meetings.push(meeting.name);
  }

  allMeetings() {
    return this.meetings;
  }
}
