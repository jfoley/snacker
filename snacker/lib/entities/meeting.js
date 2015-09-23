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
    let errors = {
      name: []
    };

    if(_.isEmpty(this.name)) {
      errors.name.push("required");
    }

    return errors;
  }
}
