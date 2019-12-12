import React from "react"
import {Segment, Header, } from "semantic-ui-react"

const Department = ({ title, body}) => (
  <Segment>
    <Header as="h1">{title}</Header>
    <span>{body}</span>
  </Segment>
)

export default Department;
