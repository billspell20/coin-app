import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    <div id="footerdiv">
      <p>Text link <a href="https://google.com">here.</a></p>
      <p>Copyright ⓒ {year}</p>
    </div>
    </footer>
  );
}

export default Footer;