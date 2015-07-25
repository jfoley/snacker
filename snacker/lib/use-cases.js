class CreateMeeting {
  constructor(observer, meetingAttributes, meetingRepo) {
    this.observer = observer;
    this.meetingAttributes = meetingAttributes;
    this.meetingRepo = meetingRepo;
  }

  execute() {
    this.meetingRepo.createMeeting(this.meetingAttributes);
    this.observer.meetingCreated();
  }
}

class PresentMeetings {
  constructor(observer, meetingRepo) {
    this.observer = observer;
    this.meetingRepo = meetingRepo;
  }

  execute() {
    let meetings = this.meetingRepo.allMeetings();
    this.observer.presentMeetings(meetings);
  }
}

export default {
  CreateMeeting,
  PresentMeetings
}
