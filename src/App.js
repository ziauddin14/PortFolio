import React, { useEffect } from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/688a550430d7ed192853f4b6/1j1e5o6o6";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      var s0 = document.getElementsByTagName("script")[0];
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;