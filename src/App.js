import React from "react";

import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Counter } from "./Counter";
import { getForgeProjectsSaga } from "./redux/reducers/forge";

import { getPokemonSaga } from "./redux/reducers/sagaPokemon";
import SelectedElement from "./SelectedElement";
import { ReducerComponent } from "./TGTG/ReducerComponent";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const state = useSelector((state) => state);

  const { loadingState, pokemon } = state.sagaPokemon;
  const { loadingForgeState, projects } = state.forge;

  // console.group("App component");

  // console.log(loadingForgeState, projects);
  // console.groupEnd();
  const dispatch = useDispatch();

  function handelPokemon() {
    dispatch(getPokemonSaga());
  }
  function handelForge() {
    console.log("forge");
    dispatch(getForgeProjectsSaga());
  }

  // const data = {
  //   12: { id: 12, name: "abed", data: "12-03-2022" },
  //   13: { id: 13, name: "alaa", data: "13-03-2022" },
  //   14: { id: 14, name: "abbas", data: "14-03-2022" },
  // };
  const data = [
    { id: 12, name: "abed", data: "12-03-2022" },
    { id: 13, name: "alaa", data: "13-03-2022" },
    { id: 14, name: "abbas", data: "14-03-2022" },
  ];

  const [dates, setDates] = React.useState(data || []);

  const findItemById = (id, arr) => arr.find((val) => val.id === id);
  const editEvent = (id) => {
    const resultId = findItemById(12, data);
    console.log({ resultId });
    // const selectedEvent = dates.map((date) => {
    //   if (date.id === id) {
    //     return { id: id, name: "@@", data: "14-03-2022" };
    //   } else return date || [];
    // });

    // console.log(selectedEvent);

    const indexing = dates.findIndex((val) => val.id === id);
    dates[indexing] = { id: id, name: "@@", data: "14-03-2022" };
    const n = [...dates];
    setDates(n);
    // dates[id] = { id: id, name: "@@", data: "14-03-2022" };

    // const pre = { ...dates };
    // console.log(pre);
    // setDates(pre);
  };

  React.useEffect(() => {
    console.log("re-render");
  }, [dates]);
  const currentDate = "2018-11-01";
  const schedulerData = [
    {
      startDate: "2018-11-01T09:45",
      endDate: "2018-11-01T11:00",
      title: "Meeting",
    },
    {
      startDate: "2018-11-01T12:00",
      endDate: "2018-11-01T13:30",
      title: "Go to a gym",
    },
  ];

  const [id, setId] = React.useState(null);
  const setFolderById = () => {
    setId(123);
  };
  return (
    <div className="App">
      {/* <SelectedElement /> */}
      <div className="date">
        {dates.map((val) => (
          <div className="value">
            <p onClick={() => editEvent(val.id)}>
              {val.data} <br />
              {val.name}
            </p>{" "}
          </div>
        ))}
      </div>
      <h2>counter: {counter}</h2>
      <Counter />
      <button onClick={handelPokemon}>handelPokemon API</button>
      <button onClick={handelForge}>Forge API</button>
      {/* <ReducerComponent /> */}
      <button onClick={setFolderById}> Find Folder</button>

      <div>{id && <Folder folderId={id} />}</div>
    </div>
  );
}

const Folder = ({ folderId }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(time);
  }, []);

  return (
    <div>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <h3>This is the folder id {folderId}</h3>
      )}
    </div>
  );
};
export default App;
