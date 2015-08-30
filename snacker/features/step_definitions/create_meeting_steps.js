import {UseCases} from '../../index';
import {MockMeetingRepo} from '../support/mock-meeting-repo';

export default function () {
  let meetingRepo;

  this.Before(() => {
    meetingRepo = new MockMeetingRepo();
  });

  this.When(/^I create a meeting called "([^"]*)"$/, (meetingName, callback) => {
    UseCases.CreateMeeting(
      meetingRepo,
      { name: meetingName },
      callback,
      callback.fail
    )
  });

  this.Then(/^I see a meeting called "([^"]*)"$/, function (meetingName, callback) {
    console.log("suuppp")
    UseCases.PresentMeetings(
      meetingRepo,
      (meetings) => {
        console.log("yoooo")
        if(_.findBy(meetings, {name: meetingName})) {
          callback();
        } else {
          callback.fail();
        }
      }
    );
  });
}
