var React = require('react');

var Repos = React.createClass({
	render: function() {
		return (
			<div className="Repos">
				<h3>Repos</h3>
				REPOS: {this.props.repos}
			</div>
		);
	}
});

module.exports = Repos;