export default function(meetingRepo, callback) {
  let useCase = new PresentMeetings(meetingRepo);
  return useCase.execute(callback);
}

class PresentMeetings {
  constructor(meetingRepo) {
    this.meetingRepo = meetingRepo;
  }

  execute(callback) {
    let meetings = this.meetingRepo.allMeetings();
    callback(meetings);
  }
}
