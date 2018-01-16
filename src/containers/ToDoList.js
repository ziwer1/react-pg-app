import React from 'react';
import {connect} from 'react-redux';
import {Form, Container, Row, Col} from 'reactstrap';

import {ListItem, AddFilter} from 'components';




class ToDoList extends React.Component {

	constructor(props){
		super(props);
	}

	renderListItems(){
		//filter numbers should be constants imported.

		/*return this.props.listItems.map((listItem) => {
			if(this.props.filter == 1){
				//filter numbers should be constants imported.
				if(listItem.completed == false){
					<ListItem>listItem.item</ListItem>
				}
			}else if(this.props.filter == 2){
				if(listItem.completed == true){
					<ListItem>listItem.item</ListItem>
				}
			}else{
				<ListItem>listItem.item</ListItem>
			}

		});*/

		let ish;

		if(this.props.filter == 1){

			ish = this.props.listItems.map((listItem, i) => {
				if(listItem.completed == false){
					return <ListItem key={listItem.id} index={i} item={listItem}/>
				}
			});
		}else if(this.props.filter == 2){
			ish = this.props.listItems.map((listItem, i) => {
				if(listItem.completed == true){
					return <ListItem key={listItem.id} index={i} item={listItem}/>
				}
			});
		}else{
			ish = this.props.listItems.map((listItem, i) => {
				return <ListItem key={listItem.id} index={i} item={listItem}/>
			});
		}
		/*
		//let unique = Math.floor(Math.random() * 1000000);
		let ish = this.props.listItems.map((listItem) => 
				<ListItem>{listItem.item}</ListItem>
			);
		*/

		return ish;
		

	}

	render(){
		return(
			<Container>
		        <Row>
					<Col md='6'>
						
							<AddFilter/>
							{this.renderListItems()}
						
					</Col>
	          		<Col md='6'>

					</Col>
				</Row>
			</Container>

			);
	}
}

function mapStateToProps(state){
	return {
		//use the object spread operator here ...state.toDoList
		listItems: state.toDoList.listItems,
		filter: state.toDoList.filter
	};
}

export default connect(mapStateToProps)(ToDoList);