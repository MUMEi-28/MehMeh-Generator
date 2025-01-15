

import Header from "./components/header.jsx"
import Meme from "./components/meme.jsx"
import MemeInput from "./components/memeInput.jsx"

import memeImg from "./assets/takeMoneh.jpg"


import { useState, useEffect } from "react"
export default function App()
{
    const [meme, setMeme] = useState({
        topText: "Shut up and",
        bottomText: "Take my money",
        imageUrl: memeImg
    })

    useEffect(() =>
    {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const [allMemes, setAllMemes] = useState([])
    function getMemeImage()
    {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url


        console.log(newMemeUrl)
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: newMemeUrl
        }))
    }

    function handleChange(event)
    {
        const { value, name } = event.currentTarget
        setMeme(function (prevMeme)
        {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }


    return (
        <>
            <Header />
            <main>
                <MemeInput getMemeImage={getMemeImage} handleChange={handleChange} meme={meme} />
                <Meme meme={meme} />
            </main>
            <footer>
                &copy; {new Date().getFullYear()} by MJ.
            </footer>
        </>

    )
}