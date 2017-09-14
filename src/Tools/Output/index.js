
const Output = () => 'it\'s working';
const Input = e => `this is ${e}`;
class CaseChanger {
  constructor(input) {
    this.input = input;
  }
  output() {
    return this.input.toUpperCase();
  }
}

export {
  Output,
  Input,
  CaseChanger,
};
