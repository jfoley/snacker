import Express from 'express';
import path from 'path';
import ExpressHbs from 'express-handlebars';

let app = Express();

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', ExpressHbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

export default {
  run(dependencies) {
    let meetingRepo = dependencies.meetingRepo;

    app.get('/', (req, res) => {
      let meetings = meetingRepo.allMeetings();
      res.render('index', { meetings: meetings });
    });

    let server = app.listen(3000, () => {
      var host = server.address().address;
      var port = server.address().port;

      console.log('Example app listening at http://%s:%s', host, port);
    });
  }
}
