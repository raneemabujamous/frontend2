import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export class CardFavitem extends Component {
  render() {
    return (
      <>
        {this.props.fromPostreq.map((obj) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={obj.thumbnail} />
              <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text>{obj.credit_line}</Card.Text>
                <Button
                  variant="primary"
                  onClick={(e) => {
                    this.props.deleteitem(obj.slug);
                  }}
                >
                  delete item
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </>
    );
  }
}

export default CardFavitem;
