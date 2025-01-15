import icon from "../assets/icons8-angry-face-meme.svg"


export default function Header()
{
    return (
        <header>
            <img src={icon} alt="Angry Face" />
            <h1>Meme Generator</h1>
        </header>
    )
}