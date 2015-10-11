import _ from "lodash";
import {MeetingNotFoundError} from "spec/mocks/mock-meeting-repo";

export default class PresentMeeting {
  constructor(meetingRepo) {
    this.meetingRepo = meetingRepo;
  }

  execute(meetingAttributes, success, failure) {
    let meeting = this.meetingRepo.meetingByName(meetingAttributes.name);

    if(_.isUndefined(meeting)) {
      failure(new MeetingNotFoundError());
    } else {
      success(meeting);
    }
  }
}
