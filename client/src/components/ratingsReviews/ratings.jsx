import React from 'react';
import axios from 'axios';
import moment from 'moment';
 import Images from './images.jsx';
 import Stars from './stars.jsx';
 import helpers from './ReviewsHelperFunc.jsx';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allReviews: [],
            currentReviewIndex: 0,
            reviewsDiv: [],
            reviewsShownSoFar : [],
            moreReviewsButton: [],
            reviewDropdownSortDiv: []

        }
        this.getReviews = this.getReviews.bind(this);
        this.renderReviews = this.renderReviews.bind(this);
        this.postReview = this.postReview.bind(this);
        this.showMoreReviewsButton = this.showMoreReviewsButton.bind(this);
        this.showReviewDropdownSort = this.showReviewDropdownSort.bind(this);
    }
    //function to handle getting the reviews for the given product id
     getReviews(sort = 'helpful') {
          axios({
            method: 'post',
            url: 'http://localhost:3000/reviews',
            //for testing purposes we use this default productID
            data: {productID: 28215, sortKind: sort}

        }).then(response => {
 
            //now take this and update reviews state
            this.setState({allReviews: response.data.results}, () => {
                this.renderReviews();
                this.showReviewDropdownSort();
            })
          
        })
    }
    //handle rendering the sort dropdown only if we have reviews to show
    showReviewDropdownSort() {
        if (this.state.allReviews.length > 0) {
            let div = <select id="review-dropdown">
            <option value="helpful">helpful</option>
            <option value="newest">newest</option>
            <option value="relevant">relevant</option>
        </select>;
            this.setState({reviewDropdownSortDiv: div });
        }
    }
    //function to handle rendering the reviews div
    renderReviews() {
        let reviews = this.state.allReviews;
        let innerDiv = this.state.reviewsShownSoFar;
        
        //helper func to generate 1 review
        let generateReview = review => {
            console.log('review', review)
            let paragraph = <div key={review.review_id}> 
                <div id= 'review-heading'>
                <p className="review-summary">{review.summary}</p> 
                <p id= 'review-username'>{review.reviewer_name}</p> 
                <p>{moment(review.date).format('MMMM Do YYYY')}</p>
                </div>
               {review.rating}
                {review.body}
                <div><Images props= {review.photos}/></div>
          
                helpfulness: {review.helpfulness}
                <Stars rating = {review.rating} starKey = {review.review_id}/>
                {helpers.generateRecommend(review.recommend)}
                {helpers.reviewResponse(review.response)}
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
       
            //now take this and update reviews state
            this.setState({allReviews: response.data.results}, ()=> {
                this.renderReviews();
            })
        })
    }
    componentDidMount() {
          this.getReviews();
        //this.postReview();
    }

    render() {
        
        return (
            <div id = 'reviews'>
                <h1>reviews module</h1>
                {this.state.reviewDropdownSortDiv}
               <div id='reviewsList'> {this.state.reviewsDiv}</div>
                {this.state.moreReviewsButton}
           
            </div>
        )
    }
}
export default Reviews;
