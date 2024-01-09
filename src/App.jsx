import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    { itemName: 'suger', qty: '5kg', bought: false, uid: crypto.randomUUID() },
    { itemName: 'apples', qty: '1kg', bought: true, uid: crypto.randomUUID() },
  ]);

  return (
    <main className="container h-100vh">
      {/* Heading */}
      <div className="row justify-content-center align-items-center">
        <div className="col">
          <h1 className="text-center">shopping List</h1>
        </div>
      </div>

      {/* Buttons */}
      <div className="btn-row row justify-content-end mt-4">
        <div className="col-auto">
          <button type="button" className="btn btn-primary text-nowrap btn-sm">
            Save List
          </button>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-danger text-nowrap btn-sm">
            Delete List
          </button>
        </div>
      </div>

      {/* add new item */}
      <div className="row mt-4">
        <div className="col-auto mb-3">
          <label htmlFor="itemName" className="col-form-label">
            Item Name
          </label>
        </div>
        <div className="col-auto mb-3">
          <input type="text" id="itemName" className="form-control" />
        </div>
        <div className="col-auto mb-3">
          <label htmlFor="itemQuantity" className="col-form-label">
            Item Quantity
          </label>
        </div>
        <div className="col-auto mb-3">
          <input type="text" id="itemQuantity" className="form-control" />
        </div>
        <div className="col-sm-12 col-md-auto mb-3">
          <button type="button" className="btn btn-success">
            Add Item
          </button>
        </div>
      </div>

      {/* list */}
      <div className="row mt-4">
        <div className="col-sm-6">
          <ul className="list-group">
            {list.map((item) => {
              return (
                <li
                  key={item.uid}
                  className="list-group-item d-flex justify-content-around align-items-center"
                >
                  <span className="mx-4">
                    <input
                      type="checkbox"
                      className="form-check-input me-1"
                      checked={item.bought}
                    />
                    {item.itemName}
                  </span>
                  <span className="badge bg-primary rounded-pill">
                    {item.qty}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
