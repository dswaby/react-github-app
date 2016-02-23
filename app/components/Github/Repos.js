var React = require('react');

var Repos = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		repos: React.PropTypes.array.isRequired
	},
	render: function() {
		// repos = this.state.repos.map(function(repo){
		// 	return <li className="list-group-item">{repo}</li>
		// })
		
		return (
			<div className="Repos">
				<h3>Repos</h3>
				<ul className="list-group">
				</ul>
			</div>
		);
	}
});

module.exports = Repos;