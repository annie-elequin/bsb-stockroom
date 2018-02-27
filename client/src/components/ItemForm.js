import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Container,Row,Col,Button,Table,Form,Input} from 'reactstrap';
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
			<tr>
						<th scope="row" className="col-sm-3">
								<Select options={itemOptions} value={this.state.itemState} name="item" placeholder="Choose an item..." onChange={val => console.log(val)}/>
                </th>
						<td className="col-sm-2"><NumericInput id="quantity" className="form-control" value={0} min={0} precision={0} mobile required /></td>
						<td className="col-sm-2">
								<Input type="select" id="dept" required/>
						</td>
						<td className="col-sm-2">
								<Input type="select" id="prof" />
						</td>
						<td className="col-sm-2">
								<Input type="select" id="grant" />
						</td>
						<td className="text-center"><Button color="danger" size="sm" disabled>X</Button></td>
			</tr>
		);
	}
}
