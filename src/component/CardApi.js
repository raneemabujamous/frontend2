import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export class CardApi extends Component {
  render() {
    return (
      <>
        {this.props.dataFromApi.map((obj) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={obj.thumbnail} />
              <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text>{obj.credit_line}</Card.Text>
                <Button
                  variant="primary"
                  onClick={(e) => {
                    this.props.addtofav(obj);
                  }}
                >
                  add to faveroite
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </>
    );
  }
}

export default CardApi;
