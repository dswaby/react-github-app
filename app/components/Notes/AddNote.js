import React from 'react'

class AddNote extends React.Component {
	handleSubmit() {
		var newNote = this.note.value;
		// clear form
		this.note.value = "";
		// calls the function that was defined in Profile.js and passed using props
		this.props.addNote(newNote);
	}
	setRef(ref) {
		this.note = ref;
	}
	render() {
		return (
			<div className="input-group">
				<input type="text" className="form-control" placeholder="Add Note" ref={(ref) => this.setRef(ref)} />
				<span className="input-group-btn">
					<button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}>
					Submit
					</button>
				</span>
			</div>
		)
	}
}

AddNote.propTypes = {
	username: React.PropTypes.string.isRequired,
	addNote: React.PropTypes.func.isRequired
}

export default AddNote