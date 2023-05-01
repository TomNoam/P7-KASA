import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

import data from "../../logements.json";

import "./Carousel.scss";
import "./CarouselResponsive.scss";

export default function Carousel() {
   
    const {id}  = useParams(); 

    const [dataItem, setDataItem] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const found = data.find(item => item.id === id);
        if (!found) {
            navigate("/404");
        } else {
            setDataItem(found); 
        }
    }, [navigate, id]);
          
    if (dataItem) {
        const [picturesArray] = [dataItem.pictures];
                   
        const goToPrevious = () => {
            const isFirstSlide = picturesArray === 0;
            const newIndex = isFirstSlide ? picturesArray.length - 1 : currentIndex - 1;

            if(newIndex < 0) {
                const maxIndex = Math.max(picturesArray.length) - 1 ;
                return setCurrentIndex(maxIndex)
            }
            setCurrentIndex(newIndex);            
        };
        const goToNext = () => {
            const isLastSlide = currentIndex === picturesArray.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);            
        };
        
        if(picturesArray.length === 1){
            return (       
                <div className="mainCarousel">                    
                    <div className="carouselDiv"> 
                        <img key={picturesArray[currentIndex]} src={picturesArray[currentIndex]} alt="housingPictures"/>
                    </div>
                </div>        
            )
        }else{
            return (       
                <div className="mainCarousel">
                    <div className="arrowsContainer">
                        <img className="arrow" onClick={goToPrevious} src="../../../images/arrowLEFT.png" alt="arrowLEFT" />                     
                        <img className="arrow" onClick={goToNext} src="../../../images/arrowRIGHT.png" alt="arrowRIGHT" /> 
                    </div>
                    <div className="carouselIndex">
                        <div className="currentPicture"> {currentIndex + 1} </div>
                        <p>/</p>
                        <div className="maxPictures">{Math.max(picturesArray.length)}</div>
                    </div>
                    <div className="carouselDiv"> 
                        <img key={picturesArray[currentIndex]} src={picturesArray[currentIndex]} alt="housingPictures"/>
                    </div>
                </div>        
            )
        }
    }
}