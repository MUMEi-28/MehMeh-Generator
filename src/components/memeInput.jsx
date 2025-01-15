
export default function MemeInput(props)
{
    return (

        <div className="input-container">
            <p className="inputs">
                <label htmlFor="">
                    Top Text
                </label>
                <input
                    type="text"
                    placeholder="Shut up and"
                    name="topText"
                    onChange={props.handleChange}
                    value={props.meme.topText}
                />
            </p>
            <p className="inputs">
                <label htmlFor="">Bottom Text</label>
                <input
                    type="text"
                    placeholder="Take my money"
                    name="bottomText"
                    onChange={props.handleChange}
                    value={props.meme.bottomText}
                />
            </p>
            <button onClick={props.getMemeImage} >Get a new meme image</button>

        </div>
    )
}