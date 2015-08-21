export default function(meetingRepo, userRepo, registrationRepo, meeting, user, callback) {
  // let meetingEntity = meetingRepo.meetingByName(meeting.name);
  // let userEntity = userRepo.userByName(user.name);

  let registration = registrationRepo.createRegistration(meeting.name, user.name);

  callback(registration.toDTO());
}
