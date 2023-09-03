import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

import SrchBar from '../components/SrchBar'

import style from '../styles/header.module.scss'

export const navLinks = [
    // path 수정 필요 - 20230825 by oliv (수정 완료시 주석 삭제)
    {
        name: '숙소찾기',
        path: '/room',
    },
    {
        name: '예약내역',
        path: '/',
    },
    {
        name: '더보기',
        path: '',
        sub: [
            {
                name: '공지사항',
                path: '/',
            },
            {
                name: '이벤트',
                path: '/',
            },
            {
                name: '자주 묻는 질문',
                path: '/',
            },
            {
                name: '1:1문의',
                path: '/',
            },
        ],
    },
    {
        name: '로그인',
        path: '/user-page',
    },
]

const Header = () => {
    // 스크롤시 header 스타일 변경

    // if (window.location.pathname === '/user-page') return null
    // 특정 페이지에 Header 컴포넌트 렌더링되지 않도록 하는 함수
    // issue : 새로고침해야 제거되고, 제거된 이후론 다른 페이지에서도 제거된 상태 유지

    const [scrPosition, setscrPosition] = useState(0)
    const checkScroll = () => {
        setscrPosition(window.scrollY || document.documentElement.scrollTop)
    }
    useEffect(() => {
        window.addEventListener('scroll', checkScroll)
        return () => {
            window.removeEventListener('scroll', checkScroll)
        }
    }, [])

    // 클릭시 검색바 show & hide
    const [srchBarOpen, setsrchBarOpen] = useState(false)
    const handleSrchBar = () => {
        setsrchBarOpen(!srchBarOpen)
    }

    return (
        <header
            className={
                scrPosition < 60
                    ? style.header
                    : `${style.header} ${style.scroll}`
            }>
            <div className={style.gnb}>
                <h1 className={style.gnbLogo}>
                    <Link href="/">여기어때.</Link>
                </h1>
                <button
                    type="button"
                    className={
                        srchBarOpen
                            ? `${style.btnSrch} ${style.opened}`
                            : style.btnSrch
                    }
                    onClick={handleSrchBar}>
                    <SearchIcon className={style.btnSrchIcon} />
                    <span className="blind">검색</span>
                </button>
                <ul
                    className={
                        srchBarOpen ? `${style.gnbCata} hide` : style.gnbCata
                    }>
                    {navLinks.map((link, idx) => {
                        if (link.path !== '') {
                            return (
                                <li key={idx}>
                                    <Link
                                        href={link.path}
                                        className={style.gnbCataLink}>
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        } else {
                            return (
                                <li key={idx}>
                                    <span className={style.gnbCataLink}>
                                        {link.name}
                                        <ul className={style.gnbCataSub}>
                                            {link.sub.map((subLink, subIdx) => {
                                                return (
                                                    <li key={subIdx}>
                                                        <Link
                                                            href={subLink.path}>
                                                            {subLink.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </span>
                                </li>
                            )
                        }
                    })}
                </ul>
                {srchBarOpen && (
                    <SrchBar
                        srchBarOpen={srchBarOpen}
                        handleSrchBar={handleSrchBar}
                    />
                )}
            </div>
        </header>
    )
}

export default Header
