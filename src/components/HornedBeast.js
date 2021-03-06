import { Component } from "react";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      liked: 0
    }
  }

handleClick = (e) => {
  this.setState({liked: this.state.liked + 1});
};

handlePicClick = (e) => {
  this.props.handlePicClick(this);
};

render(){
  return (
    <Card style={{ width: '18rem', height: '25rem' }} className="cards">
      <div onClick={this.handlePicClick}>
        <Card.Img variant="top" width='20px'
          src={this.props.image_url}
          alt={this.props.description}
          className = "image"
        />
      </div>
      <Card.Title className="title">
        {this.props.title}
      </Card.Title>
      <div className="like">
        <Button
          variant="primary"
          onClick={this.handleClick}
        >
          Like
        </Button>
        <p>{this.state.liked}</p>
      </div>
    </Card>
  )
}
}

export default Header;