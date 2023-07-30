import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ cart, wish, prod, setProd }) {
  const searchStr = async () => {
    const str = document.getElementsByClassName("searchbar");
    console.log("STR", str[0].value);

    const res = await fetch(
      `https://dummyjson.com/products/search?q=${str[0].value}`
    );
    res.json().then((data) => {
      console.log(data);
      setProd(data.products);
    });
  };

  return (
    <div className="">
      <Navbar expand="lg" className=" bg-secondary">
        <Container fluid>
          <Navbar.Brand href="/" className="text-light" title="eShop">
            <img
              src="https://scontent.fcok6-1.fna.fbcdn.net/v/t39.30808-1/361380306_588907310070600_8885548353306408357_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=c6021c&_nc_ohc=7AtGeXDeKj4AX-pygzN&_nc_ht=scontent.fcok6-1.fna&oh=00_AfDym7Yv6jK2hsdafEnweIr7sHtKsMQJCTs6KuVjO4em0Q&oe=64C75289"
              alt=""
              width={50}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="text-light" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <Link
                  to="/category"
                  title="Category"
                  className="ms-2 me-2 text-light text-decoration-none"
                >
                  Categories
                </Link>

                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 searchbar"
                  title="Type to Search for Items"
                  aria-label="Search"
                  onKeyUp={searchStr}
                />

                <Link
                  to="/cart"
                  title="View Cart"
                  className="ms-2 me-2 text-light text-decoration-none"
                >
                  Cart<sup>{cart.length}</sup>
                </Link>
                <Link
                  to="/wishlist"
                  title="View Wishlist"
                  className="ms-2 text-light text-decoration-none"
                >
                  Wishlist<sup>{wish.length}</sup>
                </Link>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
