import React from 'react';
import { useState, useEffect } from 'react';
import { Section } from "./Section";
import { Statistics } from './Statistics';
import { FeedbackOptions } from "./Feedbackoptions";
import { Notification } from "./Notification";

const App = () => {
   const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };
  const countPositiveFeedbackPercentage = () => { return ((good * 100) / (good + neutral + bad)).toFixed(2)};

  const handleFeedback = (e) => {
    const { name } = e.target;

    switch (name) {
      case 'good': setGood(state => state + 1); break;
      case 'neutral': setNeutral(state => state + 1); break;
      case 'bad': setBad(state => state + 1); break;
      default: alert('Не знайдено потрібних значень.')
    }
  }
  
  
  return (<div>
    <Section title={"Please leave your feedback"} >
      <FeedbackOptions options={options} onLeaveFeedback={handleFeedback}></FeedbackOptions>
    </Section>
    <Section title={"Statistics"}>
      {good+neutral+bad > 0 ? <Statistics good={good} neutral={neutral} bad={bad } total={good+bad+neutral} positivePercentage={countPositiveFeedbackPercentage()}> </Statistics> : <Notification message={"There is no feedback"}></Notification>}
      
    </Section>
    
  </div>)
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0, 
//     bad: 0,
//   };
  
//   handleFeedback = (evt) => {
//    this.setState(prevState => ({
//       [evt.target.name]: prevState[evt.target.name] + 1,
//     }));
// }

//   countTotalFeedback = () => {
//     const total = this.state.good + this.state.neutral + this.state.bad || 0;
//     return total;
//   };
  // countPositiveFeedbackPercentage = () => {
  //   return (
  //     (this.state.good * 100) /
  //     (this.state.good + this.state.neutral + this.state.bad)
  //   ).toFixed(2);
//   };
//   render() {
//     return (
//       <div>
//         <Section title={"Please leave your feedback"} >
//            <FeedbackOptions options={this.state} onLeaveFeedback={this.handleFeedback}/>
//         </Section>
//         {/* <h1>Please leave your feedback</h1> */}
//         <Section title={"Statistics"}>
//           {this.countTotalFeedback() > 0
//             ? <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
//             : <Notification message={"There is no feedback"}></Notification>}
          
//        </Section> 
//       </div>
//     );
//   }
// };
export {App};
