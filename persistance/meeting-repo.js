export default class MeetingRepo {
  constructor() {
    this.meetings = [];
  }

  createMeeting(meeting) {
    this.meetings.push(meeting);
  }

  allMeetings() {
    return this.meetings;
  }
}
