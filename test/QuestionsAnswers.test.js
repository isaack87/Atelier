import React from 'react';

import { shallow } from 'enzyme';
import { App } from '../client/src/index.jsx'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import AnswerForm from '../client/src/components/questionsAnswers/AnswerForm.jsx';
import AnswerReport from '../client/src/components/questionsAnswers/AnswerReport.jsx';
import AskQuestions from '../client/src/components/questionsAnswers/AskQuestionButtons.jsx'
import MainAnswerQuestionBox from '../client/src/components/questionsAnswers/MainAnswerQuestionBox.jsx'
import QuestionsAnswersState from '../client/src/components/questionsAnswers/QuestionAnswerState.jsx'
import HelpfulAnswerCount from '../client/src/components/questionsAnswers/HelpfulAnswerCount.jsx'
import HelpfulQuestionCount from '../client/src/components/questionsAnswers/HelpfulQuestionCount.jsx'

Enzyme.configure({ adapter: new Adapter() });

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

describe('AnswerReport', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AnswerReport />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('AskQuestions', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AskQuestions />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(AskQuestions)).to.be.false;
  });

});

describe('HelpfulAnswerCount', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HelpfulAnswerCount />);
    expect(wrapper).toMatchSnapshot();
  });
});


describe('HelpfulQuestionCount', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HelpfulQuestionCount />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('MainAnswerQuestionBox', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainAnswerQuestionBox />);

    expect(wrapper).toMatchSnapshot(child);
  });
});

describe('Test App Entry point', function () {
  it('should have a header tag with FEC PROJECT!', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find("h1").text()).toEqual("FEC PROJECT");
  });
});


it('renders a map items', () => {
  const items = ['question1', 'question2'];
  const wrapper = shallow(<MainAnswerQuestionBox items={items} />);
  // Check if an element in the Component exists
  expect(wrapper.contains(<li key='question1'>question1</li >)).toBeTruthy();
});

describe('QuestionsAnswersState', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<QuestionsAnswersState />);
    expect(wrapper).toMatchSnapshot();
  });
});


