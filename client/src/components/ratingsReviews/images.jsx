import React from 'react';
import jquery from 'jquery';
window.$ = window.jquery = jquery;

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
         this.createImageDiv = this.createImageDiv.bind(this);
         this.modalClick = this.modalClick.bind(this);
    }
    modalClick = (imageID, imageSrc)=> {
            //test
            // $("#app").on("click", ()=> {
            //     console.log('apop is click')
            // })


        let modal = document.getElementById('mymodal' + imageID)
     
        let img = document.getElementsByClassName(imageID);
        let modalImg = document.getElementById('modalImg' + imageID)
        console.log('img', img, "modalimg", modalImg);

             modalImg.src = imageSrc;
             modal.style.display = "block"

        let span = document.getElementsByClassName('close-modal');
        span.onclick = () => {
            modal.style.display = 'none';
        }

    }
    createImageDiv(imageArr) {
        let imagesDiv = [];
        imageArr.forEach(image => {
            imagesDiv.push(
            <div>
                <img id= "review-image" className = {image.id} onClick = { (e)=> {
                    e.preventDefault();
                    this.modalClick(image.id, image.url);
                   
                }} key= {image.id} src= {image.url}/>

                <div id= {"mymodal" + image.id} className = 'modal'>
                    {/* <span className = 'close-modal'>x</span> */}
                    <img className="modal-content" id= {"modalImg" + image.id}/>
                </div>
            </div>)
        });
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