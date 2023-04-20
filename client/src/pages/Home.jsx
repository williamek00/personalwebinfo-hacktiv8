import { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa'
import { Link } from "react-router-dom";
export default function Home() {
    const [word, setWord] = useState('Hello');
    const words = ['Bonjour', 'Hola', 'Ciao', 'こんにちは', '안녕하세요', 'Hallo', 'Guten Tag', 'Shalom'];

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * words.length);
            setWord(words[randomIndex]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            
            <div className="bg-cover bg-center h-screen flex justify-center items-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80')" }}>
                <div className="text-white text-center mt-2  ">
                    <div className="flex justify-center items-center">
                        <h1 className="text-9xl"><FaCode /></h1>
                    </div>
                    <h1 className="text-6xl font-bold">{word}!</h1>
                    <p className="text-3xl mt-10 ">My name is William, and I do code.</p>

                    <br />
                    <div class="flex gap-4 justify-center">
                        <Link to={'/skill'} class="bg-gray hover:bg-gray-900 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition duration-500 ease-in-out">
                            <h1 class="text-2xl font-bold text-white">About Me</h1>
                        </Link>

                        <button class="bg-gray hover:bg-gray-900 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition duration-500 ease-in-out animate-pulse">
                            <h1 class="text-2xl font-bold text-white">Contact Me</h1>
                        </button>
                    </div>

                </div>
            </div>
        </>

    )
}