import axios from 'axios';
import React from 'react';
import $ from 'jquery';
const helpfulReviewsClicked = {};
const helpers = {

    reviewResponse: (response) => {
        
        if (response !== null && response !== "") {
            return (<div id = 'response'>
                <h3>Response from seller</h3>
                <p>{response}</p>
            </div>);
        }
    },
    generateRecommend: (recommend) => {
        if (recommend) {
            return (<p>✓ I recommend this product</p>);
        }
    },
    
    //checks if the review has already been clicked for helpfulness already
    checkIfHelpfulnessClicked : (id) => {
        if (helpfulReviewsClicked[id]) {
            return true;
        }
        return false;
    },
    generateHelpfulness: (helpNum, id) => {

        if (helpNum > 0) {
            return (<div id="helpful">
                <span id="helpful-question">Helpful?
                <span id= {"helpful-link" + id} onClick = {
                    () => {
                        const clickedAlready = helpers.checkIfHelpfulnessClicked(id);
                        if (!clickedAlready) {
                            helpers.markHelpfulAPI(id);
                            //now need to update the DOM with what we got
                            $('#helpfulness-' + id).text(helpNum + 1);
                            helpfulReviewsClicked[id] = true;
                        }
                    }
                }> Yes (<span id= {"helpfulness-" + id } class = "helpful-link">{helpNum}</span>)</span>
                </span>
                
            </div>)
        }
    },
    markHelpfulAPI: (productID) => {
        axios({
            method: "POST",
            url:'http://localhost:3000/markHelpful',
            data: {productID}
        }).then(response => {
    
            
            return true;
        })

    },
    getQuarterStarAmount: (value)=> {
       
        if (value <= 0) {
            return 0;
        } if (value < .5) {
            return 25;
        } if (value < .75) {
            return 50;
        } return 75;

    },
    calculateStarDiv: (rating, key)=> {
        //get how many full stars there should be by rounding down the nearest num
        const fullStars = Math.floor(rating);
        //get the quarterStarAmount
        const quarterStar = (helpers.getQuarterStarAmount(rating - fullStars))/100;
        //loop through full stars to create full star div
        let fullStarDiv = []
        for (let i = 0; i < fullStars; i++) {
            fullStarDiv.push(<span className= "fa fa-star full-star"></span>)
        }
        //add the quarter star div if we have quarter stars
        if (quarterStar > 0) {
            fullStarDiv.push(<span className= "fa fa-star" id={"star-" + (quarterStar*100).toString()}/>);
        }
        //now test if we need any empty stars, like if the review is 2 out of 5 stars
        const emptyStars = Math.floor(5 - fullStars - quarterStar);
        if (emptyStars > 0) {
            for (let i = 0; i < emptyStars; i++) {
                fullStarDiv.push(<span className= "fa fa-star full-star-empty"></span>)
            }
        }
        let starDiv = <div key={key + 'star'}>{fullStarDiv}</div>;
        return starDiv;

    },
    createStarBar: (reviewsArray) => {
        if (!reviewsArray || reviewsArray.length === 0) {
            return;
        }
        let fiveStar = [], fourStar = [], threeStar = [], twoStar = [], oneStar = [];
        reviewsArray.forEach(review => {
            if (review.rating === 5) {
                fiveStar.push(review);
            } else if (review.rating === 4) {
                fourStar.push(review);
            } else if (review.rating === 3) {
                threeStar.push(review);
            } else if (review.rating === 2) {
                twoStar.push(review);
            } else {
                oneStar.push(review);
            }
        });

        //now create five star bar
        const displayFive = Math.abs(((fiveStar.length-1)/(reviewsArray.length - 1)*100)).toFixed(0);
        const displayFour = Math.abs(((fourStar.length-1)/(reviewsArray.length - 1)*100)).toFixed(0);
        const fiveStarBar = <div>
           <span id ='bar-type'>5 Stars</span>
           <div id = 'bar'>
           <div class="w3-light-grey">
                <div className='w3-grey' style={{height:"1em", width:`${displayFive + "%"}`}}>
                </div>
            </div>
           </div>
        </div>
       
      
        let example = <div class="w3-light-grey">
        <div class="w3-grey" style={{height:"3em",width:"25%"}}></div>
      </div>;
       return <div>{helpers.getBar(fiveStar,reviewsArray.length - 1, '5')} </div>;

    },
    getBar: (starArr, totalReviews, starAmount) => {
        const widthAmount = Math.abs(((starArr.length-1)/(totalReviews)*100)).toFixed(0);
        const returnDiv = 
<div>
           <span id ='bar-type'>{starAmount} Stars</span>
           <div id = 'bar'>
           <div class="w3-light-grey">
                <div className='w3-green' style={{height:"1em", width:`${widthAmount + "%"}`}}>
                </div>
            </div>
           </div>
        </div>;
        return returnDiv;
    }

}
export default helpers;