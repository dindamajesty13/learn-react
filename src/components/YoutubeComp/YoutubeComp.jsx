import "./YoutubeComp.css";

const YoutubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={props.img} alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: "00.00",
    title: "Title Here",
    desc: "xx ditonton, x hari yang lalu",
    img: "https://i.ytimg.com/vi/Hlxqk0iHp5w/maxresdefault.jpg"
}

export default YoutubeComp;