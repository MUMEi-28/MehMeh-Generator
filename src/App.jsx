

import Header from "./components/header.jsx"
import Meme from "./components/meme.jsx"
import MemeInput from "./components/memeInput.jsx"


export default function App()
{


    return (
        <>
            <Header />
            <main>
                <MemeInput />
                <Meme />
            </main>
            <footer>
                &copy; {new Date().getFullYear()} by MJ.
            </footer>
        </>

    )
}