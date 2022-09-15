import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({onGoodClicks, onNeutralClicks,onBadClicks}) => (
    <div className="feedback__controls">
        <button type="button" className="feedback__button" onClick={onGoodClicks}>Good</button>
        <button type="button" className="feedback__button" onClick={onNeutralClicks}>Neutral</button>
        <button type="button" className="feedback__button" onClick={onBadClicks}>Bad</button>
    </div>
);

FeedbackOptions.propTypes = {
    onGoodClicks: PropTypes.func.isRequired, 
    onNeutralClicks: PropTypes.func.isRequired,
    onBadClicks: PropTypes.func.isRequired,
    }

export default FeedbackOptions;