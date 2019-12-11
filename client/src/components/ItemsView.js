import React from "react";
import axios from "axios";
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
      .catch(console.log)
  };

  render() {
    const { name, description, department, price, } = this.state.item;
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
        <Button color="black" onClick={this.props.history.goBack}>
          Back
        </Button>
      </div>
    );
  };
};

export default ItemsView;