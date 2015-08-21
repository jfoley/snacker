import _ from 'lodash';

export default class Registration {
  constructor(meetingName, attendeeName) {
    this.meetingName = meetingName;
    this.attendeeName = attendeeName;
  }

  toDTO() {
    return {
      meetingName: this.meetingName,
      attendeeName: this.attendeeName,
    };
  }
}
