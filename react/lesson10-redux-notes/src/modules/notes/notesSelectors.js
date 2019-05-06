const getItems = state => state.notes.items;

const getFilter = state => state.notes.filter;

const getVisibleNotes = state => {
  const items = getItems(state);
  const filter = getFilter(state).toLowerCase();

  return items.filter(item => item.text.toLowerCase().includes(filter));
};

export default { getItems, getFilter, getVisibleNotes };
