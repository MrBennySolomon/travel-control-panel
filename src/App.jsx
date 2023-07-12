import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const deleteHandler = (e) => {
    fetch(`https://64aeed80c85640541d4dec17.mockapi.io/data/${e.target.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      fetchData();
    });
  };

  const fetchData = () => {
    fetch("https://64aeed80c85640541d4dec17.mockapi.io/data", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((value) => {
      value.json().then((response) => {
        setData(response);
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>יעד</th>
            <th>שם</th>
            <th>טלפון</th>
            <th>אימייל</th>
            <th>מבוגרים</th>
            <th>ילדים</th>
            <th>גיל הילדים</th>
            <th>חדרים</th>
          </tr>
        </thead>
        <tbody>
          {data.map((client) => (
            <tr id={client.id} key={client.id}>
              <td>{client.destination}</td>
              <td>{client.name}</td>
              <td>{client.phone}</td>
              <td>{client.email}</td>
              <td>{client.adults}</td>
              <td>{client.children}</td>
              <td>{client.childrenAge}</td>
              <td>{client.rooms}</td>
              <td>
                <button id={client.id} onClick={deleteHandler}>
                  מחק
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
