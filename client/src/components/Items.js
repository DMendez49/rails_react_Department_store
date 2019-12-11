import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Card, Header, Icon, } from "semantic-ui-react";


class Items extends React.Component {
  state = { items: [], };

  componentDidMount() {
    axios.get("/api/items")
      .then( res => {
        this.setState({ items: res.data, });
      })
  };

  deleteItem(id){
    axios.delete(`/api/items/${id}`)
    .then(res =>{
      this.setState({items: this.state.items.filter(m => m.id !== id ),})
    })
  }

  renderItems = () => {
    const { items, } = this.state;

    if (items.length <= 0)
      return <Header as="h2">No Items</Header>

    return items.map(item => (
      <Card color="black">
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>{item.department}</Card.Meta>
          <Card.Description>{item.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button color="blue inverted" size="tiny" as={Link} to={`/items/${item.id}`}><Icon name="eye"></Icon>
            View
          </Button>

          <Button color="red inverted" size="tiny" onClick={() => this.deleteItem(item.id)}> <Icon name="trash"></Icon>
            Delete
          </Button>
        </Card.Content>
      </Card>
    ))
  };

  render() {
    return (
      <div>
        <Header as="h1">Items</Header>
        <br />
        <br />
        <Card.Group color="black">
          { this.renderItems() }
        </Card.Group>
      </div>
    );
  };
};

export default Items;

