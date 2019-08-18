import React from 'react';

export default  class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        this.props.onSearchTermChange(event.target.value);
    }

    render(){
        return (
            <div className="search-bar">
                <input   className = 'search_bar'
                    value={this.state.term}
                    onChange={this.onInputChange} 
                    placeholder="Plaese Enter KeyWords To Search"
                />   
               <img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c548.png" width="130" style={logoStyle} />

            </div>
        );        
    }

}
let logoStyle = {
marginLeft:"auto"
}
