import React from 'react';

class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.calculateStarDiv = this.calculateStarDiv.bind(this);
    }
    calculateStarDiv() {
        //get the rating number passed in 
        let rating = this.props.rating;
        //get how many full stars there should be by rounding down the nearest num
        let fullStars = Math.floor(rating);
        

    }
    componentDidMount() {
        this.calculateStarDiv();
    }

    render () {
        return <div>
            <p>stars!!!!!🤩</p>
        </div>
    }
}
export default Stars;