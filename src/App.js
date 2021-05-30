import "./App.css";
import ZingTouch from "zingtouch";
import React, { Component } from "react";
import Screen from "./screen/ScreenItems";

// State component for Ipod
// For OK button
// For Songs
// // For Albums
class App extends Component {
  state = {
    val: 0,
    ok: 0,
    player: false,
    songId: -1,
    isPlaySong: false,
    darkMode: false,
    songs: [
      {
        id: 1,
        image:
          "https://th.bing.com/th/id/OIP.3RYTrPUeoWrLY4OSSzuheQHaHa?pid=Api&rs=1",
        name: "Suicide Squad",
        src: "6ZUg5S0Ef9M",
      },
      {
        id: 2,
        image:
          "https://i.pinimg.com/originals/f1/00/aa/f100aa967aa9fd2b175a684d99d81dec.jpg",
        name: "Welcome",
        src: "79DijItQXMM",
      },
      {
        id: 3,
        image:
          "https://www.fortressofsolitude.co.za/wp-content/uploads/2016/06/Twenty-One-Pilots-Suicide-Squad-Music-Video.jpg",
        name: "Twenty Pilot",
        src: "UprcpdwuwCg",
      },
      {
        id: 4,
        image: "https://i.ytimg.com/vi/W1cx6z-6E6Y/maxresdefault.jpg",
        name: "Welcome To the Party",
        src: "p4-D_x3ojbc",
      },
      {
        id: 5,
        image: "https://i.cdn.newsbytesapp.com/images/l158_8901594443996.jpg",
        name: "Mera Naam Kizie",
        src: "3fOiX_nfsgg",
      },
    ],
    albums: [
      {
        id: 1,
        image:
          "https://th.bing.com/th/id/OIP.3RYTrPUeoWrLY4OSSzuheQHaHa?pid=Api&rs=1",
        name: "Suicide Squad",
        songs: 7,
      },
      {
        id: 2,
        image:
          "https://i.pinimg.com/originals/f1/00/aa/f100aa967aa9fd2b175a684d99d81dec.jpg",
        name: "Welcome",
        songs: 7,
      },
      {
        id: 3,
        image:
          "https://www.fortressofsolitude.co.za/wp-content/uploads/2016/06/Twenty-One-Pilots-Suicide-Squad-Music-Video.jpg",
        name: "Twenty Pilot",
        songs: 7,
      },
      {
        id: 4,
        image:
          "https://th.bing.com/th/id/OIP.3RYTrPUeoWrLY4OSSzuheQHaHa?pid=Api&rs=1",
        name: "Suicide Squad",
        songs: 7,
      },
      {
        id: 5,
        image:
          "https://th.bing.com/th/id/OIP.3RYTrPUeoWrLY4OSSzuheQHaHa?pid=Api&rs=1",
        name: "Suicide Squad",
        songs: 7,
      },
    ],
    artists: [
      {
        id: 1,
        name: "Charlie Chever",
        image:
          "https://timesofindia.indiatimes.com/thumb/msid-65103169,imgsize-188390,width-800,height-600,resizemode-4/65103169.jpg",
        followers: "1m",
      },
      {
        id: 2,
        name: "A R Rahman",
        image:
          "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/01/22/781288-463569-rahman.jpg",
        followers: "2.5m",
      },
    ],
    playlists: [
      {
        id: 1,
        name: "Party",
        image:
          "https://th.bing.com/th/id/OIP.bwwQF0CFd019rC3wMlfdYgHaE8?pid=Api&rs=1",
      },
      {
        id: 2,
        name: "Jazz",
        image: "https://i.ytimg.com/vi/c8YIlU_30Kk/maxresdefault.jpg",
      },
    ],
  };
  // Function for moving the active element using Zing touch Rotate
  // Using Zingtouch tap for Moving Back
  touchEvent = (button) => {
    var target = document.querySelector(`.${button}`);
    var region = new ZingTouch.Region(target);
    var currentAngle = 0;
    console.log(button);
    // For Tap event
    var regionOne = new ZingTouch.Region(target, true, false);
    var longTap = new ZingTouch.Tap({
      maxDelay: 1000,
    });
    regionOne.bind(target, longTap, function (e) {
      backMenu();
    });
    // For Rotate event
    region.bind(target, "rotate", function (e) {
      currentAngle += e.detail.distanceFromLast;
      // If angle is greater than 40deg than move to the next active element
      if (currentAngle > 35) {
        setOutput();
      }
    });
    // Output Screen Function To increment the Value of VAl
    var setOutput = () => {
      if (this.state.ok !== 1) {
        // console.log("this is", this);
        if (this.state.val === 4) {
          this.setState((state) => ({ val: -1 }));
        }
        this.setState(
          (state) => ({ val: state.val + 1 }),
          () => {
            console.log("updated state value", this.state.val);
          }
        );
      }
      currentAngle = 0;
    };
    // To Return Back to the Menu
    var backMenu = () => {
      if (button === "button-menu") {
        this.setState((state) => ({ ok: 0 }));
        if (this.state.player === true) {
          this.setState((state) => ({ player: !state.player }));
        }
        this.setState({ ok: 0 });
        if (this.state.isPlaySong === true) {
          this.setState((state) => ({ isPlaySong: !state.isPlaySong }));
        }
      }
    };
  };
  // function for tap ok button
  okButton = () => {
    this.setState({ ok: 1 });
    console.log(this.state.ok);
  };
  // Function to change the background color of ok button when presses
  handleClick = (event) => {
    let okClick = document.querySelector(".button-ok");
    if (event.type === "mousedown") {
      okClick.style.backgroundColor = "#7ab08f";
    } else {
      okClick.style.backgroundColor = "rgb(7, 82, 51)";
    }
  };
  // When User Clicks an Song
  handlePlayer = (song) => {
    this.setState((state) => ({ player: !state.player }));
    this.setState((state) => ({ songId: song.id }));
    console.log("Player and Song Id is:", this.state.player, song.id);
  };
  // To play the songs
  play = () => {
    let pbtn = document.getElementById("playBtn");
    this.setState({ isPlaySong: !this.state.isPlaySong });
    pbtn.value = "⏸️";
    console.log("play");
  };
  handleUpButton = () => {
    console.log("ok btn is:", this.state.ok);
    if (this.state.ok === 0) {
      if (this.state.ok === 0 && this.state.val === 0) {
        this.setState({ val: 4 });
      } else {
        this.setState((state) => ({
          val: state.val - 1,
        }));
      }
    } else if (this.state.ok === 1) {
      // document.getElementByI("screen-songs").scroll(50, 0);
      console.log("I'm in screen");
      document.querySelector(".screen").scrollBy(0, -50);
    }
  };
  handleDownButton = () => {
    if (this.state.ok === 0) {
      if (this.state.val === 4) {
        this.setState({
          val: 0,
        });
      } else {
        this.setState((state) => ({
          val: state.val + 1,
        }));
      }
    } else if (this.state.ok === 1) {
      // document.getElementByI("screen-songs").scroll(50, 0);
      console.log("I'm in down screen");
      document.querySelector(".screen").scrollBy(0, 50);
    }
  };
  handleDarkMode = () => {
    this.setState((state) => ({ darkMode: !state.darkMode }));
  };
  // Moving to the component "Screen"and passing val, ok, songs, albums, artists ,handlePlayer
  // player, songId, playlists,play
  render() {
    let darkClass = "";
    if (this.state.darkMode) {
      darkClass += "dark";
    }
    return (
      <div>
        <div className="App">
          <Screen
            val={this.state.val}
            ok={this.state.ok}
            songs={this.state.songs}
            albums={this.state.albums}
            artists={this.state.artists}
            handlePlayer={this.handlePlayer}
            player={this.state.player}
            songId={this.state.songId}
            playlists={this.state.playlists}
            play={this.play}
            isPlaySong={this.state.isPlaySong}
            darkMode={this.state.darkMode}
            className={darkClass}
          ></Screen>
          <div className="App-bg">
            <div className="App-buttons">
              <div
                title="Go back to Menu and Rotate to move up and down"
                className="button-menu"
                onMouseOver={() => this.touchEvent("button-menu")}
                onClick={() => this.backMenu}
              >
                Menu
              </div>
              <div
                className="button-right"
                onMouseOver={() => this.touchEvent("button-right")}
              >
                <i class="fas fa-fast-forward"></i>
              </div>
              <div
                className="button-left"
                onMouseOver={() => this.touchEvent("button-left")}
              >
                <i class="fas fa-fast-backward"></i>
              </div>
              <div
                className="button-play"
                onMouseOver={() => this.touchEvent("button-play")}
              >
                <i class="fas fa-play"></i>
              </div>
              <div
                title="move Up"
                className="button-up"
                onClick={this.handleUpButton}
              >
                <i class="far fa-caret-square-up"></i>
              </div>
              <div
                title="Move Down"
                className="button-down"
                onClick={this.handleDownButton}
              >
                <i class="far fa-caret-square-down"></i>
              </div>
              <div
                title="Try Dark Mode"
                className="button-dark"
                onClick={this.handleDarkMode}
              >
                {this.state.darkMode ? (
                  <i class="far fa-lightbulb"></i>
                ) : (
                  <i class="fas fa-lightbulb"></i>
                )}
              </div>
              <div
                title="Okay Button"
                className="button-ok"
                onClick={this.okButton}
                onMouseDown={this.handleClick}
                onMouseUp={this.handleClick}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
