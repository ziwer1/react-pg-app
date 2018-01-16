import React from 'react';
import {ListGroupItem, Input} from 'reactstrap';






export default class ListItem extends React.Component{

	constructor(props){
		super(props);
	}

	renderListItem(){
		if (this.props.item.completed == false){
			return <ListGroupItem>&nbsp; <Input type="checkbox" className="float-right" /> &nbsp; {this.props.item.item}&nbsp; {this.props.id}</ListGroupItem>
		}else{
			return <ListGroupItem>&nbsp; <Input type="checkbox" className="float-right" checked /> &nbsp; <s>{this.props.item.item}&nbsp; {this.props.id}</s></ListGroupItem>
		}
	}

	render(){
		{/*<ListGroupItem onClick={this.props.clickHandler}>{this.props.children}</ListGroupItem>*/}
		return this.renderListItem()
	}


}