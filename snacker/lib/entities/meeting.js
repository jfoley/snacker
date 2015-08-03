import _ from 'lodash';

export default class Meeting {
  constructor(attributes) {
    this.name = attributes.name
  }

  isValid() {
    if(_.isEmpty(this.name)) {
      return false;
    } else {
      return true;
    }
  }

  validationErrors() {
    if(_.isEmpty(this.name)) {
      return {name: 'required'};
    }
  }
}
