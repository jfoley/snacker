import SnackerServer from './index';

let server = new SnackerServer();

function bootstrapTestData() {
  this.Repos.meetingRepo.createMeeting({name: "yo"});
  this.Repos.registrationRepo.createRegistration("yo", "foley");
  this.Repos.registrationRepo.createRegistration("yo", "tim");
}
bootstrapTestData.apply(server);



server.run();
