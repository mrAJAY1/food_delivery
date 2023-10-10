import React from "react";

class NameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "dummy_avatar",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mrAJAY1");
    const json = await data.json();
    this.setState({ userInfo: json });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="name-card">
        <p>count: {count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increase count
        </button>
        <h2>Name: {name}</h2>
        <h3>location: {location}</h3>
        <img src={avatar_url} alt="" />
      </div>
    );
  }
}

export default NameCard;
