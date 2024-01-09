import React, { Component } from "react";
import FormNotes from "./FormNotes";
import NoteList from "./NoteList";
import Header from "./Header";

import { getInitialData, showFormattedDate } from "../utils/index";

class MakeNotes extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: ''
    };

    this.onAddNote = this.onAddNote.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.onMoveNotes = this.onMoveNotes.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch({ searchNote }) {
    this.setState({ search: searchNote }, () => {
      console.log(this.state.search);
    });
  }
  
  onDelete(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchive(id) {
    const notes = this.state.notes;
    const note = notes.find((note) => note.id === id);
    note.archived = true;
    this.setState({ notes });
  }

  onMoveNotes(id) {
    const notes = this.state.notes;
    const note = notes.find((note) => note.id === id);
    note.archived = false;
    this.setState({ notes });
  }

  onAddNote({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(Date()),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const hasNotesWithId = this.state.notes.some(
      (note) => note.id !== undefined
    );
    const hasNotesWithArchived = this.state.notes.some(
      (note) => note.archived !== false
    );
    
    const archivedNotes = this.state.notes.filter(
      (note) => note.archived === true
      )
      const notArchivedNotes = this.state.notes.filter(
        (note) =>    note.archived === false
        );
        // const querySearch = this.state.search
    // const notArchivedNotes = this.state.notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(querySearch.toLowerCase()));
    // const archivedNotes = this.state.notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(querySearch.toLowerCase()));

    return (
      <>
        <Header searchNote={this.onSearch} />
        <div className="note-app__body">
        <div className="note-input">
          <h2>Make Notes</h2>
          <FormNotes onAddNote={this.onAddNote} />
        </div>
        <h2>Your List Notes</h2>
        {hasNotesWithId ? (
          <NoteList
            notes={notArchivedNotes}
            onDelete={this.onDelete}
            name={"Archive"}
            onArchive={this.onArchive}
          />
        ) : (
          <p className="notes-list__empty-message">There is no Note here</p>
        )}
        <h2>Archive Notes</h2>
        {hasNotesWithArchived ? (
          <NoteList
            notes={archivedNotes}
            name={"Pindahkan"}
            onDelete={this.onDelete}
            onArchive={this.onMoveNotes}
          />
        ) : (
          <p className="notes-list__empty-message">There is no Note here</p>
        )}
      </div>
      </>
    );
  }
}

export default MakeNotes;
