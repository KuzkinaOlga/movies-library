// export function getWatchinLocal() {
//     const WathinData = JSON.parse(localStorage.getItem("ADD_TO_WATCHED_FILM"));
//     console.log(WathinData)}
export function load  ()  {
  try {
    const serializedState = localStorage.getItem("ADD_TO_WATCHED_FILM");
    console.log(serializedState === null ? undefined : JSON.parse(serializedState)) ;
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

// export default {
//   load
// };

