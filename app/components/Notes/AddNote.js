var React = require('react');

var AddNote = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		addNote: React.PropTypes.func.isRequired
	},
	setRef: function(ref) {
		this.note = ref;
	},
	handleSubmit: function() {
		var newNote = this.note.value;
		// clear form
		this.note.value = "";
		// calls the function that was defined in Profile.js and passed using props
		this.props.addNote(newNote);
	},
	render: function() {
		return (
			<div className="input-group">
				<input type="text" className="form-control" placeholder="Add Note" ref={this.setRef} />
				<span className="input-group-btn">
					<button className="btn btn-default" type="button" onClick={this.handleSubmit}>
					Submit
					</button>
				</span>
			</div>
		)
	}
})

module.exports = AddNote;