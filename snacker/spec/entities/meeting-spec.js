import Meeting from '../../lib/entities/meeting';

describe('meeting', () => {
  describe('validation', () => {
    describe('#isValid', () => {
      it('is valid when the name is present', () => {
        let meeting = new Meeting({name: 'meeting-name'});

        expect(meeting.isValid()).toBeTruthy();
      });

      it('is not valid when the name is missing', () => {
        let meeting = new Meeting({name: undefined});

        expect(meeting.isValid()).toBeFalsy();
      });
    });

    describe('#validationErrors', () => {
      it('returns an error object', () => {
        let meeting = new Meeting({name: undefined});

        expect(meeting.validationErrors()).toEqual({name: ['required']});
      });
    });
  });
});
