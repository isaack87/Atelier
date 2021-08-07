import React from 'react';
const helpers = {

    reviewResponse: (response) => {
        if (response !== null || response !== '') {
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
    helpfulness: (helpNum) => {
        if (helpNum > 0) {
            return (<div>
                
            </div>)
        }
    }
}
export default helpers;