import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Loaders from "../components/Loaders";

const Home = () => {
  const [data, setData] = useState([]);
  const [load, isLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [datafetch, setFetch] = useState(false);
  const [error, setError] = useState(false);
  const [add, setAdd] = useState([]);

  useEffect(() => {
    isLoad(true);
    fetch(`https://randomuser.me/api/?page=${page}&results=20`)
      .then((res) => res.json())
      .then((data) => {
        setData((oldusr) => {
          return [...new Set([...oldusr, ...data.results.map((user) => user)])];
        });
        setAdd((oldusr) => {
          return [...new Set([...oldusr, ...data.results.map((user) => user)])];
        });
        setFetch(data.results.length > 0);
        isLoad(false);
      })
      .catch((err) => {
        setError(true);
        isLoad(false);
      });
  }, [page]);

  const watcher = React.useRef();
  const lastUserElementRef = React.useCallback(
    (node) => {
      if (load) return;
      if (watcher.current) watcher.current.disconnect();
      watcher.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && datafetch) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) watcher.current.observe(node);
    },
    [load, datafetch]
  );

  return (
    <div className="main">
      <h1>Contact-List</h1>
      <div className="scroll">
        <div className="container">
          {add.map((user, index) => {
            if (add.length === index + 1) {
              return (
                <div
                  className="scrollflow"
                  key={user.email}
                  ref={lastUserElementRef}
                >
                  <div className="scrollflowName">
                    <img src={user.picture.thumbnail} alt="user" />
                  </div>
                  <div className="scrollflownamego">
                    {user.name.first} {user.name.last}
                  </div>
                  <div className="scrollflowEmail">{user.email}</div>
                  <div className="scrollflowPhone">{user.phone}</div>
                  <div className="scrollflowCountry">
                    {user.location.country}
                  </div>
                  <div className="age">{user.dob.age}</div>
                  <div className="gender">{user.gender}</div>
                </div>
              );
            } else {
              return (
                <div className="scrollflow" key={user.email}>
                  <div className="scrollflownamego">
                    <h2>
                      {user.name.first} {user.name.last}
                    </h2>
                  </div>
                  <br />
                  <div className="scrollflowName">
                    <img src={user.picture.thumbnail} alt="user" />
                  </div>
                  <br />
                  <br />
                  <div className="scrollflowEmail">Email: {user.email}</div>
                  <div className="scrollflowPhone">Mobile: {user.phone}</div>
                  <div className="scrollflowCountry">
                    Country: {user.location.country}
                  </div>
                  <div className="age">Age: {user.dob.age}</div>
                  <div className="gender">Gender: {user.gender}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div>{load && <Loaders />}</div>
      <div>{error && "Error"}</div>
    </div>
  );
};
export default Home;
