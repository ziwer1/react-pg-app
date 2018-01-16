import React from 'react';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';






export default class AddFilter extends React.Component{

	render(){
		return(
			<Form>
				<Input placeholder="Add Item" bsSize="sm" />
				
				<span><strong>List Filter</strong></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	            <Input type="radio" name="filter" /> All &nbsp; &nbsp; &nbsp;
	            <Input type="radio" name="filter" /> Active &nbsp; &nbsp; &nbsp;
	            <Input type="radio" name="filter" /> Completed

	        
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