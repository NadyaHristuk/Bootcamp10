import axios from "axios";
import actions from "./notesActions";

const fetchNotes = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get("http://localhost:3004/notes");
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const addNote = text => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .post("http://localhost:3004/notes", { text, complited: false })
    .then(({ data }) => dispatch(actions.addNoteSeccsess(data)))
    .catch(error => dispatch(actions.fetchError(error)));
};

const deleteNote = id => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .delete(`http://localhost:3004/notes/${id}`)
    .then(() => {
      dispatch(actions.deleteNoteSeccses(id));
    })
    .catch(error => {
      dispatch(actions.fetchError(error));
    });
};

export default { fetchNotes, addNote, deleteNote };
