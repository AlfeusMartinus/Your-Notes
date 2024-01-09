import React, { Component } from 'react'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTemp: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }
  
  onSearchChange(event) {
    this.setState({
      searchTemp: event.target.value
    }, () => {
      return this.props.onSearch(this.state)
    })
    // console.log(this.state.searchTemp)
  }

  render() {
    return (
      <div className="note-search">
        <input type="text" placeholder="Find Note ..." value={this.state.searchTemp} onChange={this.onSearchChange} />
      </div>
    )
  }
}

export default Search