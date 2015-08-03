import Meeting from '../entities/meeting';

export default function(meetingRepo, meetingAttributes, success, fail) {
  let useCase = new CreateMeeting(meetingRepo, meetingAttributes);
  return useCase.execute(success, fail);
}

class CreateMeeting {
  constructor(meetingRepo, meetingAttributes) {
    this.meetingRepo = meetingRepo;
    this.meetingAttributes = meetingAttributes;
  }

  execute(success, fail) {
    let meeting = new Meeting(this.meetingAttributes);
    if(meeting.isValid()) {
      this.meetingRepo.createMeeting(this.meetingAttributes);
      success(this.meetingAttributes);
    } else {
      fail(meeting.validationErrors());
    }
  }
}
