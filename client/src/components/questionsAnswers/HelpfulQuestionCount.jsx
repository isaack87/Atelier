import React from 'react';
import $ from 'jquery';

const HelpfulQuestionCount = (props) => {
  const helpfulQincrementer = () => {
    $.ajax({
      method: 'POST',
      url: `http://localhost:3000/qhelpful`,
      contentType: 'application/json',
      data: JSON.stringify({qhelpid: props.id }),
      success: (data) => {
        console.log('helpfulQincrementer++ ');
      },
      error: () => {
        console.log('err helpfulAnswerAjax');
      },
    });
  };

  return (
    <div className="helpfulQuestionCounter">
      Helpful?
      <button type="submit" onClick={helpfulQincrementer} className="questionhelpfulbtn">Yes</button>
    </div>
  );
};

export default HelpfulQuestionCount;

















// import React from 'react';
// import $ from 'jquery';

// class HelpfulQuestionCount extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       qhelpfulcounter: [],
//       qhelpid: props.id,
//       pid: props.mainProductId,
//       new: []
//     }
//     this.helpfulQincrementer = this.helpfulQincrementer.bind(this);
//     this.getHelpful = this.getHelpful.bind(this);
//     //this.match = this.match.bind(this)
//   }

//   // componentDidMount() {
//   //   this.getHelpful();
//   // }

//   // match (data) {
//   //   console.log(data, '🤎')
//   // }

//   getHelpful() {
//     fetch(`http://localhost:3000/qhelpful?qid=${this.state.pid}`)
//       .then((response) => response.json())
//       .then((questions) => {
//         this.setState({
//           qhelpfulcounter: questions.results
//         }, () => {
//           const newObj = [];
//           let data = this.state.qhelpfulcounter
//           data.map(e => {
//             newObj.push({
//               qID: e.question_id,
//               questionHelpful: e.question_helpfulness,
//             });
//           });
//           this.setState({
//             new: newObj,
//           });
//         });
//       });
//   }

//   // helpfulQincrementer() {
//   //   $.ajax({
//   //     method: 'POST',
//   //     url: `http://localhost:3000/qhelpful`,
//   //     contentType: 'application/json',
//   //     data: JSON.stringify({qhelpid: this.state.qhelpid }),
//   //     success: (data) => {
//   //       this.getHelpful();
//   //       this.match(this.state.new.map(e => {
//   //         return e.qID
//   //       }));
//   //       console.log('helpfulQincrementer++ ');
//   //     },
//   //     error: () => {
//   //       console.log('err helpfulAnswerAjax');
//   //     },
//   //   });
//   // };

//   render() {
//   return (
//     <div className="helpfulQuestionCounter">
//       Helpful?
//       <button type="submit" onClick={this.helpfulQincrementer} className="questionhelpfulbtn">Yes</button>
//     </div>
//   );
// };
// }

// export default HelpfulQuestionCount;