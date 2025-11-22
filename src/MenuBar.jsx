function Menu(){
    return(
        <>
        <div>
            <img class="w-38 h-23 mx-20 my-5" src="src/assets/rssbLogo.png"/>
        </div>

        <div class="flex  absolute top-23 left-190 gap-12">
            <div class="flex gap-3">
                <img class="w-11" src="src/assets/1bd2921e-e6b8-4671-a25f-ee73540eb80e.svg"/>
                <div>
                    <p class="text-blue-800 font-bold">4044</p>
                <p class="text-gray-500 font-bold">Toll free lines</p>
                </div>
            </div>
            <div class="flex gap-3">
                <img class="w-11" src="src/assets/86b5625e-5ffe-4730-8792-5891da1e16fb.svg"/>
                <div>
                    <p class="text-blue-800 font-bold">info@rssb.rw</p>
                    <p class="text-gray-500 font-bold">Reach to us</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Menu;