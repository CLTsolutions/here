import { Component } from "react";
import { Login } from './Login'

type AuthState = {
    name: string 
}

type AuthProps = {
    setToken: (value: string) => void
}

export class Auth extends Component<AuthProps, AuthState>{
    constructor(props: AuthProps){
        super(props)
        this.state = {
            name: "Justin"
        }
    }

    render(){
        return (
            <>
                <Login 
                setUsername={this.setUsername}
                uname={this.state.name}
                />
                <button onClick={() => {this.props.setToken("Test!")}}>Submit</button>
            </>
        )
    }

    setUsername = (newName:string) => {
        this.setState({name: newName})
    }
}