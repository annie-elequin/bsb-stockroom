import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Container,Row,Col,Button,Table,Form,Input} from 'reactstrap';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import NumericInput from 'react-numeric-input';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

// USING THE SELECT THING
// <Select options={options} value={this.state.profState} name="language" placeholder="Choose a professor..." onChange={val => console.log(val)}/>
// more help: https://swizec.com/blog/dropdown-inputs-react/swizec/7224

export default class ItemForm extends React.Component {
	constructor (props){
		super(props);

    this.state = {
      itemState: '',
      profState: '',
      grantState: ''
    }
	}

  handleItem(e){

  }

	render(){
		if(this.props.info){
			const items = this.props.info.items;
			const dept = this.props.info.dept;
			const prof = this.props.info.prof;
			const grants = this.props.info.grant;
		}

    var itemOptions = [
      {value: "one", label: "item one"},
      {value: "two", label: "item two"},
      {value: "three", label: "item three"}
    ];
		return(
			<div>
			<Modal isOpen={this.props.show} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>Modal Title</ModalHeader>

				<ModalBody>
					lorem ipsum
				</ModalBody>

				<ModalFooter>
					<Button color="primary" onClick={this.toggle}>Do Something</Button>&nbsp;
					<Button color="secondary" onClick={this.toggle}>Cancel</Button>
				</ModalFooter>
			</Modal>
			</div>
		);
	}
}
