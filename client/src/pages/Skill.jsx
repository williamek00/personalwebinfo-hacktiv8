import { useSelector } from 'react-redux'
export default function Skill() {
    const data = useSelector(state => state.data)
    return (
        <>

            <div
                className=" bg-cover bg-center  min-h-screen w-screen"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504493408076-2017927bbb1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80  ')" }}
            >

              
                    <div class="container mx-auto p-4">
                        <header class="text-center">
                            <h1 class="text-4xl font-bold">About Me</h1>
                            <p class="text-xl font-medium text-gray-600">Get to know me better</p>
                        </header>

                        <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img class="rounded-lg shadow-lg w-full" src="https://via.placeholder.com/500x500" alt="My Profile Picture" />
                            <div class="p-4">
                                <h2 class="text-2xl font-bold mb-2">Hi, I'm [Your Name]</h2>
                                <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus libero sed ante placerat eleifend. Suspendisse ac est sed ex dignissim tincidunt non quis metus. Vivamus tristique, nulla vel lacinia dignissim, ex orci malesuada ipsum, a suscipit quam enim vel est.</p>
                                <p class="text-gray-700 mb-4">I am a [Your Profession] with [X] years of experience in [Your Area of Expertise]. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus libero sed ante placerat eleifend. Suspendisse ac est sed ex dignissim tincidunt non quis metus.</p>
                                <p class="text-gray-700 mb-4">In my free time, I enjoy [Your Hobbies or Interests]. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus libero sed ante placerat eleifend. Suspendisse ac est sed ex dignissim tincidunt non quis metus. Vivamus tristique, nulla vel lacinia dignissim, ex orci malesuada ipsum, a suscipit quam enim vel est.</p>
                            </div>
                        </section>
                    </div>
        
                <section className="py-8">
                    <div className="container mx-auto px-4 ">
                        {data.map(item => {
                            return (
                                <div key={item.id}>
                                    <h1 className='text-white'>{item.name}</h1>
                                </div>
                            );
                        })}
                        <div class="bg-gray-100 bg-opacity-50 p-4 rounded-lg ">
                            <h1 class="text-2xl font-bold mb-4">I have learned JavaScript and am open to adapting to new programming languages</h1>
                            <h1 class="text-2xl font-bold mb-4">This is the tech stack I have used throughout my coding experience:</h1>
                        </div>

                        <br />

                        <div className="grid grid-cols-3 gap-5">
                            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-4">
                                <h3 className="text-lg font-bold mb-2">React JS</h3>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />

                            </div>

                            <div className="bg-white  bg-opacity-10 rounded-lg shadow-lg p-4">
                                <h3 className="text-lg font-bold mb-2">Vue JS</h3>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="" />

                            </div>
                            <div className="bg-white  bg-opacity-10 rounded-lg shadow-lg p-4">
                                <h3 className="text-lg font-bold mb-2">Node JS</h3>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="" />

                            </div>
                            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-4">
                                <h3 className="text-lg font-bold mb-2">CSS</h3>
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="" />

                            </div>
                            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-4">
                                <h3 className="text-lg font-bold mb-2">HTML</h3>
                                <img src="https://icones.pro/wp-content/uploads/2021/05/icone-html-bleue.png" alt="" />

                            </div>
                            <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-4">
                                <h3 className="text-lg font-bold mb-2">Javascript</h3>
                                <img src="https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640" alt="" />

                            </div>

                        </div>
                    </div>
                </section>

            </div>



        </>

    )
}