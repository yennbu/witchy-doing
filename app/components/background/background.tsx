import Image from "next/image";
import "./background.css";

export default function Background() {
    return (
        <div className="background">
            <Image
                src="/background.png"
                alt="AI-generated old paper texture background"
                className="background-moon"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                }}
                z-index={-1}
            />
        </div>
    )
};