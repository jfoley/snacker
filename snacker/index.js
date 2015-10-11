import UseCases from './lib/use-cases/use-cases';
import _ from "lodash";

export default class Snacker {
  constructor(repos) {
    this.useCases = {
      createMeeting: _.curry(UseCases.CreateMeeting)(repos.meetingRepo),
      presentAttendees: _.curry(UseCases.PresentAttendees)(repos.registrationRepo),
      presentMeetings: _.curry(UseCases.PresentMeetings)(repos.meetingRepo),
      registerForMeeting: _.curry(UseCases.RegisterForMeeting)(repos.meetingRepo, repos.userRepo, repos.registrationRepo),
    }
  }
}
