import { Component } from 'react'
import { Link } from 'react-router-dom'
type HomeState = {
    greeting: string 
}

export class Home extends Component<{}, HomeState>{
    constructor(props:{}){
        super(props)
        this.state = {
            greeting: "Hello User"
        }

    }
    render(){
        return (
            <>
            {this.state.greeting}
            <Link to="/profile"> See your Profile!</Link>
            </>
        )
    }
}
