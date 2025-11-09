import Image from "next/image";
import "./foreground.css";

export default function Foreground() {
    return (
        <div className="foreground">
            <Image
                src="/cat.png"
                alt="Illustration of a cat"
                className="img cat"
                width={200}
                height={200}
            />
            <Image
                src="/mushrooms.png"
                alt="Illustration of mushrooms, pupkins and ferns"
                className="img mushrooms"
                width={250}
                height={200}
            />
        </div>
    );
}