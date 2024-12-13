import { useGSAP } from '@gsap/react';
import './App.css';
import gsap from 'gsap';


export default function Animate() {

    const data = "WelCome To Our School"
    useGSAP(() => {
        const t1 = gsap.timeline()
        t1.from('.header', {
            opacity: 0.7,
            x: 100
        }).from('.header h2', {
            opacity: 0.7,
            y: -100,
            rotate: 190
        })
    })
    useGSAP(() => {
        const t2 = gsap.timeline()
        t2.from('.links', {
            opacity: 0.8,
            x: 300,
            stagger: 0.6
        }).from('.links a', {
            opacity: 0.9,
            y: -100,
            stagger: 0.6,
            rotate: 300
        }).from('.home h2', {
            opacity: 0,
            y: 200,
            scale:0.5
        }).from('.home h3', {
            opacity: 0,
            x: 200,
            stagger:0.5,
            rotate: 360,
            scale:0.5
        }).from('.about h2', {
            opacity: 0,
            y: 200
        })
    })

    
    return (

        <>
            <div className="header">
                <h2>SchoolName</h2>
                <div className="links">
                    <a href='#'>Home</a>
                    <a href='#'>About Us</a>
                    <a href='#add'>Admission</a>
                    <a href='#'>Activity</a>
                    <a href='#'>Contact-Us</a>
                </div>
            </div>
            <div className="home">
                <h2>“The only way to do great work is to love what you study."</h2>
                <div className="fd">
                    {
                        data.split(' ').map((ch, index) => {
                            return (<h3 key={index}>{ch}</h3>)
                        })
                    }
                </div>
            </div>
           
        </>
    )
}