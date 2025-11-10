import Image from "next/image";
import "./foreground.css";

export default function Foreground() {
    return (
        <div className="foreground">
            <Image
                src="/mushrooms.png"
                alt="Illustration of mushrooms, pupkins and ferns"
                className="img mushrooms"
                width={300}
                height={200}
            />
            <Image
                src="/cat.gif"
                alt="Animation of a cat blinking"
                className="img cat"
                width={230}
                height={200}
            />
        </div>
    );
}