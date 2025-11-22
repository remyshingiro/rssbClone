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

        <div class=" h-120 bg-sky-50">
            <img class="w-150 h-90 rounded-3xl shadow-2xl absolute left-159 mt-4" src="public/client.jpeg"/>
            <div class="absolute left-25 top-80 text-2xl">
                <p class="text-gray-700"><span class="text-yellow-500 font-bold">Member First</span>, data-driven, evidence-</p>
                <p class="text-gray-700">based and high performing organization.</p>
                <p class="text-blue-800 font-bold">MEMBERS FIRST</p>
            </div>

            <div class="text-white w-40 h-15 bg-blue-800 rounded-md absolute left-25 top-120">
                <button class="font-bold ml-8 mt-3">Learn More</button>
            </div>
        </div>

        <div class=" h-80 bg-gray-200">
            <div class="text-4xl font-bold absolute left-50 mt-27">
                <p class="text-gray-500">Optimistic and forward-looking</p>
                <p class="text-gray-500">agent of central government, working to achieve</p>
                <p class="text-blue-800">the financial security and health of</p>
                <p class="text-blue-800">all Rwandans.</p>
            </div>
        </div>

        <div class="flex space-x-4 bg-white w-200 h-40 absolute top-164 left-45 shadow-2xl rounded-sm">
            <div>
                <img class="w-12 ml-7" src="src/assets/public (2).svg"/>
                <p class="font-bold text-blue-950 ml-7">Member First</p>
                <p><span class="text-blue-900 font-bold ml-2">13 Million</span> of Rwandans</p>
                <p class="ml-2"> are covered by RSSB services</p>
            </div>

            <div>
                <img class="w-12 ml-7" src="src/assets/public (2).svg"/>
                <p class="font-bold text-blue-950 ml-7">Experience</p>
                <p><span class="text-blue-900 font-bold ml-2">60 years</span>of service </p>
                <p class="ml-2"> safety and well-being.</p>
            </div>

            <div>
                <img class="w-12 ml-7" src="src/assets/public (1).svg"/>
                <p class="font-bold text-blue-950 ml-7">Branches</p>
                <p class="ml-2">Our services decentralized</p>
                <p><span class="text-blue-900 font-bold">30 Branches</span>for your</p>
            </div>

            <div>
                <img class="w-12 ml-7" src="src/assets/public.svg"/>
                <p class="font-bold text-blue-950 ml-6">Data Driven</p>
                <p>Learning from our data to</p>
                <p>improve the services offered</p>
            </div>
        </div>
        </>
    )
}
export default Hero;