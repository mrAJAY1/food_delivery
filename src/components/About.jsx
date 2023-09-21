import React from "react";
import Shimmer from "./Shimmer";
import NameCard from "./NameCard";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent Constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
    this.timer = setInterval(()=>{
      console.log("interval running")
    },1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>Name Card</h1>
        <NameCard name="Ajay" contact="@mrAJAY1" location="Wayanad" />
      </div>
    );
  }
}

export default About;
