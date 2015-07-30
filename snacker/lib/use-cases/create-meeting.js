export default class CreateMeeting {
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
