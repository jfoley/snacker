import 'spec/support/spec-helper';

import Meeting from 'snacker/entities/meeting';

describe('meeting', () => {
  describe('validation', () => {
    describe('#isValid', () => {
      it('is valid when the name is present', () => {
        let meeting = new Meeting({name: 'meeting-name'});

        expect(meeting.isValid()).to.be.true;
      });

      it('is not valid when the name is missing', () => {
        let meeting = new Meeting({name: undefined});

        expect(meeting.isValid()).to.be.false;
      });
    });

    describe('#validationErrors', () => {
      it('returns an error object', () => {
        let meeting = new Meeting({name: undefined});

        expect(meeting.validationErrors()).to.eql({name: ['required']});
      });
    });
  });
});
