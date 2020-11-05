import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AutocompleteSubject extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            activeSuggestions: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            subject: ''
        };
    }

    static defaultProperty={
        suggestions: []
      };

 
onChange = (e) => {
    const { suggestions } = this.props
    const subject = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
        (suggestion) =>
        suggestion.toLowerCase().indexOf((subject).toLowerCase()) > -1 
    );

    this.setState({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        subject: e.currentTarget.value
    });
};

onClick = (e) => {
    this.setState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        subject: e.currentTarget.innerText
    })
}

onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.props;

    if (e.keyCode === 13) {
        this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            subject: filteredSuggestions[activeSuggestion]
        })
    }
    else if (e.keyCode === 38) {
        if (activeSuggestion === 0) {
            return;
        }
        this.setState({ activeSuggestion: activeSuggestion -1 })
    }
    else if (e.keycode === 40) {
        if (activeSuggestion -1 === filteredSuggestions.length) {
            return;
        }
        this.setState({ activeSuggestion: activeSuggestion + 1 })
    }
};


render() {

    const {
        onChange,
        onClick,
        onKeyDown,
        state: {
            activeSuggestion,
            filteredSuggestions,
            showSuggestions,
            subject
        }
    } = this

let suggestionsListComponent;
if (showSuggestions && subject) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
          <ul class="suggestions">
              {filteredSuggestions.map((suggestion, index) => {

                  return (
                      <li key={suggestion} onClick={onClick}>
                          {suggestion}
                      </li>
                  );
              })}
          </ul>
      )
} else {
    suggestionsListComponent = (
        <div class="no suggestions">
           <em>No suggestions!</em>
        </div>
    );
}
}


        return (
            <React.Fragment>
                <div>
                <label htmlFor="title">Subject:</label>
                <input 
                type='text'
                id="title"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={subject}
                required
                />

                {/* <label htmlFor="title">Title:</label>
                <input 
                type='text'
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={title}
                /><br/>

                <label htmlFor="title">Subject:</label>
                <input 
                type='text'
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={subject}
                /> */}
                {suggestionsListComponent}
                </div>
            </React.Fragment>
        )
    }

}

export default AutocompleteSubject;