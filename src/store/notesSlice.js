const initialState = [
  {
    id: 5,
    text: "AAAAA",
    color: "orange",
    editing: false,
    active: true,
  },
  {
    id: 6,
    text: "BBBBBB",
    color: "green",
    editing: false,
    active: false,
  },
];

let updatedNotes;

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case "notes/add":
      // Close other notes in editing model

      updatedNotes = state.map((note) => {
        if (note.active) {
          return { ...note, editing: false };
        }
        return note;
      });
      return [
        ...updatedNotes,
        {
          id: 5,
          text: "",
          color: action.payload,
          editing: true,
          active: true,
        },
      ];
    case "notes/edit":
      updatedNotes = state.map((note) => {
        if (note.id === action.payload) {
          return { ...note, editing: true };
        }
        return note;
      });
      return updatedNotes;
    case "notes/cancel":
      updatedNotes = state.map((note) => {
        if (note.id === action.payload) {
          return { ...note, editing: false };
        }
        return note;
      });
      return updatedNotes;
    case "notes/update":
      updatedNotes = state.map((note) => {
        if (note.id === action.payload.id) {
          return { ...note, editing: false, text: action.payload.text };
        }
        return note;
      });
      return updatedNotes;
    case "notes/inverseActive":
      updatedNotes = state.map((note) => {
        if (note.id === action.payload) {
          return { ...note, editing: false, active: !note.active };
        }
        return note;
      });
      return updatedNotes;
    case "notes/delete":
      updatedNotes = state.filter((note) => note.id !== action.payload);
      return updatedNotes;
    case "notes/deleteAll":
      updatedNotes = state.filter((note) => note.active === true);
      return updatedNotes;
    default:
      return state;
  }
}
