import React from 'react';
import {ListGroupItem, Input} from 'reactstrap';






export default class ListItem extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		{/*<ListGroupItem onClick={this.props.clickHandler}>{this.props.children}</ListGroupItem>*/}
		return(
			<ListGroupItem>&nbsp; <Input type="checkbox" className="float-right" /> &nbsp; {this.props.children}</ListGroupItem>
		);
	}


}