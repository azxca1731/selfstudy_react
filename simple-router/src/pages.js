import React from 'react'
import { Link } from 'react-router-dom'
export const Home = () =>
    <div className="home">
        <h1>[메인 페이지]</h1>
        <nav>
            <Link to="about">[회사소개]</Link>
            <Link to="about">[이벤트]</Link>
            <Link to="about">[제품 소개]</Link>
            <Link to="about">[고객 지원]</Link>
        </nav>
    </div>

export const About = () =>
    <section className="about">
        <h1>[회사소개]</h1>
    </section>
export const Events = () =>
    <section className="events">
        <h1>[이벤트]</h1>
    </section>
export const Products = () =>
    <section className="products">
        <h1>[제품 소개]</h1>
    </section>
export const Concat = () =>
    <section className="concat">
        <h1>[고객 지원]</h1>
    </section>
export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>'{location.pathname}'경로의 자원을 찾을 수 없습니다.</h1>
    </div>