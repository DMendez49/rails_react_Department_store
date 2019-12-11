import React from "react";
import axios from "axios";
import {Header, Form, Button, } from "semantic-ui-react";

class ItemsForm extends React.Component{
  defaultValues = { name:"", description:"", department:"", price:"",};
  state = {... this.defaultValues, };

  //second argument is target
  handleChange = (e, {name, value, }) => {
    this.setState({[name]: value, });
  };

  handleSubmit = (e)=> {
    e.preventDefault();
    axios.post("/api/items", {...this.state, })
    .then(res => {
      this.props.history.push("/items");
    })
    this.setState({...this.defaultValues, });
  };

  render(){
    const {name, department, description, price, } = this.state;

    return (
      <div>
        <Header as= "h1">New Item</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
            />
             <Form.Input
              label="Description"
              placeholder="Description"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
            </Form.Group>
         <Form.Group widths="equal">
            <Form.Input
              label="Department"
              placeholder="Department"
              name="department"
              value={department}
              onChange={this.handleChange}
              required
            />
              <Form.Input
              label="Price"
              placeholder="Price"
              name="price"
              type="number"
              value={price}
              onChange={this.handleChange}
              required
              />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}
export default ItemsForm;