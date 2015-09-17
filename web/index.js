import Express from 'express';
import path from 'path';
import ExpressHbs from 'express-handlebars';
import {UseCases} from 'snacker';
import {Repos} from 'persistence';

let app = Express();

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', ExpressHbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

export default {
  run() {
    let meetingRepo = new Repos.MeetingRepo();
    let registrationRepo = new Repos.RegistrationRepo();
    meetingRepo.createMeeting({name: "yo"});
    registrationRepo.createRegistration("yo", "foley");
    registrationRepo.createRegistration("yo", "tim");

    app.get('/', (req, res) => {
      UseCases.PresentMeetings(meetingRepo, (meetings) => {
        res.render('index', { meetings: meetings });
      });
    });

    app.get('/attendees', (req, res) => {
      let meetingName = "yo";

      UseCases.PresentAttendees(registrationRepo, {name: meetingName}, (attendees) => {
        res.render('attendees', { attendees: attendees });
      });
    });

    let server = app.listen(3000, () => {
      var host = server.address().address;
      var port = server.address().port;

      console.log('Example app listening at http://%s:%s', host, port);
    });
  }
}
