import React from "react";
import images from "./images.json";
import ImageContainer from "./component/image-container/image-container.component";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div className="container">
        {images.map(res => {
          return (
            <div key={res.id} className="wrapper">
              <ImageContainer
                src={res.urls.regular}
                thumb={res.urls.thumb}
                height={res.height}
                width={res.width}
                alt={res.alt_description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;