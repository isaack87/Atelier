import React from 'react';
import $ from 'jquery';


class AddReview extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalToAddReview: [],
            showModal: false,
            starIcons: [<span className= "fa fa-star empty-star"></span>],
            addReviewButtonDiv: [],
            starInfo: [],
            radioBtnForm: [],
            characteristicsDiv: [],
            allCharacteristicInfo: {
                'Size': {
                    1: 'A size too small',
                    2: '1/2 a size too small',
                    3: 'Perfect',
                    4: '1/2 a size too big',
                    5: 'A size too wide',
                },
                'Width': {
                    1: 'Too narrow',
                    2: 'Slightly narrow',
                    3: 'Perfect',
                    4: 'Slightly Wide',
                    5: 'A size too wide',
                },
                'Comfort': {
                    1: 'Uncomfortable',
                    2: 'Slightly uncomfortable',
                    3: 'Ok',
                    4: 'Comfortable',
                    5: 'Perfect'
                },
                'Quality': {
                    1: 'Poor',
                    2: 'Below average',
                    3: 'What I expected',
                    4: 'Pretty great',
                    5: 'Perfect'
                },
                'Length': {
                    1: 'Runs short',
                    2: 'Runs slighty short',
                    3: 'Perfect',
                    4: 'Runs slightly long',
                    5: 'Runs long'
                },
                'Fit': {
                    1: 'Runs tight',
                    2: 'Runs slightly tight',
                    3: 'Perfect',
                    4: 'Runs slighly long',
                    5: 'Runs long'
                }
            },
            counter: [],
            filesAdded: 1,
        } 
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.buildModal = this.buildModal.bind(this);
        this.buildStarIcons = this.buildStarIcons.bind(this);
        this.addReviewButton = this.addReviewButton.bind(this);
        this.updateStarIcon = this.updateStarIcon.bind(this);
        this.buildStarExplanation = this.buildStarExplanation.bind(this);
        this.buildRadioBtnForm = this.buildRadioBtnForm.bind(this);
        this.buildCharacteristicsDiv = this.buildCharacteristicsDiv.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
    }
    showModal(){
        this.setState({showModal: true}, ()=> {
            this.buildModal(this.state.showModal);
        });
    }
    hideModal(){
        this.setState({showModal:false}, ()=> {
            this.buildModal(this.state.showModal);
        });
    }
    handleImageUpload(){
            // let src = URL.createObjectURL(this.files[0]);
                            // document.getElementById('image').src = src;
        console.log('this files??', this.files)
    }
    buildCharacteristicsDiv(){
        const characteristics = this.props.productInfo;
        let characteristicsArr = [];
        let meaning;
        for (let elem in characteristics) {

            meaning = [];
            if (elem === 'Size') {
                meaning.push(<div id='meaning'><span>1 = 'A size too small', 5 = 'A size too big'</span></div>)
            } else if (elem === 'Width') {
                meaning.push(<div id='meaning'><span>1 = 'Too Narrow', 5 = 'Too wide'</span></div>)
            } else if (elem === 'Comfort') {
                meaning.push(<div id='meaning'><span>1 = 'Uncomfortable', 5 = 'Perfect'</span></div>)
            } else if (elem === 'Quality') {
                meaning.push(<div id='meaning'><span>1 = 'Poor', 5 = 'Perfect'</span></div>)
            } else if (elem === 'Length') {
                meaning.push(<div id='meaning'><span>1 = 'Runs short', 5 = 'Runs long'</span></div>)
            } else if (elem === 'Fit') {
                meaning.push(<div id='meaning'><span>1 = 'Runs tight', 5 = 'Runs long'</span></div>)
            }
            characteristicsArr.push(<div id={elem}>
                <form>
                <p id = 'review-bold'>{elem}</p>
                <p id = {elem + '-info'}>None selected</p>
                <input type='radio' name='radio' value='1' onClick = {()=> {
                    let info = this.state.allCharacteristicInfo[elem][1];
                    $(`#${elem}-info`).empty();
                    $(`#${elem}-info`).append(info);
                }}></input>
                    <span>1</span>
                <input type='radio' name='radio' value='2' onClick = {()=> {
                    let info = this.state.allCharacteristicInfo[elem][2];
                    $(`#${elem}-info`).empty();
                    $(`#${elem}-info`).append(info);
                }}></input>
                    <span>2</span>
                <input type='radio' name='radio' value='3' onClick = {()=> {
                    let info = this.state.allCharacteristicInfo[elem][3];
                    $(`#${elem}-info`).empty();
                    $(`#${elem}-info`).append(info);
                }}></input>
                    <span>3</span>
                <input type='radio' name='radio' value='4' onClick = {()=> {
                    let info = this.state.allCharacteristicInfo[elem][4];
                    $(`#${elem}-info`).empty();
                    $(`#${elem}-info`).append(info);
                }}></input>
                    <span>4</span>
                <input type='radio' name='radio' value='5' onClick = {()=> {
                    let info = this.state.allCharacteristicInfo[elem][5];
                    $(`#${elem}-info`).empty();
                    $(`#${elem}-info`).append(info);
                }}></input>
                    <span>5</span>
                    </form>
                    {meaning}
            </div>)
        }
        let charactInfoDiv = <div id='characteristics'>{characteristicsArr}</div>
        this.setState({characteristicsDiv: characteristicsArr})

    }
    //handles building the radio button form
    buildRadioBtnForm(){
        const radioForm =
        <div id='radio-form'>
            <ul>
                <li>
                    <input type='radio' name='radio' value='yes'>Yes</input>
                </li>
            </ul>
        </div>
        this.setState({radioBtnForm:radioForm})
    }
    //handles building clickable star icons for our review modal
    buildStarIcons(){
        let starIconsDiv = [];
        for (let i = 1; i <= 5; i++) {
            starIconsDiv.push(
                <span className= "fa fa-star empty-star star-modal" id={'star-icon' + i} onClick = {()=> {
                    console.log('star clicked', i);
                    this.updateStarIcon(i);
                }}></span>
            )
        }
        
        this.setState({starIcons: <div><div id ='star-div-modal'>{starIconsDiv}</div><span id='text-explanation'></span></div>})

    }
    //handles updating star icon based on which star is clicked
    updateStarIcon(i) {
     //after clicking, appear meaning of selections
        this.buildStarExplanation();
        for (let a = 1; a <= i; a++) {
            $(`#star-icon${a}`).addClass('full-star');
        }
        // //remove any stars from after i, in case
        for (let a = 5; a > i; a--) {
            $(`#star-icon${a}`).removeClass('full-star');
        }
        const textExplanation = 
        `<div id='text-explanation-paragraphs'>
        <p>
        1 star = "Poor"
        </p>
        <p>
        2 star = "Fair"
        </p>
        <p>
        3 star = "Average"
    </p>
    <p>
        4 star = "Good"
    </p>
    <p>
        5 star = "Great"
    </p></div>
        `;
        $(`#text-explanation`).empty()
        $(`#text-explanation`).append(textExplanation)
    // this.buildStarExplanation()
       
    }
    buildStarExplanation() {
        const textExplanation = <span id='text-explanation'>
        <p>
        1 star = "Poor"
        </p>
        <p>
        2 star = "Fair"
        </p>
        <p>
        3 star = "Average"
    </p>
    <p>
        4 star = "Good"
    </p>
    <p>
        5 star = "Great"
    </p>
        </span>;
        this.setState({starInfo: textExplanation});
   

    }
    addReviewButton() {
        const reviewBtnDiv =  <div>
            <button id='add-review-btn' onClick = {
                () => {
                    this.showModal()
                }
            }>Add a Review</button>
            {this.state.modalToAddReview}
        </div>
        this.setState({addReviewButtonDiv: reviewBtnDiv})
    }
    buildModal(show) {

        const showHideClassName = show ? 'modal display-block' : 'modal display-none'
        let div = (
            <div className = {showHideClassName}>
                <section className = 'modal-main'>
                    <h2>Write Your Review</h2>
                    <h3>About the {this.props.productName.productName} </h3>
                    
                    {this.state.starIcons}
                    {this.state.starInfo}
                    <div id='radio-form'>
                        <p id ='review-bold'>Do you recommend this product?</p>
                        <form>
                        <input type='radio' name='radio' value='yes' defaultChecked></input>
                            <span>Yes</span>
                            <br></br>
                       
                        <input type='radio' name='radio' value='no'></input>
                            <span>No</span>
                            </form>
                   
                    </div>
                    {this.state.characteristicsDiv}
                    <form>
                        <p id= 'review-bold'>Review Summary</p>
                        <textarea id = 'review-summary-text' maxLength = '60' placeholder = 'Example: Best purchase ever!'></textarea>
                    </form>
                    <form>
                        <p id= 'review-bold'>Review Body</p>
                        <textarea id = 'review-body-text' maxLength = '1000'  placeholder = 'Why did you like the product or not?' onChange = {(e)=> {
                            let inputBody = e.target.value;
                            let inputBodyLength = inputBody.split('').length;
                            let minimumLeft = 50 - inputBodyLength;
                            $('#counter-review-body').empty();
                            if (minimumLeft > 0) {
                                $('#counter-review-body').append(`Minimum required characters left: ${minimumLeft}`)
                            } else {
                                $('#counter-review-body').append(`Minimum reached`)
                            }
                        }}></textarea>
                    </form>
                    <p id= 'counter-review-body'>Minimum required characters left: 50</p>
                    <form id ='add-files-form'>
                        <p>Upload photos</p>
                        <input  type='file' onChange = {(e) => {
                            let src = URL.createObjectURL(e.target.files[0]);
                            let count = this.state.filesAdded;
                            if (count < 5) {
                                console.log('count lesss than five', count)
                                $('#image-thumbnails').append(`<img src=${src} height = '100' ></img>`);
                                this.setState({filesAdded: count + 1});
                            } if (count === 5) {
                                console.log('count is five', count)
                                $('#image-thumbnails').append(`<img src=${src} height = '100' ></img>`);
                                $('#add-files-form').empty();
                                this.setState({filesAdded: 0})
                            }
                              
                            
                            
                            //document.getElementById(imgId).src = src;

                            
  

                        }}></input>

                    </form>
                    <div id='image-thumbnails'></div>
                    <button type='button' id='button-modal' onClick = {()=> {
                        this.hideModal()
                    }}>x</button>
                </section>

            </div>
        );
        this.setState({modalToAddReview: div});
    }
  
    componentDidMount(){
        this.setState({productInfo: this.props.productInfo}, ()=> {
            this.buildStarIcons();
            this.addReviewButton();

        })
    }
    componentDidUpdate() {
        if (this.props.productInfo !== this.state.productInfo ) {
            this.setState({productInfo: this.props.productInfo});
            this.buildCharacteristicsDiv();
        }
    }
    render() {

        
        if (Object.keys(this.props.productInfo).length > 0) {
            
            return <div>
            {this.state.addReviewButtonDiv}
            {this.state.modalToAddReview}
        </div>

        } else {
            return <p>loading...</p>
        }  
    }
}

export default AddReview;