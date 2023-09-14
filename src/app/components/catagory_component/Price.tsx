import style from '@/app/styles/RoomCata.module.scss'
import Slider from 'rc-slider'
import Range from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function Price() {
    return (
        <section className={style.prideBox}>
            <div>
                <strong>가격 &nbsp;&nbsp;</strong>
                <span className={style.prideRange}> 1만원 이상</span>
            </div>
            <div>
                <Range />
            </div>
        </section>
    )
}
