export function fetchAnything(url, dispatch) {
  fetch(url)
    .then(res => res.json())
    .then(res => dispatch({ type: "get-users", payload: res }))
    .catch(err => console.log(err));
}
