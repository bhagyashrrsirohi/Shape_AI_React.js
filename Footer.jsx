import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (<footer>
    copyright @ {currYear}

    </footer>);
}
export default Footer