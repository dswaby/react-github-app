import React from 'react'
import NotesList from './NotesList'
import AddNote from './AddNote'

class Notes extends React.Component {
	render() {
		// destructuring
		const { username } = this.props
		return (
			<div className="Notes">
				<h3>Notes for {username}</h3>
				<AddNote addNote={this.props.addNote} username={username}/>
				<NotesList notes={this.props.notes} />
			</div>
		)
	}
}

Notes.propTypes = {
	username: React.PropTypes.string.isRequired,
	notes: React.PropTypes.array.isRequired,
	addNote: React.PropTypes.func.isRequired
}
	
export default Notes