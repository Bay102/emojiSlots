import React from "react";
// each button rest to a random value on click
class EmojiSlot extends React.Component {
  constructor() {
    super();
    this.emojis = ["🥺", "💩", "🤑", "🎰", "🇺🇸", "🙈", "😏", "💣", "☘️"];

    this.state = {
      emojiSet1: "",
      emojiSet2: "",
      emojiSet3: "",
      emojiSet4: "",
      emojiSet5: "",
      emojiSet6: "",
      emojiSet7: "",
      emojiSet8: "",
      emojiSet9: "",
    };
  }

  randomize = (emojiArray) => {
    const i = Math.floor(Math.random() * emojiArray.length);
    return emojiArray[i];
  };

  spin = () => {
    this.setState({
      emojiSet1: this.randomize(this.emojis),
      emojiSet2: this.randomize(this.emojis),
      emojiSet3: this.randomize(this.emojis),
      emojiSet4: this.randomize(this.emojis),
      emojiSet5: this.randomize(this.emojis),
      emojiSet6: this.randomize(this.emojis),
      emojiSet7: this.randomize(this.emojis),
      emojiSet8: this.randomize(this.emojis),
      emojiSet9: this.randomize(this.emojis),
    });
  };

  render() {
    const {
      emojiSet1,
      emojiSet2,
      emojiSet3,
      emojiSet4,
      emojiSet5,
      emojiSet6,
      emojiSet7,
      emojiSet8,
      emojiSet9,
    } = this.state;
    return (
      <div className="gameBox">
        <div className="row row1">
          <div className="box box1">{emojiSet1}</div>
          <div className="box box2">{emojiSet2}</div>
          <div className="box box3">{emojiSet3}</div>
        </div>
        <div className="row row2">
          <div className="box box4">{emojiSet4}</div>
          <div className="box box5">{emojiSet5}</div>
          <div className="box box6">{emojiSet6}</div>
        </div>
        <div className="row row3">
          <div className="box box7">{emojiSet7}</div>
          <div className="box box8">{emojiSet8}</div>
          <div className="box box9">{emojiSet9}</div>
        </div>
        <div className="spinWrapper">
          <button onClick={this.spin} className="spinButton">
            CLICK TO SPIN
          </button>
        </div>
      </div>
    );
  }
}

export default EmojiSlot;
