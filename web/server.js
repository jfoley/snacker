import Server from './index';
import MeetingRepo from '../persistance/meeting-repo';

let dependencies = {
  meetingRepo: new MeetingRepo()
}
dependencies.meetingRepo.meetings.push({name: 'yo'})

Server.run(dependencies);
