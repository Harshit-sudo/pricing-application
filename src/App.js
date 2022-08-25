import "./App.css";
import { AiOutlineCheck } from "react-icons/ai";

function App() {
  return (
    <section className="">
      <div className="container-stack">
        <div className="stack">
          <div className="stack-left">
            <div>
              <p className="stack-para">Pricing</p>
              <h2 className="stack-title">Get lifetime access</h2>
            </div>
            <p className="stack-para-2">
              Choose from over 210+ beautiful and responsive components.
            </p>
          </div>
          <div className="stack-right">
            <div className="card">
              <div className="card-pop">
                <p>popular</p>
              </div>
              <div className="card-desc">
                <div className="card-price-wrap">
                  <div className="card-price">
                    <h2 className="card-price-tag">$148</h2>
                    <div className="card-detail">
                      <p style={{ fontSize: "1.25rem", fontWeight: "600", margin: '0' }}>
                        Application
                      </p>
                      <p style={{ marginTop: "0.25rem", color: "#4a5568" }}>
                        For accessible applications
                      </p>
                    </div>
                  </div>
                  <ul className="card-list">
                    <li className="card-list-entry">
                      <div className="card-tick"><AiOutlineCheck /></div>
                      <p className="card-list-para">Application components</p>
                    </li>
                    <li className="card-list-entry">
                      <div className="card-tick"><AiOutlineCheck /></div>
                      <p className="card-list-para">Unlimited projects</p>
                    </li>
                    <li className="card-list-entry">
                      <div className="card-tick"><AiOutlineCheck /></div>
                      <p className="card-list-para">Lifetime access</p>
                    </li>
                    <li className="card-list-entry">
                      <div className="card-tick"><AiOutlineCheck /></div>
                      <p className="card-list-para">Customer support</p>
                    </li>
                    <li className="card-list-entry">
                      <div className="card-tick"><AiOutlineCheck /></div>
                      <p className="card-list-para">Free updates</p>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="card-btn">Get started</button>
            </div>
            <div className="card">
              <div className="card-desc">
                <div className="card-price-wrap">
                  <div className="card-price">
                    <h2 className="card-price-tag">$148</h2>
                    <div className="card-detail">
                      <p style={{ fontSize: "1.25rem", fontWeight: "600",  margin: '0' }}>
                        Application
                      </p>
                      <p style={{ marginTop: "0.25rem", color: "#4a5568" }}>
                        For accessible applications
                      </p>
                    </div>
                  </div>
                  <ul className="card-list">
                    <li className="card-list-entry">
                      <div className="card-tick"><AiOutlineCheck /></div>
                      <p className="card-list-para">Application components</p>
                    </li>
                    <li className="card-list-entry">
                      <div className="card-tick"><AiOutlineCheck /></div>
                      <p className="card-list-para">Unlimited projects</p>
                    </li>
                    <li className="card-list-entry">
                      <div className="card-tick"><AiOutlineCheck /></div>
                      <p className="card-list-para">Lifetime access</p>
                    </li>
                    <li className="card-list-entry">
                      <div className="card-tick"><AiOutlineCheck /></div>
                      <p className="card-list-para">Customer support</p>
                    </li>
                    <li className="card-list-entry">
                      <div className="card-tick"><AiOutlineCheck /></div>
                      <p className="card-list-para">Free updates</p>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="card-btn">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
