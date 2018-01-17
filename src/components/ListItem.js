import React from 'react';
import {ListGroupItem, Input} from 'reactstrap';






export default class ListItem extends React.Component{

	constructor(props){
		super(props);
	}

	renderListItem(){
		if (this.props.item.completed == false){
			return <ListGroupItem onClick={() => this.props.checkUncheckAction(this.props.index)}>&nbsp; <Input type="checkbox" className="float-right" /> &nbsp; {this.props.item.item}&nbsp; {this.props.item.id}</ListGroupItem>
		}else{
			return <ListGroupItem onClick={() => this.props.checkUncheckAction(this.props.index)}>&nbsp; <Input type="checkbox" className="float-right" checked /> &nbsp; <s>{this.props.item.item}&nbsp; {this.props.item.id}</s></ListGroupItem>
		}
	}

	render(){
		{/*<ListGroupItem onClick={this.props.clickHandler}>{this.props.children}</ListGroupItem>*/}
		return this.renderListItem()
	}


}