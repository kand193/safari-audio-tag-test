import { useRef } from "react"

export const AudioPlayer = (props) => {
    const ref = useRef();

    const handlePlay = () => {
        if (ref.current) {
            ref.current.play?.();
        }
    }

    return (
        <>
            <button onClick={handlePlay}>재생</button>
            <audio {...props} ref={ref} />
        </>
    )
}