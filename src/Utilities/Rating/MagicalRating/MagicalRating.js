import React from 'react';

const RatingSvg = ({fillPercent, id, uniqueKey, starColor}) => {
    const linearGradientId = "rating-svg-"+ uniqueKey + id;
    const pathFillUrl = "url(#rating-svg-" + uniqueKey + id + ")";
    return (
        <svg
            version="1.1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            height="50"
            width="50">
                <defs>
                    <linearGradient id={linearGradientId} x1="0" y1="0" x2="1" y2="0">
                        <stop id="stop1" offset={fillPercent} stopColor={starColor}/>
                        <stop id="stop2" offset={fillPercent} stopColor="#9e9e9e"/>
                    </linearGradient>
                </defs>
                <path
                    style={{fill: pathFillUrl}}
                    id="path848"
                    d="M 5.0122919,0.61479063 6.1883034,3.9468231 H 9.7163378 L 6.9723111,6.1028441 7.9523208,9.4348769 5.0122919,7.4748576 2.0722633,9.4348769 3.0522729,6.1028441 0.30824599,3.9468231 H 3.8362806 Z" />
        </svg>
    );
}

/**
 * Provide unique key to use this component multiple times in same page
 */

const MagicalRating = ({maximumRating, currentRating, uniqueKey, starColor}) => {
    const currentRatingSplit = (currentRating + "").split(".");
    const numberOfFilledStars = currentRatingSplit[0];
    const partialFilledStarPercent = currentRatingSplit[1];

    const remainingNoOfStars = maximumRating - Math.ceil(currentRating);

    let ratingSvgArray = new Array(1);

    let id = 1;     
    for (let i = 1; i <= numberOfFilledStars; i++, id++) {
        ratingSvgArray.push(
            <RatingSvg 
                key={id} fillPercent={"1"} 
                id={id} uniqueKey={uniqueKey} 
                starColor={starColor}
            />
        );
    }

    if (Math.ceil(currentRating) !== Number(numberOfFilledStars)) {
        ratingSvgArray.push(
            <RatingSvg 
                key={id} fillPercent={"0." + partialFilledStarPercent} 
                id={id} uniqueKey={uniqueKey} 
                starColor={starColor}
            />
        );
        id++;
    }

    for ( let i = 1; i <= remainingNoOfStars; i++, id++) {
        ratingSvgArray.push(
            <RatingSvg 
                key={id} fillPercent={"0"} 
                id={id} uniqueKey={uniqueKey} 
                starColor={starColor}
            />
        );
    }

    return (
        ratingSvgArray
    );
}

export default MagicalRating;