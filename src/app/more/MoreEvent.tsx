import React from 'react'

import style from '@/app/more/more.module.scss'
const MoreEvent = () => {
    return (
        <ul className={style.event}>
            <li className={style.eventItem}>
                <b>23년 8월 페이코 즉시할인 -간편결제</b>
                <br />
                <span>기간: 2023.08.01 ~ 2023.08.31</span>
                <img
                    src="//image.goodchoice.kr/event/mainbanner/24499b1e6769849388589093c41fe1fa.jpg"
                    alt=""
                />
            </li>
            <li className={style.eventItem}>
                <b>23년 8월 KB pay 즉시할인 - 간편결제</b>
                <br />
                <span>기간: 2023.08.01 ~ 2023.08.31</span>
                <img
                    src="//image.goodchoice.kr/event/mainbanner/8dd946f3fb6a9ce2b660a7c0feaad7b0.jpg"
                    alt=""
                />
            </li>
            <li className={style.eventItem}>
                <b>23년 8월 롯데카드 즉시할인 - 신용카드</b>
                <br />
                <span>기간: 2023.08.01 ~ 2023.08.31</span>
                <img
                    src="//image.goodchoice.kr/event/mainbanner/1a4df1659953c29ac160d06a622e08e5.jpg"
                    alt=""
                />
            </li>
            <li className={style.eventItem}>
                <b>23년 8월 우리카드 즉시할인 - 신용카드</b>
                <br />
                <span>기간: 2023.08.01 ~ 2023.08.31</span>
                <a href="/more/eventView/3334?page=0" />
                <img
                    src="//image.goodchoice.kr/event/mainbanner/99962c3ad7aabef7f1f43e6cef954a3b.jpg"
                    alt=""
                />
            </li>
            <li className={style.eventItem}>
                <b>23년 8월 카카오 즉시할인 - 간편결제</b>
                <br />
                <span>기간: 2023.08.01 ~ 2023.08.31</span>
                <img
                    src="//image.goodchoice.kr/event/mainbanner/a40f9328a7651e8de737dc96a2973b2d.jpg"
                    alt=""
                />
            </li>
            <li className={style.eventItem}>
                <b>23년 8월 토스 즉시할인 - 간편결제</b>
                <br />
                <span>기간: 2023.08.01 ~ 2023.08.31</span>
                <img
                    src="//image.goodchoice.kr/event/mainbanner/b12876fcd728e416eaab2d2bf2f0eaa5.jpg"
                    alt=""
                />
            </li>
            <li className={style.eventItem}>
                <b>23년 7월 하나카드 즉시할인 - 신용카드</b>
                <br />
                <span>기간: 2023.07.01 ~ 2023.07.31</span>
                <img
                    src="//image.goodchoice.kr/event/mainbanner/ae8ad207abdbea5c0bfbbd42dee46006.jpg"
                    alt=""
                />
            </li>
        </ul>
    )
}

export default MoreEvent
