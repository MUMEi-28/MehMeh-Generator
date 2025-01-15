import memeImg from "../assets/takeMoneh.jpg"


export default function Meme()
{

    return (
        <div className="meme-container">
            <h3 className="topText">TOP TEXT</h3>
            <img src={memeImg} alt="Meme" />
            <h3 className="bottomText">BOTTOM TEXT</h3>
        </div>
    )
}