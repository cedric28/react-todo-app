import React from "react";


function Index(props) {
  const { children } = props;

  return (
    <div className="App">
        <header>     
            {children}
        </header>
    </div>
  );
}

export default Index;
