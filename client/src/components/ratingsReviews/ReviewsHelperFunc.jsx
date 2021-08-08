import axios from 'axios';
import React, {useState} from 'react';
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
        console.log('id', id);
        if (helpNum > 0) {
            return (<div id="helpful">
                <span><p id="helpful-question">Helpful? </p>
                <p id= {"helpful-link" + id} onClick = {
                    () => {
                        const clickedAlready = helpers.checkIfHelpfulnessClicked(id);
                        if (!clickedAlready) {
                            helpers.markHelpfulAPI(id);
                            //now need to update the DOM with what we got
                            $('#helpfulness-' + id).text(helpNum + 1);
                            helpfulReviewsClicked[id] = true;
                        }
                        
                    }
                }>Yes (<span id= {"helpfulness-" + id } class = "helpful-link">{helpNum}</span>)</p>
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

    }
}
export default helpers;