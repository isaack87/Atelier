import React from 'react';
import axios from 'axios';

class ReviewProductBreakdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeDiv: [],
            widthDiv: [],
            comfortDiv: [],
            qualityDiv: [],
            lengthDiv: [],
            fitDiv: []

        }
        this.getProductReviewMetadata = this.getProductReviewMetadata.bind(this);
        // this.generateProductMetadataDiv = this.generateProductMetadataDiv.bind(this);
    }
    getProductReviewMetadata() {
        const productID = this.props.product;
        //make a get request to endpoint for product metadata
        axios({
            method: 'post',
            url: 'http://localhost:3000/productBreakdown',
            //for testing purposes we use this default productID
            data: {productID}
        }).then(response => {
           console.log('response', response.data.characteristics);

        })
        
    }
    componentDidMount(){
        this.getProductReviewMetadata();
    }
    render() {

        return <div>
          
            {this.state.sizeDiv}
            {this.state.widthDiv}
            {this.state.comfortDiv}
            {this.state.lengthDiv}
            {this.state.fitDiv}
            
        </div>
    }
}
export default ReviewProductBreakdown;