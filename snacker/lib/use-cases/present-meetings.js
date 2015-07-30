export default class PresentMeetings {
  constructor(observer, meetingRepo) {
    this.observer = observer;
    this.meetingRepo = meetingRepo;
  }

  execute() {
    let meetings = this.meetingRepo.allMeetings();
    this.observer.presentMeetings(meetings);
  }
}
