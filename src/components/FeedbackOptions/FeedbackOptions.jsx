import PropTypes from "prop-types";
import { Inner, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {    
    return (
     <Inner>
      {options.map(option => (
        <Button
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option.slice(0, 1).toLocaleUpperCase() + option.slice(1)}
        </Button>
      ))}
    </Inner>   
    );
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};