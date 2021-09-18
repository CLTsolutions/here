import { Component } from "react";

type LoginState = {
    username: string 
}

type LoginProps = {
    uname: string
    setUsername: (x:string) => void
}

export class Login extends Component<LoginProps, LoginState>{
    constructor(props:LoginProps){
        super(props)
        this.state = {
            username: this.props.uname
        }
    }

    render(){
        const setUsername = this.props.setUsername
        return (
            <>
                <input onChange={(event) => {
                    setUsername(event.target.value)
                }} type="text" />
                {this.props.uname}
            </>
        )
    }
}