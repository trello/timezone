/** @jsx React.DOM */

var React        = require('react');
var TimezoneList = require('./timezoneList.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      timeFormat: 'h:mm a'
    };
  },
  toggleTimeFormat: function() {
    this.setState({
      timeFormat: this.state.timeFormat === 'h:mm a' ? 'H:mm' : 'h:mm a'
    });
  },
  render: function() {
    return (
      <div className="container">
        <TimezoneList time={this.props.time}
                      timeFormat={this.state.timeFormat}
                      timezones={this.props.timezones} />
      </div>
    );
  }
});
