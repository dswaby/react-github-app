var React = require('react');
var Router = require('react-router');

var Profile = React.createClass({
	getInitialState: function() {
		return {
			notes: [],
			bio: {},
			repo:[]
		};
	},
	render: function() {
		return (
			<div className="Profile"></div>
		);
	}
});

module.exports = Profile;