import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";
class Layout extends React.Component {
  componentDidMount = () => {
    const cursor = document.querySelector(".cursor");

    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    window.addEventListener("mousedown", (event) => {
      cursor.style.height = "5px";
      cursor.style.width = "5px";
    });

    window.addEventListener("mouseup", (event) => {
      cursor.style.height = "3px";
      cursor.style.width = "3px";
    });

    const options = { duration: 1000 };
    Aos.init(options);
  };
  render() {
    return (
      <React.Fragment>
        <div class="page">
          <div className="flex flex-row overflow-hidden">
            {this.props.children}
          </div>
          <div class="cursor"></div>
        </div>
      </React.Fragment>
    );
  }
}
export default Layout;
