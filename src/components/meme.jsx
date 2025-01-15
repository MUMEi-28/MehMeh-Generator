
export default function Meme(props)
{

    return (
        <div className="meme-container">
            <h3 className="topText">{props.meme.topText}</h3>
            <img src={props.meme.imageUrl} alt="Meme" />
            <h3 className="bottomText">{props.meme.bottomText}</h3>
        </div>
    )
}