export default function(registrationRepo, meeting, callback) {
  let registrations = registrationRepo.findRegistrationsByMeetingName(meeting.name);

  if(registrations) {
    callback(registrations.map((r) => r.toDTO()));
  }
}
