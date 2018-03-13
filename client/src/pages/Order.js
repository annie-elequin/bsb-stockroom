import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Container,Row,Col,Button,Table,Input,Form} from 'reactstrap';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import NumericInput from 'react-numeric-input';
import Navigation from '../components/NavBar.js';
import keyIndex from 'react-key-index';
import dateFormat from 'dateformat';

import Select from 'react-select';
import 'react-select/dist/react-select.css';


// USING THE SELECT THING
// <Select options={options} value={this.state.profState} name="language" placeholder="Choose a professor..." onChange={val => console.log(val)}/>
// more help: https://swizec.com/blog/dropdown-inputs-react/swizec/7224


export default class Order extends React.Component {

	constructor(){
		super();

		// var dbInfo = {
		// 	items: dbItems,
		// 	dept: dbDept,
		// 	prof: dbProf,
		// 	grant: dbGrant
		// }

		this.state = {
			dbInfo: localStorage.getItem('dbInfo'),
			orderItems: [],
			empty: true,
			itemState: '',
			// numState: 0,
			deptState: '',
			profState: '',
			grantState: '',
			showAdd: true,
			showModal: false
		}

		this.addItem = this.addItem.bind(this);
		// this.confirmAdd = this.confirmAdd.bind(this);
		// this.cancelAdd = this.cancelAdd.bind(this);
		this.toggle = this.toggle.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.hashID = this.hashID.bind(this);
		this.resetStates = this.resetStates.bind(this);
	}

	// var one = {
	//  item: "one",
	//  qua: 2,
	//  dept: "Physics",
	//  prof: "Nazzario",
	//  grant: "N/A"
 // }

 hashID(){
	 	 var length = 8;
		 var now  = new Date();
		 var timestamp = dateFormat(now, "yyyymmsshhMMdd");

		 var _getRandomInt = function( min, max ) {
			return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
		 }

		 var ts = timestamp.toString()
		 var parts = ts.split("").reverse();
		 var id = "";

		 console.log("timestamp: "+ts);

		 for( var i = 0; i < length; ++i ) {
			var index = _getRandomInt( 0, parts.length - 1 );
			id += parts[index];
		 }

		 console.log("id: "+id);
		 return id;
 }

 resetStates(){
	 this.setState({itemState: ''});
	 // this.setState({numState: 0});
	 this.setState({deptState: ''});
	 this.setState({profState: ''});
	 this.setState({grantState: ''});
 }

 addItem(e){
	 console.log("You are adding a new item.");

	 // var item = {_id: 123, item: "item 1", qua: 3, dept: "Bio", prof: "Adair", grant: "N/A"};

	 var q = document.getElementById('quantity').value;
	 console.log("QUA: "+q);

	 var k = this.hashID();
	 console.log("key: "+k);
	 var item = {_id: k, item: this.state.itemState.label, qua: q, dept: this.state.deptState.label,
		 	prof: this.state.profState.label, grant: this.state.grantState.label};

	 this.resetStates();

	 this.setState({empty:false});
	 this.state.orderItems.push(item);
	 this.toggle();
 }



 // confirmAdd(e){
	//  console.log("You confirmed adding the new item.");
	//  this.setState({showForm:false});
	//  this.setState({showAdd: true});
	//  this.setState({showSubmitButtons: false});
 //
	//  e.preventDefault();
 //
	//  /*
	//  var item = document.getElementById('itemSelect').value;
	//  var quantity = document.getElementById('quantity').value;
	//  var dept = document.getElementById('dept').value;
	//  var prof = document.getElementById('prof').value;
	//  var grant = document.getElementById('grant').value;
	//  */
 // }

 // cancelAdd(e){
	//  console.log("Cancelled Add.");
 //
	//  this.setState({showForm:false});
	//  this.setState({showAdd: true});
	//  this.setState({showSubmitButtons: false});
 //
	//  // document.getElementById('itemSelect').value = null;
	//  // document.getElementById('quantity').value = null;
	//  // document.getElementById('dept').value = null;
	//  // document.getElementById('prof').value = null
	//  // document.getElementById('grant').value = null;
 // }

 removeItem(key){
	 console.log("boop");
	 console.log(key);

	 var len = this.state.orderItems.length;
	 var index = -1;
	 for(var i = 0; i < len; i++){ // iterate through each item
		 if(this.state.orderItems[i]._id === key){
			 index = i;
			 break;
		 } // end 'if item equals key'
	 } // end 'for each item'

	 this.state.orderItems.splice(index,1); // remove the item at that index
	 this.setState({orderItems: this.state.orderItems}); // set the new order thing as the state

	 if(this.state.orderItems.length === 0){ // check if the items is empty, if it is, set true
		 this.setState({empty:true});
	 }
 }

toggle(){
	this.setState({showModal: !this.state.showModal});
}

