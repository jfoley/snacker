import Express from 'express';
import path from 'path';
import BodyParser from 'body-parser';
import ExpressHbs from 'express-handlebars';
import {UseCases} from 'snacker';
import {Repos} from 'persistence';

let app = Express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', ExpressHbs({ extname: '.hbs'}));

app.set('view engine', '.hbs');
app.use(BodyParser.urlencoded());

export default class SnackerServer {
  constructor() {
    this.Repos = {
      meetingRepo: new Repos.MeetingRepo(),
      registrationRepo: new Repos.RegistrationRepo(),
    };
  }

  run() {
    app.get('/', (req, res) => {
      UseCases.PresentMeetings(this.Repos.meetingRepo, (meetings) => {
        res.render('index', { meetings: meetings });
      });
    });

    app.post('/meetings', (req, res) => {
      let meetingAttributes = { name: req.body.meetingName };
      UseCases.CreateMeeting(this.Repos.meetingRepo, meetingAttributes, (newMeeting) => {
        res.redirect("/");
      }, (meeting) => {
        res.render('index', { meetings: [], meeting: meeting });
      });
    });

    app.get('/attendees/:meetingName', (req, res) => {
      UseCases.PresentAttendees(this.Repos.registrationRepo, {name: req.params.meetingName}, (attendees) => {
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
