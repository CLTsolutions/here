import { Component } from 'react'
import { Link } from 'react-router-dom'

type ProfileState = {
    userName: string
    films: Film[]

}
type Film = {
    title: string
    release_date: string
}

export class Profile extends Component<{}, ProfileState>{
    constructor(props:{}){
        super(props)
        this.state = {
            userName: "Justin",
            films: []
        }
    }

    setFilms = (fArr: Film[]) => this.setState({films: fArr})
    
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then( res => res.json())
            .then( json => {
                let results = json.map((f: Film) => {
                    let { title, release_date } = f
                    return { title, release_date }
                })
                this.setFilms(results)
            })
    }

    render(){
        return (
            <>
                <Link to="/home"> Go to Home!</Link>
                <ul>
                    { this.state.films?.map(f => {
                        return ( 
                            <li>
                                {f.title}
                                {f.release_date}
                            </li>)
                    })}
                </ul>)
            </>
        )
    }
}
