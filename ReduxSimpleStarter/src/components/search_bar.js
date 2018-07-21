import React, { Component } from 'react';
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        const { onInputChange } = this;
        const { term } = this.state;
        return (
            <div className="search-bar">
                <input
                    value={term}
                    onChange={e => onInputChange(e.target.value)}
                />
            </div>
        );
    }

    onInputChange = (term) => {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;