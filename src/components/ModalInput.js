import React, { Component } from 'react';
import { isNonNegativeInteger, isArrayValid } from '../helper/Validation';
import { Button, Header, Modal, Form, Message, Divider } from 'semantic-ui-react';

class ModalInput extends Component {
  state = {
    formInput: {
      seats: '',
      passengers: '',
    },
    error: null,
    open: false,
  };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  handleInput = ({ currentTarget: input }) => {
    const formInput = { ...this.state.formInput };
    formInput[input.name] = input.value;
    this.setState({ formInput });
  };

  handleSubmit = event => {
    event.preventDefault();
    const passengers = +this.state.formInput.passengers;
    const bracketsRegex = /(\[*\]*)/g;
    const seats = this.state.formInput.seats.split(/\s*]\s*,\s*\[\s*/).map(ele => {
      const arr = ele.replace(bracketsRegex, '').split(',');
      return [+arr[0], +arr[1]];
    });
    if (!this.formIsValid(seats, passengers)) {
      return;
    }
    this.props.createNewPlane(seats, passengers);
    this.setState({ open: false });
  };

  formIsValid(seats, passengers) {
    if (!isNonNegativeInteger(passengers)) {
      this.setState({ error: 'Passengers must be at least 0.' });
      return false;
    }

    if (!isArrayValid(seats)) {
      this.setState({
        error: 'Seats must be a valid array according to above rules. (Check Rules At the Top) .',
      });
      return false;
    }
    this.setState({ error: null });
    return true;
  }

  render() {
    return (
      <div style={{marginTop: '5vh'}}>
        <Divider className="mt-2" />
        <Button onClick={this.show} primary>
          Create New Airplane
        </Button>
        <Modal size="tiny" dimmer="inverted" open={this.state.open} onClose={this.close}>
          <Modal.Header>Create New Airplane</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Rules:</Header>
                <p>Row numbers and no of seat blocks must be above 1 and below 20 .</p>
                <p>Col numbers must be above 1 and below 30 .</p>
              <Header>Form:</Header>
              <Form error>
                <Form.Input
                  name="seats"
                  label="Seats (Row, Column)"
                  placeholder="[3, 2], [4, 3], [2, 3], [3, 4]"
                  value={this.state.seats}
                  onChange={this.handleInput}
                  required
                />
                <Form.Input
                  name="passengers"
                  label="No of Passengers"
                  placeholder="30"
                  value={this.state.passengers}
                  onChange={this.handleInput}
                  required
                />
              </Form>
              {this.state.error && (
                <Message negative>
                  <Message.Header>Input Error</Message.Header>
                  <p>{this.state.error}</p>
                </Message>
              )}
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              Cancel
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Create"
              onClick={this.handleSubmit}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalInput;
