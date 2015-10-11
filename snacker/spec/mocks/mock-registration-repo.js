import Registration from 'snacker/entities/registration';
import _ from "lodash";

export default class MockRegistrationRepo {
  constructor() {
    this.registrations = [];
  }

  createRegistration(meetingName, attendeeName) {
    let registration = new Registration(meetingName, attendeeName);
    this.registrations.push(registration);

    return registration;
  }

  findRegistrationsByMeetingName(meetingName) {
    let registrations = _.where(this.registrations, (r) => r.meetingName === meetingName);

    return registrations;
  }
}
