import { useRef } from "react"

export const VideosController = () => {
    const videoRef = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);
    const videoRef4 = useRef(null);
    const videoRef5 = useRef(null);

    const handlePlay = () => {
        videoRef.current?.play();
        videoRef2.current?.play();
        videoRef3.current?.play();
        videoRef4.current?.play();
        videoRef5.current?.play();
    }

    const videoAttributes = {
        playsInline: true,
        muted: true,
        style: {
            width: '300px',
            height: '200px',
        }
    }

    return (
        <>
            <video
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                ref={videoRef}
                {...videoAttributes}
            />
            <video
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                ref={videoRef2}
                {...videoAttributes}
            />
            <video
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                ref={videoRef3}
                {...videoAttributes}
            />
            <video
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                ref={videoRef4}
                {...videoAttributes}
            />
            <video
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                ref={videoRef5}
                {...videoAttributes}
            />
            <button onClick={handlePlay}>동시 재생</button>
        </>
    )
}