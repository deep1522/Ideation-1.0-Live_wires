import React from 'react'

function About() {
  return (
    <div>
        <div className='bg-transparent p-52 text-center'>
            <div className='mt-16 bg-gradient-to-r from-gray-950 to-gray-900 shadow-[0_0_25px_rgb(6,182,212)] rounded-lg p-10'>
                <h1 className='text-cyan-300 bg-transparent text-3xl font-bold mb-4 text-center'>
                    About the Department
                </h1>
                <p className='text-white  bg-transparent text-center leading-relaxed'>The Department of Computer Applications at SRM Institute of Science and Technology is committed to creating innovative thinkers and skilled professionals in the field of technology.Our programs blend rigid academic training with hands-on experience,preparing students for carrers in software development,data science and information technology.<br/><br/> We pride ourselves on a diverse curriculum,experienced faculty,experienced faculty and strong industry connections that enhance learning and research opportunities.Our mission is to empower students with the knowledge and skills needed to thrive in a dynamic digital landscape.</p>
            </div>

            <div className='mt-16 bg-gradient-to-r from-[#081808] to-[#002f00] shadow-[0_0_25px_#61FF00] rounded-lg p-10'>
                <h1 className='text-[#61FF00] bg-transparent text-3xl font-bold mb-4 text-center'>
                    About the club
                </h1>
                <p className='text-white  bg-transparent text-center leading-relaxed'>Livewires is a vital department club at SRM Institute of Science and Technology devoted to fostering creativity and innovation among students. We organize workshops, events and collaborative projects that enhance technical skills and promote teamwork. Our mission is to intend, invent and inspire and connect students passionate about technology and its applications.</p>
            </div>
            <div className='mt-16 bg-gradient-to-r from-[#16080d] to-[#310010] shadow-[0_0_25px_#FF0051] rounded-lg p-10'>
                <h1 className='text-cyan-300 bg-transparent text-3xl font-bold mb-4 text-center'>
                    Say no to drugs
                </h1>
                <p className='text-white  bg-transparent text-center leading-relaxed'>
                    Taking drugs can have severe consequences on both mental and physical well-being. 
                    It increases anxiety, depression, and emotional instability, while also straining relationships with family, friends, and loved ones. 
                    Drug use impairs focus, motivation, and work performance, leading to isolation from social circles due to embarrassment or stigma, often resulting in deep loneliness.
                </p>
            </div>

        </div>
    </div>
  )
}

export default About;
