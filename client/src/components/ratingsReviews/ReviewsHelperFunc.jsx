import React from 'react';
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
    generateHelpfulness: (helpNum) => {
        if (helpNum > 0) {
            return (<div id="helpful">
                <span><p id="helpful-question">Helpful? </p>
                <p id= "helpful-link" onClick = {
                    () => {
                        
                    }
                }>Yes ({helpNum})</p>
                </span>
                
            </div>)
        }
    }
}
export default helpers;