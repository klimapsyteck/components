import styles from '../../styles/Slider.module.css'
import React, {useState} from 'react'
import {Images} from './Images'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'



const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length -1 : current -1)
    }

    console.log(current)
    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    return (
        <section className={styles.slider}>  
            <FaArrowAltCircleLeft className={styles.arrowLeft} onClick={prevSlide}/>
            <FaArrowAltCircleRight className={styles.arrowRight} onClick={nextSlide}/>
            {Images.map((img, i) =>{
                return (
                    <div className={i === current ? styles.slideActive : styles.slideDisable} key={i}>
                        <img src={img.image} className={styles.image}/>
                    </div>
                )                
            })} 
        </ section>
    )
}

export default ImageSlider