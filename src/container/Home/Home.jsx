import { Component } from "react";
import YoutubeComp from "../../components/YoutubeComp/YoutubeComp";

class Home extends Component{
    render(){
        return(
            <div>
                <YoutubeComp/>
                <YoutubeComp/>
                <YoutubeComp/>
                <YoutubeComp/>
                <YoutubeComp/>
            </div>
        )
    }
}

export default Home;