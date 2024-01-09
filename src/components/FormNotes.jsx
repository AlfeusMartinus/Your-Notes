import React, { Component } from "react";

export class FormNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxKarakter: 50,
      sisaKarakter: 50,
    };

    this.onJudulChange = this.onJudulChange.bind(this);
    this.onCatatanChange = this.onCatatanChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onJudulChange(event) {
    const { value } = event.target;

    if (value.length > this.state.maxKarakter) {
      alert("The title must not exceed 50 characters");
      event.target.value = value.slice(0, this.state.maxKarakter);
    } else {
      this.setState((prevState) => {
        return {
          sisaKarakter: prevState.maxKarakter - value.length,
        };
      });
    }

    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onCatatanChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.onAddNote({ title, body });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p className="note-input__title__char-limit">
          Character Limit :{this.state.sisaKarakter}
        </p>
        <input
          id="judul"
          type="text"
          className="note-input__title"
          placeholder="Enter Your Title ..."
          value={this.state.title}
          onChange={this.onJudulChange}
        />
        <textarea
          name=""
          id="catatan"
          cols="30"
          rows="20"
          className="note-item__body"
          placeholder="Enter Your Notes ..."
          value={this.state.body}
          onChange={this.onCatatanChange}
        ></textarea>
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default FormNotes;
