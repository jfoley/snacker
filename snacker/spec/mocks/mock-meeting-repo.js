import _ from "lodash";
import Meeting from "snacker/entities/meeting";

export class MeetingNotFoundError {

}

export default class MockMeetingRepo {
  constructor() {
    this.meetings = [];
  }

  createMeeting(meetingAttributes) {
    this.meetings.push(meetingAttributes);
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
