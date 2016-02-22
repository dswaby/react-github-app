var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var UserProfile = require('./Github/UserProfile')


var Profile = React.createClass({
	getInitialState: function() {
		return {
			notes: ["note1", "note2"],
			bio: {
				name: "Rando Name"
			},
			repos:["repos1", "repo2"]
		};
	},
	render: function() {
		return (
			<div className="row">
		        <div className="col-md-4">
		        	<UserProfile username={this.props.params.username} bio={this.state.bio} />
		        </div>
		        <div className="col-md-4">
		        	<Repos repos={this.state.repos} />
		        </div>
		        <div className="col-md-4">
		         	<Notes notes={this.state.notes} />
		        </div>
		      </div>
		);
	}
});

module.exports = Profile;