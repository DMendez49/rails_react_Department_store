import React from "react";
import axios from "axios";
import Departments from "./Departments";
import { Link ,} from "react-router-dom";
import { Button, Header, Segment, } from "semantic-ui-react";

class ItemsView extends React.Component {
  state = { item: {}, };

  componentDidMount() {
    const { id, } = this.props.match.params;

    axios.get(`/api/items/${id}`)
      .then( res => {
        this.setState({ item: res.data, });
      })
      // .catch(console.log)
      axios.get(`/api/items/${id}/departments`)
      .then(res =>{
        this.setState({departments: res.data})
      })
  };

  render() {
    const {item: { name, description, department, price, } , departments} = this.state
    const {id, } = this.props.match.params
    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
          <Header as="h3">{ department }</Header>
          <Header as="h5" color="grey">${ price }</Header>
          <Header as="p">{ description }</Header>
        </Segment>
          <br />
          <br />
        <div style={{ display: "fles", alignItems: "center", justifyContent: "space-between", }}>
        <Header as="h2"> Departments: </Header>
          <Button as= {Link} color="blue" to={`/items/${id}/new-department`}> Add Department </Button>
            </div>
          <hr />
        <Departments departments={departments}/>
          <br />
          <br />
        <Button color="black" onClick={this.props.history.goBack}>
          Back
        </Button>
      </div>
    );
  };
};

export default ItemsView;
