import React from 'react'
import Router from 'react-router'
import Repos from './Github/Repos'
import Notes from './Notes/Notes'
import UserProfile from './Github/UserProfile'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import getGithubInfo from '../utils/helpers'


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

	init: function(username) {
		var childRef = this.ref.child(username);
		this.bindAsArray(childRef, 'notes');

		getGithubInfo(username)
			.then(function(data){
				this.setState({
					bio: data.bio,
					repos: data.repos
				})
			}.bind(this)
		)
	},
 	
	componentDidMount: function() {
		this.ref = new Firebase('https://githob.firebaseio.com/');
		this.init(this.props.params.username);
	},
	componentWillReceiveProps: function(nextProps) {
		this.unbind('notes');
		this.init(nextProps.params.username)
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
export default Profile