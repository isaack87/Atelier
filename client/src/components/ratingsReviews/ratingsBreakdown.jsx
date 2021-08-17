
import React from 'react';
import helpers from './ReviewsHelperFunc.jsx';
import ReviewProductBreakdown from './reviewProductBreakdown.jsx';


class RatingsBreakdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avgReviewDiv: [],
            ratingDistributionDiv: [],
            starBarDiv: [],
            percentageRec: []

        }
        this.getAvgRating = this.getAvgRating.bind(this);
        this.getRatingBar = this.getRatingBar.bind(this);
        this.getPercentageRecommendations = this.getPercentageRecommendations.bind(this);
    }
    getAvgRating() {
        const reviewsArray = this.props.props.allReviews;
        let totalRating = 0;
        let recommendations = 0;
        reviewsArray.forEach(review => {
            totalRating += review.rating;
            if (review.recommend) {
                recommendations++;
            }
        });
        //need to put this in normal state
        let avgRating = (totalRating/(reviewsArray.length));
        this.props.getAvgRating(avgRating);
        

        const avgStars = helpers.calculateStarDiv(avgRating, 'avg-rating');
        const avgDiv = <div><span id='avg-rating'>
            {avgStars}
            </span></div>;
        avgRating = avgRating.toFixed(1);

 
        recommendations = <span>{((recommendations/reviewsArray.length) * 100).toFixed(1) + '% of reviews recommend this product'}</span>;
   
        this.setState({avgReviewDiv:avgDiv, avgRating, percentageRec: recommendations}

        )
    }
    getPercentageRecommendations(){

    }
    getRatingBar() {

        const starBar = helpers.createStarBar(this.props.props.allReviews, this.props.handleFilter);
        this.setState({starBarDiv: starBar});

    }
    componentDidMount() {
        this.getAvgRating();
        this.getRatingBar();
        console.log('this props', this.props)

    }
    render() {
        return <div id= 'ratings-breakdown'>
           <h2>{this.state.avgRating}</h2> 
            {this.state.avgReviewDiv}
           {this.state.percentageRec}
            <div id='star-bars'>
                {this.state.starBarDiv}
            </div>
            <ReviewProductBreakdown product = {this.props.product} setProductInfo = {this.props.setProductInfo}/>
        </div>
    }
}
export default RatingsBreakdown;