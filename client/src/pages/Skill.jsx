import { useSelector } from 'react-redux'
import { Link } from 'react-scroll';

import { HiArrowDown } from 'react-icons/hi';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
export default function Skill() {
    const data = useSelector(state => state.data)
    return (
        <>

            <div
                className=" bg-cover bg-center  min-h-screen w-screen"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506514283824-e2a49afa0d06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80  ')" }}
            >
                <div class="container mx-auto p-4">
                    <header class="text-center">
                        <h1 class="text-4xl font-bold">About Me</h1>
                        <br />
                        <div className='container justify-center text-center flex flex-col items-center'>
                            <Link to="section-to-scroll-to" smooth={true} duration={500} className="flex items-center animate-bounce">
                                <HiArrowDown size={32} />
                                <span className="ml-2">Tech Stack I Have Used</span>
                            </Link>
                        </div>
                        <br />


                    </header>


                    <section class="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <img class="rounded-lg shadow-lg object-contain h-full w-full" src="img.jpg" alt="My Profile Picture" />


                        {
                            data.map(item => {
                                return (
                                    <>
                                        <div className="container mx-auto px-4">
                                            <div className="bg-gray-100 bg-opacity-50 p-4 rounded-lg" key={item.id}>
                                                <h2 className="text-2xl font-bold mb-2">Hi, I'm {item.name}.</h2>
                                                <p className="text-gray-700 mb-4">I'm {item.age} years old.</p>
                                                <p className="text-gray-700 mb-4">
                                                    I'm a junior web developer, eager to learn. I'm very enthusiastic about programming and committed to improving my skills, also I have solid understanding of fundamental concepts and technologies that underpin the web development
                                                </p>
                                                <p className="text-gray-700 mb-4">
                                                    I recognize that web development is a team effort and I am always willing to collaborate with others to solve problems and create high-quality products. I am committed to continuous learning and self-improvement and always seeking out new challenges and opportunities to expand my skills.
                                                </p>
                                            </div>
                                            <div>
                                                <br />
                                                <div className="bg-gray-100 bg-opacity-50 p-4 rounded-lg" >
                                                    <h2 className="text-center text-4xl font-bold">My background</h2>
                                                    <br />
                                                    <ul className="list-disc list-inside">
                                                        <li className="mb-2">
                                                            On July, 2020 after I graduated from school, I worked as Desc Collection at PT Prima finance for 3 months.
                                                            <p className="text-gray-700 mt-2 before:inline-block before:content-['→'] before:mr-2">
                                                                My responsibilities were calling clients that had a due date for money loan and had a target per day.
                                                            </p>
                                                        </li>
                                                        <li className="mb-2">
                                                            On November, 2020. I joined PT Indomarco Prismatama and worked as Store Crew Boy for 2 years.
                                                            <p className="text-gray-700 mt-2 before:inline-block before:content-['→'] before:mr-2">
                                                                My responsibilities were making sure the display rack was clean and full, using the computer to serve clients as a cashier.
                                                            </p>
                                                        </li>
                                                        <li className="mb-2">
                                                            On January, 2023. I joined Hacktiv8 Fullstack Javascript Course for 4 months.
                                                            <p className="text-gray-700 mt-2 before:inline-block before:content-['→'] before:mr-2">What I have learned:</p>
                                                            <ul className="list-disc list-inside ml-4 font-mono">
                                                                <li>Fundamental Javascript, HTML, CSS.</li>
                                                                <li>Operating class, sequelize, ejs, and postgresql.</li>
                                                                <li>Operating vue js, with packages available to use like bcrypt JS, JSON Web Token, and many more.</li>
                                                                <li>Operating React JS, React-Native for mobile development , mongoDB as database and using the react library.</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <br />
                                                <div className="bg-gray-100 bg-opacity-50 p-4 rounded-lg" >
                                                    <h2 className="text-center text-4xl font-bold">Activities Recently </h2>
                                                    <br />
                                                    <p className="text-gray-700 mt-2 before:inline-block before:content-['→'] before:mr-2">

                                                        Swimming is a wonderful hobby that can help you stay active and healthy. Not only is it an excellent form of cardiovascular exercise, but it also helps to strengthen your muscles, improve your flexibility, and reduce stress. Whether you enjoy swimming laps in a pool, taking a dip in the ocean, or lounging in a hot tub, swimming is a great way to unwind and rejuvenate your body.
                                                    </p>
                                                    <p className="text-gray-700 mt-2 before:inline-block before:content-['→'] before:mr-2">

                                                        Exploring programming is a fantastic hobby for anyone who is interested in technology and enjoys problem-solving. With so many programming languages and platforms to choose from, there is always something new to learn and explore. Whether you are interested in building websites, creating mobile apps, or developing software for desktop computers, exploring programming allows you to be creative, challenge yourself, and keep up with the latest trends in technology.
                                                    </p>
                                                    <p className="text-gray-700 mt-2 before:inline-block before:content-['→'] before:mr-2">

                                                        Running is an excellent hobby for anyone who enjoys staying active and challenging themselves physically. Whether you prefer jogging outdoors or hitting the treadmill at the gym, running is a great way to improve your cardiovascular health, build endurance, and boost your mood. Running also offers the opportunity to set goals, track your progress, and compete in races or other events, making it a fun and rewarding hobby.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </section>
                </div>

                <section className="py-8" id="section-to-scroll-to">
                    <div className="container mx-auto px-4 ">
                        <div class="bg-gray-100 bg-opacity-10 p-4 rounded-lg text-center">
                            <h1 class="text-2xl font-bold mb-4">I have learned JavaScript and i'am open to adapting to new programming languages.</h1>
                            <h1 class="text-2xl font-bold mb-4">These are few tech stack i use along my coding experience , adding more  soon. </h1>
                        </div>

                        <br />

                        <div className="grid grid-cols-3 gap-20">
                            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />

                            </div>

                            <div className="bg-white  bg-opacity-10 rounded-lg shadow-lg p-11 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="" />

                            </div>
                            <div className="bg-white  bg-opacity-10 rounded-lg shadow-lg p-11 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="" />

                            </div>
                            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-11 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">

                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="" />

                            </div>
                            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-11 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">

                                <img src="https://icones.pro/wp-content/uploads/2021/05/icone-html-bleue.png" alt="" />

                            </div>
                            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-11 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">

                                <img src="https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640" alt="" />

                            </div>

                        </div>
                        <br />
                        <div className="bg-gray-100 bg-opacity-10 p-4 rounded-lg "  >
                            <div className="flex justify-center">
                                <a href="https://github.com/williamek00">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" alt="GitHub logo" width="100" style={{ marginRight: '50px' }} />
                                </a>
                                <a href="https://www.instagram.com/william.ek18">
                                    <img src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Instagram-512.png" alt="Instagram logo" width="100" style={{ marginRight: '50px' }} />
                                </a>
                                <a href="https://www.linkedin.com/in/william-enos-9a6162233/">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png" alt="Instagram logo" width="100" style={{ marginRight: '50px' }} />
                                </a>
                                <a href="mailto:williamenosk123@gmail.com?subject=Hello&body=Hi%20William%2C%0D%0A%0D%0A">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="Gmail logo" width="100" style={{ paddingTop: '10px' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>



        </>

    )
}