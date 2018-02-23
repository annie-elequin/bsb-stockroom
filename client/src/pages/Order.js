import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Container,Row,Col,Button,Table,Form,Input} from 'reactstrap';
import NumericInput from 'react-numeric-input';
import Navigation from '../components/NavBar.js';

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
			showForm: false
		}

		this.addItem = this.addItem.bind(this);
	}

	// var one = {
	//  item: "one",
	//  qua: 2,
	//  dept: "Physics",
	//  prof: "Nazzario",
	//  grant: "N/A"
 // }

 addItem(e){
	 console.log("You are adding a new item.");
	 this.setState({showForm:true});
 }

	render() {
		const data = this.state.orderItems;
		const ItemList = data.map((d) => <Item id={d._id} itemName={d.item} qua={d.qua} dept={d.dept} prof={d.prof} grant ={d.grant} />);
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

										{ItemList}
										{this.state.showForm?<ItemForm info={this.state.dbInfo}/>:null}

					        </tbody>
					      </Table>
							</Col>
						</Row>

						{/* THIS ROW CONTAINS: the "add item" button */}
						<Row className="order-row">

							<Col className="text-right">
								<Button color="primary" size="md" onClick={this.addItem}>+ Add Item</Button>
							</Col>
						</Row>
					</Container>

        </div>
		);
	}
}

class Item extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<tr>
				<th scope="row">{this.props.itemName}</th>
				<td>{this.props.qua}</td>
				<td>{this.props.dept}</td>
				<td>{this.props.prof}</td>
				<td>{this.props.grant}</td>
				<td className="text-center"><Button color="danger" size="sm">X</Button></td>
			</tr>
		);
	}
}

class ItemForm extends React.Component {
	constructor (props){
		super(props);

		this.submitForm = this.submitForm.bind(this);
	}

	submitForm(){

	}

	render(){
		if(this.props.info){
			const items = this.props.info.items;
			const dept = this.props.info.dept;
			const prof = this.props.info.prof;
			const grants = this.props.info.grant;
		}
		return(
			<tr>
						<th scope="row" className="col-sm-3">
								<Input type="select" name="item" id="itemSelect" >
									<option>One</option>
									<option>Two</option>
									<option>Three</option>
								</Input></th>
						<td className="col-sm-2"><NumericInput name="quantity" className="form-control" value={0} min={0} precision={0} mobile required /></td>
						<td className="col-sm-2">
								<Input type="select" name="dept" />
						</td>
						<td className="col-sm-2">
								<Input type="select" name="prof" />
						</td>
						<td className="col-sm-2">
								<Input type="select" name="grant" />
						</td>
						<td className="text-center"><Button color="danger" size="sm">X</Button></td>
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
