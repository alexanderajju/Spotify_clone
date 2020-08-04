export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token:
    "BQA-nm3pIf14MA4vNsa8Li_23tE0p7fut3w0mWkenbLtIoHOFqZYUFrIPN9kTz01HKUcWMrKsBv0NaWsXW360v8YqSo3p2Ot1e2oCM9DQM39yL50I0ctJaTnXC8Mzh_KsFbDTjES8fmqc_mDZSmB1JjclmleO5qjY1WxyDGqXlx-PiqAf-R7 ",
};
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
