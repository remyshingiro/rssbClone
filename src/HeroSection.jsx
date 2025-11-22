function Hero(){
    return(
        <>
        <div class="bg-blue-800 w-250 h-17 rounded ml-20">
            <div class="text-white space-x-4 m-4">
                <a href="#">HOME</a>
                <a href="#">SCHEMES</a>
                <a href="#">INVESTMENT</a>
                <a href="#">MANAGEMENT</a>
                <a href="#">ABOUT</a>
                <a href="#">CAREERS</a>
                <a href="#">NEWS & EVENTS</a>
            </div>

        </div>

        <div class="w-289 h-120 bg-sky-50">
            <img class="w-150 h-100 absolute left-139" src="src/assets/client.jpeg"/>
            <div class="absolute left-25 top-80 text-2xl">
                <p class="text-gray-700"><span class="text-yellow-500 font-bold">Member First</span>, data-driven, evidence-</p>
                <p class="text-gray-700">based and high performing organization.</p>
                <p class="text-blue-800 font-bold">MEMBERS FIRST</p>
            </div>

            <div class="text-white w-40 h-15 bg-blue-800 rounded-md absolute left-25 top-120">
                <button class="font-bold ml-8 mt-3">Learn More</button>
            </div>
        </div>

        <div class="w-289 h-80 bg-gray-200">
            <div class="text-4xl font-bold absolute left-50 mt-20">
                <p class="text-gray-500">Optimistic and forward-looking</p>
                <p class="text-gray-500">agent of central government, working to achieve</p>
                <p class="text-blue-800">the financial security and health of</p>
                <p class="text-blue-800">all Rwandans.</p>
            </div>
        </div>

        <div class="flex space-x-4 bg-white w-200 h-36 absolute top-164 left-45">
            <div>
                <img class="w-12 " src="src/assets/public (2).svg"/>
                <p class="font-bold text-blue-950">Member First</p>
                <p><span class="text-blue-900 font-bold">13 Million</span> of Rwandans</p>
                <p> are covered by RSSB services</p>
            </div>

            <div>
                <img class="w-12" src="src/assets/public (2).svg"/>
                <p class="font-bold text-blue-950">Experience</p>
                <p><span class="text-blue-900 font-bold">60 years</span>of service for your</p>
                <p> safety and well-being.</p>
            </div>

            <div>
                <img class="w-12" src="src/assets/public (1).svg"/>
                <p class="font-bold text-blue-950">Branches</p>
                <p>Our services decentralized</p>
                <p> in<span class="text-blue-900 font-bold">30 Branches</span>for your</p>
                <p> satisfaction</p>
            </div>

            <div>
                <img class="w-12" src="src/assets/public.svg"/>
                <p class="font-bold text-blue-950">Data Driven</p>
                <p>Learning from our data to</p>
                <p>improve the services offered</p>
                <p>to our members</p>
            </div>
        </div>
        </>
    )
}
export default Hero;