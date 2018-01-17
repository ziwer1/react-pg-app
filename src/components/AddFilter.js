import React from 'react';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';






export default class AddFilter extends React.Component{

	constructor(props){
		super(props)

		this.state = {addItemFieldValue:""}
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnSubmit(e){
		e.preventDefault();


		let newItem = {
			id:Math.floor(Math.random() * 1000000),
			item:this.state.addItemFieldValue,
			completed:false
		}

		this.setState({addItemFieldValue:""});

		//console.log(this.state.addItemFieldValue);

		this.props.addItemAction(newItem);
	}

	handleOnChange(e){
		//console.log(e.target.value);
		this.setState({addItemFieldValue:e.target.value});
	}

	handleOnClick(e){
		let filter = Number(e.target.value);
		this.props.selectFilterAction(filter);
	}

	render(){
		return(
			<Form onSubmit={this.handleOnSubmit}>
				<Input placeholder="Add Item" bsSize="sm"  ref="itemField" value={this.state.addItemFieldValue} onChange={this.handleOnChange}/>

				<span><strong>List Filter</strong></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	            <Input type="radio" name="filter" value="0" onClick={this.handleOnClick} /> All &nbsp; &nbsp; &nbsp;
	            <Input type="radio" name="filter" value="1" onClick={this.handleOnClick} /> Active &nbsp; &nbsp; &nbsp;
	            <Input type="radio" name="filter" value="2" onClick={this.handleOnClick} /> Completed

	        
	             {/*<FormGroup check inline>
	              <Label check>
	                <Input type="radio" name="filter" />{' '}
	                All
	              </Label>
	            </FormGroup>
	            <FormGroup check inline>
	              <Label check>
	                <Input type="radio" name="filter" />{' '}
	                Active
	              </Label>
	            </FormGroup>
	            <FormGroup check inline>
	              <Label check>
	                <Input type="radio" name="filter" />{' '}
	                Completed
	              </Label>
	            </FormGroup>*/}

		       	

		    </Form>
		);
	}


}