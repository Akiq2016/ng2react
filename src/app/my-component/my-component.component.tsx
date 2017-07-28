import * as React from "react";

export default class MyComponent extends React.Component<any, any> {
	render() {
		const {name} = this.props;
		return <div>Hi {name}, this is a react component and my props is {JSON.stringify(this.props)}</div>;
	}
}