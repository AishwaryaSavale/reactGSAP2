import gsap from 'gsap'
import './App.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

export default function Animate1() {

    gsap.registerPlugin(ScrollTrigger)
    const sectionsRef = useRef([])
    const titleRef = useRef([])

    useLayoutEffect(() => {
        sectionsRef.current.forEach((section, index) => {
            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    top: "top top",
                    end: "bottom+=100",
                    pin: true
                }
            })
        })

        titleRef.current.forEach((title, index) => {
            gsap.fromTo(title,
                {
                    opacity: 0,
                    x: -200,
                }, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: sectionsRef.current[index],
                    start: "top 50%",
                    toggleActions: "play none none reverse"
                }
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }

    }, [])

    return (
        <>

            <div ref={(ele) => (sectionsRef.current[0] = ele)} style={styleCSS("pink")}>
                <h2  style={h2Style} ref={(ele) => (titleRef.current[0] = ele)}>Activity</h2>
                <div style={cardStyle}>
                    <div style={card}>
                        <h3 style={styleH3}>Sports Day</h3>
                    </div>
                    <div style={card}>
                        <h3 style={styleH3}>Science Fair</h3>
                    </div>
                    <div style={card}>
                        <h3 style={styleH3}>Art Exhibition</h3>
                    </div>
                    <div style={card}>
                        <h3 style={styleH3}>Music Comp.</h3>
                    </div>
                    <div style={card}>
                        <h3 style={styleH3}>Annual Picnic</h3>
                    </div>
                </div>
            </div>
            <div ref={(ele) => (sectionsRef.current[1] = ele)} style={styleCSS("blueviolet")}>
                <h2  style={h2Style} ref={(ele) => (titleRef.current[1] = ele)}>Sports Gallary</h2>
                <div style={imgStyle}>
                    <img  style={img} src="https://wallpapercave.com/wp/wp2940452.jpg"/>
                    <img  style={img} src="https://tse2.mm.bing.net/th?id=OIP.PzhEbQwM9tIA_yOWfyc-rAHaE8&pid=Api&P=0&h=180"/>
                    <img  style={img} src="https://tse2.mm.bing.net/th?id=OIP.NcK_hYyTwphIH1oBd2plLgHaE7&pid=Api&P=0&h=180"/>
                    <img  style={img} src="https://tse1.mm.bing.net/th?id=OIP.EfuWB525jUVatiEKx-fL8AHaFI&pid=Api&P=0&h=180"/>
                    <img  style={img} src="https://www.updocmedia.com/wp-content/uploads/2016/05/bigstock-Soccer-111779171.jpg"/>
                    <img  style={img} src="https://s.hdnux.com/photos/01/27/40/50/22940165/3/rawImage.jpg"/>
                </div>
            </div>
            <div id='add' ref={(ele) => (sectionsRef.current[2] = ele)} style={styleCSS("cyan")}>
                <h2  style={h2Style} ref={(ele) => (titleRef.current[2] = ele)}>Music Gallary</h2>
                <div style={imgStyle}>
                    <img  style={img} src="https://img.nordangliaeducation.com/resources/asia/_filecache/d47/a72/140505-maintainratio-w774-h480-of-1-fff-music-gallery-1.jpg"/>
                    <img  style={img} src="https://tse4.mm.bing.net/th?id=OIP.ZYlo7Oxby65B7msHPF3QUAHaE8&pid=Api&P=0&h=180"/>
                    <img  style={img} src="https://cityacademyslc.org/wp-content/uploads/2022/06/shutterstock_1189558246-scaled.jpg"/>
                    <img  style={img} src="https://tse4.mm.bing.net/th?id=OIP.N8onDRo8DISMkBwZcJlzJgHaE8&pid=Api&P=0&h=180"/>
                </div>
            </div>
            <div style={{ width: "100%", height: "100vh", background: "lightcoral" }}>

            </div>
        </>
    )
}
const styleCSS = (backgroundColor) =>
({
    width: "100%",
    height: "100vh",
    backgroundColor,
    display: "grid",
    color: "white"
})
const h2Style={
    textAlign:"center",
    fontSize:"35px",
    fontWeight:"1000",
    color:"black"
}
const styleH3={
    margin: "40px auto",
    padding: "10px 40px",
    borderRadius: "5px",
    boxShadow: "inset 0px 0px 10px blueviolet"
}
const cardStyle = {
    width:"90%",
    height:"60vh",
    margin:"10px 50px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "20px"
}
const card={
    backgroundColor: "#fff",
    color: "#333",
    width: "250px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.02)",
    margin: "10px",
    textAlign: "center",
    border:"2px solid blueviolet",
    boxShadow: "inset 0px 0px 10px blueviolet"
}
const imgStyle={
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px"
}
const img={
    width: "300px",
    height: "250px",
    objectFit: "cover",
    borderRadius:"8px",
    boxShadow: "0px 4px 10px black"
}
