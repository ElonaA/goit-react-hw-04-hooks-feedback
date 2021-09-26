import { useState } from 'react';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

function App() {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
  
 const updateCountFeedback = (data) => {
   switch (data) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
  
  
 const countTotalFeedback = () => {
  return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
   return Math.round((good / countTotalFeedback()) * 100) || 0;
  }
  

  return (
        <>
        <Section title="Оставьте отзыв о нашей компании">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']} onLeaveFeedback={updateCountFeedback}
          />
        </Section>

          
          
      <Section title="Наши отзывы ">
          {countTotalFeedback() === 0 ? (
            <Notification message="Отзывов пока нет..." />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
        </>
        
  );

}


export default App;


//Рабочий вариант на классах

// export class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

  
//   updateCountFeedback = (data) => {
//   this.setState((prevState) => {
//     return { [data]: prevState[data] + 1 };
//   });
//   };
  
  
//   countTotalFeedback() {
//   return Object.values(this.state).reduce((acc, value) => acc + value, 0);
//   }

//   countPositiveFeedbackPercentage() {
//   const total = this.countTotalFeedback();

//   return total ? Math.floor((this.state.good / total) * 100).toFixed(0) : 0;
//   }
  
  

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//       return(
//         <>
//         <Section title="Оставьте отзыв о нашей компании">
//           <FeedbackOptions
//             options={this.state} onLeaveFeedback={this.updateCountFeedback}
//           />
//         </Section>

          
          
//       <Section title="Наши отзывы ">
//           {total === 0 ? (
//             <Notification message="Отзывов пока нет..." />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           )}
//         </Section>
//         </>
        
//   );
//   }

// }
