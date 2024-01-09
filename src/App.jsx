import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

function App() {
  const [list, setList] = useState([]);

  const [itemName, setItemName] = useState('');
  const [qty, setQty] = useState('');

  const saveLocalList = () => {
    localStorage.setItem('list', JSON.stringify(list));
  };

  const getLocalList = () => {
    const localList = localStorage.getItem('list');
    if (localList) {
      setList(JSON.parse(localList));
    }
  };

  //load local list on application start
  useEffect(() => {
    getLocalList();
  }, []);

  const clearList = () => {
    setList([]);
    localStorage.removeItem('list');
  };

  const addItem = () => {
    setList([...list, { itemName, qty, bought: false, uid: uniqid() }]);
    setItemName('');
    setQty('');
  };

  return (
    <main className="container h-100vh">
      {/* Heading */}
      <div className="row justify-content-center align-items-center my-4">
        <div className="col bg-primary">
          <h1 className="text-center text-white">shopping List</h1>
        </div>
      </div>

      {/* Buttons */}
      <div className="btn-row row justify-content-end mt-4">
        <div className="col-auto">
          <button
            onClick={saveLocalList}
            type="button"
            className="btn btn-primary text-nowrap "
          >
            Save List
          </button>
        </div>
        <div className="col-auto">
          <button
            onClick={clearList}
            type="button"
            className="btn btn-danger text-nowrap "
          >
            Clear List
          </button>
        </div>
      </div>

      {/* add new item */}
      <div className="row mt-4 justify-content-center ">
        <div className="col-sm-12 col-md-2 ">
          <label htmlFor="itemName" className="col-form-label">
            Item Name
          </label>
        </div>
        <div className="col-sm-12 col-md-3 ">
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={itemName}
            className="form-control"
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
        </div>
        <div className="col-sm-12 col-md-2 ">
          <label htmlFor="itemQuantity" className="col-form-label">
            Item Quantity
          </label>
        </div>
        <div className="col-sm-12 col-md-3 mb-3">
          <input
            type="text"
            name="qty"
            id="itemQuantity"
            value={qty}
            className="form-control"
            onChange={(e) => {
              setQty(e.target.value);
            }}
          />
        </div>
        <div className="col-sm-12 col-md-2">
          <button onClick={addItem} type="button" className="btn btn-success">
            Add Item
          </button>
        </div>
      </div>

      {/* list */}
      <div className="row mt-4 justify-content-center">
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
                      onChange={(e) => {
                        // Modify current item
                        const currentItem = list.find(
                          (current) => current.uid === item.uid
                        );
                        currentItem.bought = e.target.checked;

                        // re-render list
                        setList([...list]);
                      }}
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
