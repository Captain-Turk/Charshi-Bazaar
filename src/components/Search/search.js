import React, {Component} from 'react'

class Search extends Component{
    constructor(props){
        super(props)
        this.state ={
            query: '', 
            data: this.props.inventory,           
            searchResult:[]

        }
    }

    handleInputChange = (event) => {        
        this.setState({
            [event.target.query]: event.target.value
        })

        this.setState(prevState => {
            const searchResult = prevState.data.filter(element => {
                return element.name.toLowerCase().includes(this.state.query.toLowerCase());

            })

            return searchResult
            
        })


    }



    render(){
        return(
        <div className='Search-Box'>
            <input  className="Search-Input"  type="text"
                    placeholder="Search..."
                    value={this.state.query}
                    onChange={(e)=>this.handleInputChange(e)}
        />
        <button className='Search-Button' onClick={this.handleInputChange}> Search </button>
        </div>

        )
    }
}

export default Search