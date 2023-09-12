import { useState } from 'react'
import RoomCataCSS from '../../styles/RoomCata.module.css'

export default function Personnel() {
    let [Count, setCount] = useState(1)

    return (
        <section className={RoomCataCSS.personnel_box}>
            <strong>인원</strong>
            <div>
                <button
                    onClick={() => {
                        if (Count > 1) {
                            Count = Count - 1
                            setCount(Count)
                        }
                    }}></button>
                <span>{Count}</span>
                <button
                    onClick={() => {
                        Count = Count + 1
                        setCount(Count)
                    }}></button>
            </div>
        </section>
    )
}
