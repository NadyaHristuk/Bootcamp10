import { connect } from 'react-redux';
import NoteFilter from './NoteFilter';

import { notesActions, notesSelectors } from '../../modules/notes';

const mapStateToProps = state => ({
  value: notesSelectors.getFilter(state),
});

const mapDispatchToProps = { onChange: notesActions.changeFilter };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteFilter);
