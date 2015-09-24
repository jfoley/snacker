import _ from "lodash";

export default class RegistrationRepo {
  constructor() {
    this.registrations = [];
  }

  createRegistration(meetingName, attendeeName) {
    let registration = {
      meetingName: meetingName,
      attendeeName: attendeeName,

      toDTO: function() {
        return this;
      }
    };

    this.registrations.push(registration);

    return registration;
  }

  findRegistrationsByMeetingName(meetingName) {
    let registrations = _.select(this.registrations, (r) => r.meetingName === meetingName);

    return registrations;
  }
}
