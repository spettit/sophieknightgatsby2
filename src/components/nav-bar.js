import React, { Component } from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Navstrip = styled.div`
  ${"" /* margin-bottom: 1.45rem; */} position: fixed;
  width: 100vw;
  z-index: 1000;
  top: 0;
  background-color: black;
  opacity: 0.8;
  @media (max-width: 400px) {
    margin-bottom: 0px;
  }
`

const NavContent = styled.div`
  margin: 0px auto;
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`

const NavButtons = styled.div``

const Title = styled.h1`
  margin: 0px;
  color: white;
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`

const LinkContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: 850px) {
    margin-left: 3px;
    margin-right: 3px;
  }
`

const Li = styled.li`
  &:hover {
    color: white;
  }
`

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      submenu: false,
    }
  }

  handleClick() {
    if (this.state.submenu) {
      this.setState({ submenu: false })
    }
  }
  render() {
    return (
      <Navstrip>
        <NavContent>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Title>Sophie Knight</Title>
          </Link>
          <NavButtons>
            {/* <LinkContainer>
        
          <Link
            exact
            to="/"
            style={{ textDecoration: "none", color: "lightgray" }}
            activeStyle={{ color: "white" }}
          >
          
          Home
          
            
          </Link>
        </LinkContainer> */}
            <LinkContainer
              onClick={this.handleClick.bind(this)}
              onMouseEnter={() => this.setState({ submenu: true })}
              onMouseLeave={() => this.setState({ submenu: false })}
            >
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "lightgray" }}
                activeStyle={{ color: "white" }}
              >
                About
              </Link>

              {/* <ul
              style={{
                position: "absolute",
                top: "25px",
                left: "-30px",
                color: "lightgray",
                backgroundColor: "black",
                listStyleType: "none",
                padding: "10px",
                display: this.state.submenu ? 'block' : 'none',
              }}
            >
              <Link 
                to="/about#bio"
                style={{ textDecoration: "none", color: "lightgray" }}
                activeStyle={{ color: "white" }}>
              <Li>Biography</Li>
              </Link>
              <Link 
                to="/about#method"
                style={{ textDecoration: "none", color: "lightgray" }}
                activeStyle={{ color: "white" }}>
              <Li>Method</Li>
              </Link>
              
              <Li>Awards</Li>
              <Link
                to="/about#exhibitions"
                style={{ textDecoration: "none", color: "lightgray" }}
                activeStyle={{ color: "white" }}
              >
                <Li>Exhibitions</Li>
              </Link>
              <Li>In Print</Li>
            </ul> */}
            </LinkContainer>
            <LinkContainer>
              <Link
                to="/galleries"
                style={{ textDecoration: "none", color: "lightgray" }}
                activeStyle={{ color: "white" }}
              >
                Work
              </Link>
            </LinkContainer>
            {/* <LinkContainer>
          <Link
            to="/exhibitions"
            style={{ textDecoration: "none", color: "lightgray" }}
            activeStyle={{ color: "white" }}
          >
            Exhibitions
          </Link>
        </LinkContainer> */}
            <LinkContainer>
              <Link
                to="/lessons"
                style={{ textDecoration: "none", color: "lightgray" }}
                activeStyle={{ color: "white" }}
              >
                Lessons
              </Link>
            </LinkContainer>
            <LinkContainer>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "lightgray" }}
                activeStyle={{ color: "white" }}
              >
                Contact
              </Link>
            </LinkContainer>
          </NavButtons>
        </NavContent>
      </Navstrip>
    )
  }
}

export default Navbar
