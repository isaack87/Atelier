import React from 'react';
import axios from 'axios';
 import Images from './images.jsx'

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allReviews: [],
            currentReviewIndex: 0,
            reviewsDiv: [],
            reviewsShownSoFar : [],
            moreReviewsButton: []

        }
        this.getReviews = this.getReviews.bind(this);
        this.renderReviews = this.renderReviews.bind(this);
        this.postReview = this.postReview.bind(this);
        this.showMoreReviewsButton = this.showMoreReviewsButton.bind(this);
    }
    //function to handle getting the reviews for the given product id
     getReviews(sort = 'helpful') {
          axios({
            method: 'post',
            url: 'http://localhost:3000/reviews',
            //for testing purposes we use this default productID
            data: {productID: 28215, sortKind: sort}

        }).then(response => {
            console.log('response??', response);
            //now take this and update reviews state
            this.setState({allReviews: response.data.results}, () => {
                this.renderReviews();
            })
          
        })
    }
    //function to handle rendering the reviews div
    renderReviews() {
        let reviews = this.state.allReviews;
        let innerDiv = this.state.reviewsShownSoFar;
        //helper func to generate 1 review
        let generateReview = review => {
            let paragraph = <div key={review.review_id}> 
                <div id= 'review-heading'>
                <h3>{review.summary}</h3> <p>{review.reviewer_name}</p> <p>{review.date}</p>
                </div>
               {review.rating}
                {review.body}
                {/* <div><Images props= {review.photos}/></div> */}
                helpfulness: {review.helpfulness}
                </div>;
          return paragraph;
        };
        //display only 2 at a time
        let index = this.state.currentReviewIndex;
        for(let i = 0; i < 2; i++) {
            //get current review
            let review = reviews[index];
            if (review) {
                innerDiv.push(generateReview(review));
                index ++;
            }
            
        }
        
        this.setState({currentReviewIndex: index}, () => {
            this.showMoreReviewsButton();
        });
        let outerDiv = <div id='reviews'>{innerDiv}</div>
        this.setState({reviewsDiv: outerDiv});

    }
    //handles showing the 'more reviews' button
    showMoreReviewsButton() {
        //if our current index is less than the amount of reviews we have, we will keep displaying this button
        if (this.state.currentReviewIndex < this.state.allReviews.length) {
            //create a button
            let button = <button onClick= {()=> {
                this.renderReviews();
            }}>More Reviews</button>
            this.setState({moreReviewsButton: button})
        } else {
            this.setState({moreReviewsButton: []})
        }

    }
    
    //handles posting review
    postReview() {
        axios({
            method: 'post',
            url: 'http://localhost:3000/postreview',
           
        }).then(response => {
            console.log('response??', response);
            //now take this and update reviews state
            this.setState({allReviews: response.data.results}, ()=> {
                this.renderReviews();
            })
        })
    }
    componentDidMount() {
         this.getReviews();
    }

    render() {
        
        return (
            <div>
                <h1>reviews module</h1>
                <select id="review-dropdown">
                    <option value="helpful">helpful</option>
                    <option value="newest">newest</option>
                    <option value="relevant">relevant</option>
                </select>
               <div id='reviewsList'> {this.state.reviewsDiv}</div>
                {this.state.moreReviewsButton}
           
            </div>
        )
    }
}
export default Reviews;
