import React, { Component } from 'react';
import cuid from 'cuid';
import { connect } from 'react-redux';

class RestaurantInput extends Component {

   state = {
   text: ''
 }

 handleOnChange = event => {
   this.setState({
     text: event.target.value
   })
 }

 handleOnSubmit = event => {
  event.preventDefault();

  this.props.addRestaurant(this.state.text);

  this.setState({
    text: ''
  })
}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Restaurant</label>
                    <div className="col-md-5">
                      <input
                          className="form-control"
                          name="name"
                          type="text"
                          value={this.state.text}
                          onChange={this.handleOnChange}
                        />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <input type="submit" className="btn btn-default"/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RestaurantInput;
