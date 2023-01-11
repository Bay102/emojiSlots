import React from "react";
// each button rest to a random value on click 
class EmojiSlot extends React.Component {
   constructor() {
      super();
      this.emojis1 = ['🥺', '💩', '🤑', '🎰', '🇺🇸', '🙈', '😏', '💣',];
      this.emojis2 = ['🤑', '💣', '🤬', '🤑', '🤬', '🇺🇸', '👺', '🙈',];
      this.emojis3 = ['💩', '🥺', '🇺🇸', '🎰', '😏', '🤬', '💣', '🥺',];

      this.state = {
         emojiSet1: '',
         emojiSet2: '',
         emojiSet3: '',
      }
   }

   spin = () => {
    const i = Math.floor(Math.random() * this.emojis1.length);
    this.setState(
      {
         emojiSet1: this.emojis1[i],
         emojiSet2: this.emojis2[i],
         emojiSet3: this.emojis3[i],
      })
    }


   render() {
           const {emojiSet1, emojiSet2, emojiSet3} = this.state
      return (
        
         <div className="gameBox">
          <div className="row row1">
               <div className="box box1">{emojiSet3}</div>
               <div className="box box2">{emojiSet2}</div>
               <div className="box box3">{emojiSet1}</div>
            </div>
             <div className="row row2">
               <div className="box box4">{emojiSet1}</div>
               <div className="box box5">{emojiSet2}</div>
               <div className="box box6">{emojiSet3}</div>
            </div>
             <div className="row row3">
               <div className="box box7">{emojiSet2}</div>
               <div className="box box8">{emojiSet3}</div>
               <div className="box box9">{emojiSet1}</div>
            </div>
            <div className="spinWrapper">
               <button onClick={this.spin} className="spinButton">CLICK TO SPIN</button>
            </div>
         </div>
      )
   }
}

export default EmojiSlot ;