	render() {
		const data = this.state.orderItems;
		const ItemList = data.map((d) => <Item key={d._id} id={d._id} itemName={d.item} qua={d.qua} dept={d.dept}
						prof={d.prof} grant ={d.grant} action={this.removeItem} />);

		var itemOptions = [
      {value: "dry-ice", label: "Dry Ice"},
      {value: "alcohol", label: "Alcohol"},
      {value: "gloves", label: "Gloves"}
    ];

		var deptOptions = [
      {value: "bio", label: "Biology"},
      {value: "chem", label: "Chemistry"},
      {value: "phy", label: "Physics"}
    ];

		var profOptions = [
      {value: "a", label: "Adair"},
      {value: "h", label: "Hodson"},
      {value: "none", label: "N/A"}
    ];

		var grantOptions = [
      {value: "1", label: "Grant 1"},
      {value: "another", label: "Another Grant"},
      {value: "none", label: "N/A"}
    ];

		return (
        <div>
				<Navigation/>
          ORDER PAGE<br/>
          This page is for users to place their order.<br/>
          <ul>
            <li><Link to="/review">Done</Link></li>
          </ul><br/>

					{/****************************************************/}

					<Container fluid={true}>

					<Row>
							{/* TODO - pull name dynamically from DB */}
							<Col className="text-left">
								<span className="h2">Annie Mathis</span>
							</Col>
					</Row>

					<Row>
							{/* TODO - pull ID dynamically from DB */}
							<Col className="text-left">
							<span className="h4 text-muted font-italic">12345678</span>
							</Col>
					</Row>

					{/* THIS ROW CONTAINS: 'Quick Add' Text */}
						<Row className="order-row">
							<Col className="text-center">
							<span className="h2">Quick Add</span>
							</Col>
						</Row>

					{/* THIS ROW CONTAINS: Quick Add Buttons */}
						<Row className="order-row">

							<Col className="text-center">
								<Button disabled color="secondary" size="sm">Dry Ice</Button>&nbsp;&nbsp;
								<Button disabled color="secondary" size="sm">Gloves</Button>&nbsp;&nbsp;
								<Button disabled color="secondary" size="sm">Item</Button>&nbsp;&nbsp;
								<Button disabled color="secondary" size="sm">Test Tubes</Button>
							</Col>
						</Row>

					{/* THIS ROW CONTAINS: the list of items that the user has ordered */}
						<Row className="order-row">
							<Col>
							{/* TABLE CONTAINING ORDER DETAILS */}
							{/* TODO - connect to the object/make dynamic */}
								<Table striped responsive size="sm">
								{/* HEADERS */}
					        <thead>
					          <tr>
					            <th>Item *</th>
					            <th>No. *</th>
					            <th>Dept. *</th>
											<th>Prof.</th>
											<th>Grant</th>
											<th></th>
					          </tr>
					        </thead>

									{/* CONTENT */}

									<tbody>

									{/*

					          <tr>
					            <th scope="row">Dry Ice</th>
					            <td>5</td>
					            <td>Biology</td>
											<td>Adair</td>
											<td>Williamson Fund</td>
											<td className="text-center"><Button color="danger" size="sm">X</Button></td>
					          </tr>

					          <tr>
					            <th scope="row">Test Tubes</th>
					            <td>2</td>
					            <td>Chemistry</td>
											<td>Hodson</td>
											<td>N/A</td>
											<td className="text-center"><Button color="danger" size="sm">X</Button></td>
					          </tr>

										*/}

										{ItemList}

										<Modal isOpen={this.state.showModal} toggle={this.toggle}>
						          <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
						          <ModalBody>
													<Form>
													<Select id="item" options={itemOptions} value={this.state.itemState.value} placeholder="Choose an Item..."
																onChange={val=> this.setState({itemState:val}) } required/>

													<br/>
													<NumericInput id="quantity" className="form-control" name="quantity" min={0} mobile />

													<br/>
													<Select id="department" options={deptOptions} value={this.state.deptState.value} placeholder="Choose a Dept..."
																onChange={val=> this.setState({deptState:val})} required/>

													<br/>
													<Select id="professor" options={profOptions} value={this.state.profState.value} placeholder="Choose a Professor..."
																onChange={val=> this.setState({profState:val})} required/>

													<br/>
													<Select id="grant" options={grantOptions} value={this.state.grantState.value} placeholder="Choose a Grant..."
																onChange={val=> this.setState({grantState:val})} required/>

													</Form>
						          </ModalBody>
						          <ModalFooter>
						            <Button color="success" onClick={this.addItem}>Add This Item</Button>{' '}
						            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
						          </ModalFooter>

						        </Modal>

					        </tbody>
					      </Table>
							</Col>
						</Row>

						{this.state.empty ?
							<Row>
								<Col className="text-center h5 font-italic">
								No Items Added
								</Col>
							</Row>
							: null
						}

						{/* THIS ROW CONTAINS: the "add item" button */}
						<Row className="order-row">

							<Col className="text-right align-top">
								{this.state.showAdd && <Button color="primary" size="md" onClick={this.toggle}>+ Add Item</Button>}
							</Col>

						</Row>

					</Container>

        </div>
		);
	}
}

class Item extends React.Component {

	render(){
		return(
			<tr>
				<th scope="row">{this.props.itemName}</th>
				<td>{this.props.qua}</td>
				<td>{this.props.dept}</td>
				<td>{this.props.prof}</td>
				<td>{this.props.grant}</td>
				<td className="text-center"><Button color="danger" size="sm" onClick={() => this.props.action(this.props.id)}>X</Button></td>
			</tr>
		);
	}
}

Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}

Row.propTypes = {
  noGutters: PropTypes.bool
}

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}

Table.propTypes = {
// Pass in a Component to override default element
tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
size: PropTypes.string,
bordered: PropTypes.bool,
striped: PropTypes.bool,
dark: PropTypes.bool,
hover: PropTypes.bool,
responsive: PropTypes.bool
};
