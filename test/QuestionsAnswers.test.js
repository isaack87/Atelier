import React from 'react';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AnswerForm from '../client/src/components/questionsAnswers/AnswerForm.jsx';
//import AnswerPhotos from '../client/src/components/questionsAnswers/AnswerPhotos.jsx.jsx';
import AnswerReport from '../client/src/components/questionsAnswers/AnswerReport.jsx';
import AskQuestions from '../client/src/components/questionsAnswers/AskQuestionButtons.jsx'
import MainAnswerQuestionBox from '../client/src/components/questionsAnswers/MainAnswerQuestionBox.jsx'
import QuestionsAnswersState from '../client/src/components/questionsAnswers/QuestionAnswerState.jsx'
import HelpfulAnswerCount from '../client/src/components/questionsAnswers/HelpfulAnswerCount.jsx'
import HelpfulQuestionCount from '../client/src/components/questionsAnswers/HelpfulQuestionCount.jsx'

Enzyme.configure({ adapter: new Adapter() });

//👻👻👻👻👻👻👻👻👻👻👻👻
// Testing Answer Form
//👻👻👻👻👻👻👻👻👻👻👻👻👻

describe('AnswerForm', () => {
  it('should be true that AnswerForm exists', () => {
    const wrapper = shallow(<AnswerForm />);
    expect(wrapper.find(AnswerForm)).toBeTruthy();
  });
});

describe('AnswerForm', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AnswerForm />);
    expect(wrapper).toMatchSnapshot();
  });
});

// Testing AnswerPhotos Form
// describe('AnswerPhotos', () => {
//   it('renders correctly', () => {
//     const wrapper = shallow(<AnswerPhotos />);
//     expect(wrapper).toMatchSnapshot();
//     // On the first run of this test, Jest will generate a snapshot file automatically.
//   });
// });


//👻👻👻👻👻👻👻👻👻👻👻👻👻
// Testing Answer Report
//👻👻👻👻👻👻👻👻👻👻👻👻👻

describe('AnswerReport', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AnswerReport />);
    expect(wrapper).toMatchSnapshot();
  });
});


//👻👻👻👻👻👻👻👻👻👻👻👻👻
// Testing AskQuestionButtons Form
//👻👻👻👻👻👻👻👻👻👻👻👻👻

describe('AskQuestions', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AskQuestions />);
    expect(wrapper).toMatchSnapshot();
  });
});


//👻👻👻👻👻👻👻👻👻👻👻👻👻
// Testing HelpfulAnswersCount Form
//👻👻👻👻👻👻👻👻👻👻👻👻👻

describe('HelpfulAnswerCount', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HelpfulAnswerCount />);
    expect(wrapper).toMatchSnapshot();
  });
});


//👻👻👻👻👻👻👻👻👻👻👻👻👻
// Testing HelpfulQuestionCount Form
//👻👻👻👻👻👻👻👻👻👻👻👻👻

describe('HelpfulQuestionCount', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HelpfulQuestionCount />);
    expect(wrapper).toMatchSnapshot();
  });
});


//👻👻👻👻👻👻👻👻👻👻👻👻👻
// Testing LoadMoreAnswers Form
//👻👻👻👻👻👻👻👻👻👻👻👻👻



//👻👻👻👻👻👻👻👻👻👻👻👻👻
// Testing MainAnswersQuestionBox Form
//👻👻👻👻👻👻👻👻👻👻👻👻👻

describe('MainAnswerQuestionBox', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainAnswerQuestionBox />);
    expect(wrapper).toMatchSnapshot();
  });
});


//👻👻👻👻👻👻👻👻👻👻👻👻👻
// Testing QuestionAnswerState Form
//👻👻👻👻👻👻👻👻👻👻👻👻👻

describe('QuestionsAnswersState', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<QuestionsAnswersState />);
    expect(wrapper).toMatchSnapshot();
  });
});




//👻👻👻👻👻👻👻👻👻👻👻👻👻
// Testing QuestionForm Form
//👻👻👻👻👻👻👻👻👻👻👻👻👻




//👻👻👻👻👻👻👻👻👻👻👻👻👻
// Testing QuestionReport Form
//👻👻👻👻👻👻👻👻👻👻👻👻👻




//👻👻👻👻👻👻👻👻👻👻👻👻👻
// Testing SearchBar Form
//👻👻👻👻👻👻👻👻👻👻👻👻👻

