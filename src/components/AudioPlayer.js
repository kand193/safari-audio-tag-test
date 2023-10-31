import { useRef, useState } from "react"

export const AudioPlayer = (props) => {
    const ref = useRef();
    const [time, setTime] = useState(0);

    const handlePlay = () => {
        setTimeout(() => {
            if (ref.current) {
                ref.current.play?.();
            }    
        }, time * 1000);
    }

    return (
        <div style={{ display: 'flex' }}>
            <input
                type="number"
                value={time}
                min={0}
                onChange={(e) => setTime(e.target.value)}
                style={{ width: '50px' }}
            />
            초 뒤
            <button onClick={handlePlay}>재생</button>
            <audio {...props} ref={ref} />
        </div>
    )
}