import React, {Component} from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import NoStatistics from './NoStatistics';
import Section from "../Section/Section";

class FeedbackForm extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    handleGoodClicks = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
}
        })
    }
    
    handleNeutralClicks = () => {
         this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
}
        })
    }

    handleBadClicks = () => {
      this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
}
        })
    }
    countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
	};

    countPositiveFeedbackPercentage = () => {
		const result = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
    };
    
    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
        <div className="feedback">
            <Section title ="Please leave feedback">
                <FeedbackOptions onGoodClicks={this.handleGoodClicks} onNeutralClicks={this.handleNeutralClicks} onBadClicks={this.handleBadClicks}></FeedbackOptions>
                </Section>
                {total === 0 ? (<NoStatistics message="No feedback given"/>) : (
                    <Section title="Statistics">
                        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positiveFeedback={positivePercentage}></Statistics>
                    </Section>)
                }
        </div>
    )
    }
}

export default FeedbackForm;