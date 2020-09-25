import React, {useState} from 'react';
import '../App.scss';
import '../styles/Editor.scss'
function Editor() {
  const [radio, setRadio] = useState("box");
  return (
    <div class="editor z-top">
        <h1 class="center">Editor</h1>
        <div class="container row center">
          <div class="content">
            <div class="column">
              <p>Geometries: {radio} </p>
              <form class="column">
                <label>
                <input type="radio" value="box" checked={radio === "box"} onChange={(e) => {setRadio(e.target.value)}}/> Box
                </label>
                <label>
                  <input type="radio" value="torus" checked={radio === "torus"} onChange={(e) => {setRadio(e.target.value)}} /> Torus  
                </label>
                <label>
                  <input type="radio" value="cylinder" checked={radio === "cylinder"} onChange={(e) => {setRadio(e.target.value)}} /> Cylinder
                </label>
                <label>
                  <input type="radio" value="cone" checked={radio === "cone"} onChange={(e) => {setRadio(e.target.value)}} /> Cone
                </label>
              </form>
                {radio === "box" ? 
                <div>
                  <div>
                    <p>Width</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                  <div>
                    <p>Height</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                  <div>
                    <p>Depth</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                </div>
                : null}
                {radio === "torus" ? 
                <div>
                  <div>
                    <p>Radius</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                  <div>
                    <p>Tube</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                  <div>
                    <p>Radial</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                  <div>
                    <p>Tubular</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                </div>
                : null}
                {radio === "cylinder" ? 
                <div>
                  <div>
                    <p>Radius top</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                  <div>
                    <p>Radius bottom</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                  <div>
                    <p>Height</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                  <div>
                    <p>Radial</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                </div>
                : null}
                {radio === "cone" ? 
                <div>
                  <div>
                    <p>Radius</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                  <div>
                    <p>Height</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                  <div>
                    <p>Radial Segments</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>
                </div>
                : null}
            </div>
          </div>
          <div class="content">
          </div>
        </div>
    </div>
  );
}

export default Editor;

// Preview -> ny sida där man kan titta på sitt skapade gemoetri och dra runt med musen
// när man går tillbaka till editor sidan ska inställningarna finnas kvar
