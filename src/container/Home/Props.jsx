import { Component } from "react";
import YoutubeComp from "../../components/YoutubeComp/YoutubeComp";

class Properties extends Component{
    render(){
        return(
            <div>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp time="7.12" title="Belajar React Part 1" desc="200x ditonton, 2 hari yang lalu" img="https://i.ytimg.com/vi/XYrdKrNvKUI/maxresdefault.jpg"/>
                <YoutubeComp time="8.02" title="Belajar React Part 2" desc="100x ditonton, 4 hari yang lalu"/>
                <YoutubeComp time="5.04" title="Belajar React Part 3" desc="500x ditonton, 5 hari yang lalu" img="https://i.ytimg.com/vi/VmLl7FGNLo8/maxresdefault.jpg"/>
                <YoutubeComp time="4.12" title="Belajar React Part 4" desc="10x ditonton, 2 jam yang lalu"/>
                <YoutubeComp img="https://i.ytimg.com/vi/p3j53oRXYF4/maxresdefault.jpg"/>
            </div>
        )
    }
}

export default Properties;