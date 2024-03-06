import BgImage from "../../../public/src/images/bg-hero-v2.jpg"


function HeroComponent() {
  return (
    <>
    <div className="w-full p-5 ">
        <img src={BgImage} alt="" className="bg-center bg-cover rounded-md max-h-52 shadow-md"/>
    </div>
    </>
  )
}

export default HeroComponent