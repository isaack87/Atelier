import React from 'react';

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        console.log('the props for the images', this.props)
    }
    render() {
        return <div>
            <h3>image here</h3>
        </div>
    }
}
export default Images;