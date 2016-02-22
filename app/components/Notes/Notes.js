var React = require('react');

var Notes = React.createClass({
	render: function() {
		return (
			<div className="Notes">
				<h3>Notes</h3>
				NOTES: {this.props.notes}
			</div>
		);
	}
});

module.exports = Notes;