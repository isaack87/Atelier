import React from 'react';

class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            star: []
        }
        this.calculateStarDiv = this.calculateStarDiv.bind(this);
    }
    calculateStarDiv() {
        //get the rating number passed in 
        let rating = this.props.rating;
        //get how many full stars there should be by rounding down the nearest num
        let fullStars = Math.floor(rating);
        //get the quarterStarAmount
        let quarterStar = this.getQuarterStarAmount(rating - fullStars);
        //loop through full stars to create full star div
        let fullStarDiv = []
        for (let i = 0; i < fullStars; i++) {
            fullStarDiv.push(<span className= "fa fa-star full-star"></span>)
        }
        //add the quarter star div if we have quarter stars
        if (quarterStar > 0) {
            fullStarDiv.push(<span className= "fa fa-star" id={"star-" + quarterStar.toString()}/>);
        }
        
        //now test if we need any empty stars, like if the review is 2 out of 5 stars
        let emptyStars = Math.floor(5 - fullStars - quarterStar);
        if (emptyStars > 0) {
            for (let i = 0; i < emptyStars; i++) {
                fullStarDiv.push(<span className= "fa fa-star full-star-empty"></span>)
            }
        }
        let starDiv = <div key={this.props.starKey + 'star'}>{fullStarDiv}</div>
        this.setState({star: starDiv})
    }
    getQuarterStarAmount(value) {
        if (value <= 0) {
            return 0;
        } if (value <= .5) {
            return 25;
        } if (value <= .75) {
            return 50;
        } return 75;

    }
    componentDidMount() {
        this.calculateStarDiv();
    }

    render () {
        return <div>
            {this.state.star}
        </div>
    }
}
export default Stars;