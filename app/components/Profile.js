var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var UserProfile = require('./Github/UserProfile');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');

var Profile = React.createClass({
 	mixins: [ReactFireMixin],
	getInitialState: function() {
		return {
			notes: ["note1", "note2"],
			bio: {
				name: "Rando Name"
			},
			repos:["repos1", "repo2"]
		};
	},
	
	componentDidMount: function() {
		this.ref = new Firebase('https://githob.firebaseio.com/');
		var childRef = this.ref.child(this.props.params.username);
		this.bindAsArray(childRef, 'notes');
	},
	componentWillUnmount: function() {
		this.unbind('notes');
	},
	handleAddNote: function(newNote) {
		// add new note to firebase
		this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
	},
	render: function() {
		return (
			<div className="row">
		        <div className="col-md-4">
		        	<UserProfile username={this.props.params.username} bio={this.state.bio} />
		        </div>
		        <div className="col-md-4">
		        	<Repos username={this.props.params.username} repos={this.state.repos} />
		        </div>
		        <div className="col-md-4">
		         	<Notes 
		         		username={this.props.params.username} 
		         		notes={this.state.notes} 
		         		addNote={this.handleAddNote} />
		        </div>
		      </div>
		);
	}
});

module.exports = Profile;