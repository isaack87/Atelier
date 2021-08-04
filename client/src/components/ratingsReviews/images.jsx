import React from 'react';

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
         this.createImageDiv = this.createImageDiv.bind(this);
    }
    createImageDiv(imageArr) {
        let imagesDiv = [];
        imageArr.forEach(image => {
            imagesDiv.push(<img id= "review-image" key= {image.id} src= {image.url}/>)
        })
        let div = <div >{imagesDiv}</div>
        this.setState({images: div});

    }
    componentDidMount() {

        this.createImageDiv(this.props.props);
    }
    render() {
        return <div>

            {this.state.images}
        </div>
    }
}
export default Images;