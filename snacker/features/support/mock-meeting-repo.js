import _ from "lodash";

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

  meetingCount() {
    return this.meetings.length;
  }

  meetingByName(name) {
    return _.find(this.meetings, (m) => m.name === name);
  }
}
