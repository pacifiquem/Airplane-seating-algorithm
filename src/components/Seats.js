import React, { Component } from 'react';

class Seats extends Component {
  isLoading = seatingData => {
    if (!seatingData) {
      return (
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      );
    }
    return (
      <div className="pt">
        <h3 style={{display: 'inline', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white'}}>Remaining Passengers: {seatingData.remainingPassengers}</h3>
        <div style={{marginTop: '5vh'}}>
          {seatingData.seats.map((row, rowI) => {
            return (
              <div key={'row' + rowI}>
                {row.map((seat, seatI) => {
                  if (Number.isInteger(seat)) {
                    return (
                      <div key={'seat' + seatI} className="ui grey circular label">
                        {seat}
                      </div>
                    );
                  }
                  if (seat === 'seat') {
                    return (
                      <div key={'seat' + seatI} className="ui green circular label">
                        A
                      </div>
                    );
                  }
                  return <div key={'seat' + seatI} className="ui white circular label"></div>;
                })}
            </div>
          );
        })}
        </div>
      </div>
    );
  };
  render() {
    const { seatingData } = this.props;
    return <div>{this.isLoading(seatingData)}</div>;
  }
}

export default Seats;
