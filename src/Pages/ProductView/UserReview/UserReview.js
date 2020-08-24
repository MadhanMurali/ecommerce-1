import React from 'react';

import MagicalRating from '../../../Utilities/Rating/MagicalRating/MagicalRating';

import './UserReview.css';

const pRandomText1 = "In ultricies tortor at feugiat ultricies. Curabitur justo arcu, tincidunt nec vehicula ac, porta non ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus sapien ut enim mattis, vel sollicitudin nunc pharetra. Nullam sagittis elementum turpis in dictum. Donec aliquet ligula vel nunc sodales luctus. Cras eu sapien blandit, malesuada augue a, gravida nulla. Phasellus molestie, nisl non scelerisque varius, libero metus interdum urna, eget hendrerit neque arcu a nulla. Nam finibus ullamcorper finibus.";
const pRandomText2 = "Donec volutpat, sem non elementum aliquet, magna tellus lacinia odio, ut viverra erat urna sit amet mauris. Donec luctus neque in dolor elementum consequat. Phasellus facilisis feugiat erat, ut dictum tortor. Donec mattis ante luctus, sagittis tellus ac, molestie augue. Mauris accumsan congue mi at blandit. Suspendisse potenti. Sed ac ultrices elit.";

const UserReviewCard = ({username, content, date, currentRating, maximumRating, ratingKey}) => {
    return (
        <div className="col s12 m12 l12 card-panel">
            <button className="btn small user-review-username white black-text">{username}</button>
            <p className="user-review-rating">
                <MagicalRating 
                    currentRating={currentRating} maximumRating={maximumRating} 
                    uniqueKey={ratingKey} starColor={"#f9a825"}
                />
            </p>
            <p className="user-review-date blue-grey-text right-align"><em>{date}</em></p>
            <p>{content}</p>
        </div>
    );
}

const UserReview = () => {
    return(
        <div className="card-panel">
            <div className="">
                <div className="row valign-wrapper">
                    <div className="col s12 m6 l6">
                        <h5 className="center-align"><span className="teal-text">3</span> Reviews</h5>
                    </div>
                    <div className="col s12 m6 l6 center-align">
                        <MagicalRating currentRating={"2.3"} maximumRating={"5"} 
                                        uniqueKey={"user-rating"} starColor={"#f9a825"}
                        />
                        <h5 className="center-align"><span>2.3</span> out of 5</h5>
                    </div>
                </div>
                <div className="row">
                    <UserReviewCard ratingKey={"user1"} currentRating={"2.3"} maximumRating={"5"} username={"User 1"} content={pRandomText1} date={"21-08-2020"}/>
                    <UserReviewCard ratingKey={"user2"} currentRating={"1.3"} maximumRating={"5"} username={"User 2"} content={pRandomText2} date={"21-08-2020"}/>
                    <UserReviewCard ratingKey={"user3"} currentRating={"3"} maximumRating={"5"} username={"User Name is Lore3 Ipsum 3"} content={pRandomText1} date={"21-08-2020"}/>
                </div>
            </div>

        </div>
    );
}

export default UserReview;