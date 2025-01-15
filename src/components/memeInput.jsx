export default function MemeInput()
{
    function OnGetNewMeme()
    {
        console.log("NEW MEME")
    }
    return (

        <div className="input-container">
            <p className="inputs">
                <label htmlFor="">
                    Top Text
                </label>
                <input type="text" value="Shut up and" />
            </p>
            <p className="inputs">
                <label htmlFor="">Bottom Text</label>
                <input type="text" value="Take my money" />
            </p>
            <button onClick={OnGetNewMeme} >Get a new meme image</button>

        </div>
    )
}