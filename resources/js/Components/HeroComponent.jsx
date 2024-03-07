import BgImage from "../../../public/src/images/bg-hero-v2.jpg";

function HeroComponent() {
    return (
        <>
            <div className="w-full px-5 py-2 ">
                <img
                    src={BgImage}
                    alt=""
                    className="bg-center scale-90 w-full rounded-md max-h-52 shadow-md object-fill"
                />
            </div>
        </>
    );
}

export default HeroComponent;
