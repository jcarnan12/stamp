"use strict";

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Input = React.createClass({
	displayName: "Input",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "Input" },
			React.createElement("input", { id: this.props.name, autocomplete: "false", required: true, type: this.props.type, placeholder: this.props.placeholder }),
			React.createElement("label", { "for": this.props.name })
		);
	}
});

var Modal = React.createClass({
	displayName: "Modal",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "Modal" },
			React.createElement(
				"form",
				{ onSubmit: this.props.onSubmit, className: "ModalForm" },
				React.createElement(Input, { id: "name", type: "text", placeholder: "Jack-Edward Oliver" }),
				React.createElement(Input, { id: "username", type: "email", placeholder: "mrjackolai@gmail.com" }),
				React.createElement(Input, { id: "password", type: "password", placeholder: "password" }),
				React.createElement(
					"button",
					null,
					"Log in ",
					React.createElement("i", { className: "fa fa-fw fa-chevron-right" })
				)
			)
		);
	}
});

var App = React.createClass({
	displayName: "App",

	getInitialState: function getInitialState() {
		return { mounted: false };
	},

	componentDidMount: function componentDidMount() {
		this.setState({ mounted: true });
	},

	handleSubmit: function handleSubmit(e) {
		this.setState({ mounted: false });
		e.preventDefault();
	},

	render: function render() {

		var child;
		if (this.state.mounted) {
			child = React.createElement(Modal, { onSubmit: this.handleSubmit });
		}

		return React.createElement(
			"div",
			{ className: "App" },
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: "example", transitionEnterTimeout: 500, transitionLeaveTimeout: 300 },
				child
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));