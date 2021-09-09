import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
//import { Button } from "react-bootstrap";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div class="d-flex flex-row">
      <div class="p-2">
        <Card style={{ width: "8.5rem" }}>
          <Card.Img
            variant="top"
            className="img-fluid"
            src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
          />
          <Card.Body>
            <a href="!#" class="link-primary">
              Top offers
            </a>
          </Card.Body>
        </Card>
      </div>
      <div class="p-2">
        <Card style={{ width: "8.5rem" }}>
          <Card.Img
            variant="top"
            src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
          />
          <Card.Body>
            <a href="!#" class="link-primary">
              Washing
            </a>
          </Card.Body>
        </Card>
      </div>
      <div class="p-2">
        <Card style={{ width: "8.5rem" }}>
          <Card.Img
            variant="top"
            src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
          />
          <Card.Body>
            <a href="!#" class="link-primary">
              Electronics
            </a>
          </Card.Body>
        </Card>
      </div>
      <div class="p-2">
        <Card style={{ width: "8.5rem" }}>
          <Card.Img
            variant="top"
            src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
          />
          <Card.Body>
            <a href="!#" class="link-primary">
              Mobiles
            </a>
          </Card.Body>
        </Card>
      </div>
      <div class="p-2">
        <Card style={{ width: "8.5rem" }}>
          <Card.Img
            variant="top"
            src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
          />
          <Card.Body>
            <a href="!#" class="link-primary">
              Appliances
            </a>
          </Card.Body>
        </Card>
      </div>
      <div class="p-2">
        <Card style={{ width: "8.5rem" }}>
          <Card.Img
            variant="top"
            src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
          />
          <Card.Body>
            <a href="!#" class="link-primary">
              Baby care
            </a>
          </Card.Body>
        </Card>
      </div>
      <div class="p-2">
        <Card style={{ width: "8.5rem" }}>
          <Card.Img
            variant="top"
            src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
          />
          <Card.Body>
            <a href="!#" class="link-primary">
              Fashion
            </a>
          </Card.Body>
        </Card>
      </div>
      <div class="p-2">
        <Card style={{ width: "8.5rem" }}>
          <Card.Img
            variant="top"
            src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
          />
          <Card.Body>
            <a href="!#" class="link-primary">
              Travel
            </a>
          </Card.Body>
        </Card>
      </div>
      <div class="p-2">
        <Card style={{ width: "8.5rem" }}>
          <Card.Img
            variant="top"
            src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
          />
          <Card.Body>
            <a href="!#" class="link-primary">
              Home
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Topbar;
