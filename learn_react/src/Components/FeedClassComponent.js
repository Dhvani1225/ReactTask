import React from "react";
import { Component } from "react";
import axios from "axios";
import Card from './Card';

class FeedClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            posts: [],
            loading: false,
            error: false,
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        const resource = await axios.get('https://reqres.in/api/users ');
        console.log(resource)
        this.setState({ loading: false })
        this.setState({ posts: resource.data.data })
        console.log(this.state.posts)
    }

    render() {

        return (
            <div>
                {this.state.loading ? <img src="loader1.gif" style={{ width: 20, marginBlock: 100 }} /> : this.state.posts.map((item) => { return (<Card item={item} />) })}
            </div>
        )
    }

}







export default FeedClassComponent;