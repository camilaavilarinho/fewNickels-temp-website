import React, { Component } from "react";
import styled from "styled-components";

export default class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    const endDate = this.endDate(this.props.date);

    this.interval = setInterval(() => {
      const date = this.calculateCountDown(endDate);
      /* this.setState(date); */
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  endDate(date) {
    const year = date.year;
    const month = date.month - 1;
    const day = date.day;
    const hour = date.hour;
    const minute = date.minute;
    const second = date.second;

    const newDate = new Date(year, month, day, hour, minute, second);
    const endDate = Date.parse(newDate);

    console.log("newDate: ", endDate);
    return endDate;
  }

  calculateCountDown(endDate) {
    const dateLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    const start = Date.now();
    let diff = endDate - start;

    if (diff >= 86400000) {
      // 1000 * 60 * 60 * 24
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff = diff % (1000 * 60 * 60 * 24);
      dateLeft.days = days;
    }
    if (diff > 3600000) {
      // 1000 * 60 * 60
      const hours = Math.floor(diff / 3600000);
      diff = diff % 3600000;
      dateLeft.hours = hours;
    }

    if (diff > 60000) {
      // 1000 * 60
      const minutes = Math.floor(diff / 60000);
      diff = diff % 60000;
      const seconds = Math.floor(diff / 1000);
      dateLeft.minutes = minutes;
      dateLeft.seconds = seconds;
    }

    /* console.log("dateLeft: ", dateLeft); */

    return dateLeft;
  }

  render() {
    const Countdown = styled.div`
      background-color: #ecf0f1;
      padding: 2rem;
      color: #30336b;
      text-align: center;
      text-transform: uppercase;
      font-weight: 300;
    `;

    const Wrapper = styled.div`
      border: 2px solid #30336b;
      border-radius: 5px;
      width: 110px;
      padding: 20px;
      display: inline-box;
      margin: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);

      & > h2 {
        font-size: 30px;
      }

      & > span {
        padding: 5px;
      }
    `;

    const contDown = this.state;

    return (
      <Countdown>
        <Wrapper>
          <h2>{contDown.days} </h2>
          <span>days</span>
        </Wrapper>
        <Wrapper>
          <h2>{contDown.hours} </h2>
          <span>hours</span>
        </Wrapper>
        <Wrapper>
          <h2>{contDown.minutes} </h2>
          <span>min</span>
        </Wrapper>
        <Wrapper>
          <h2>{contDown.seconds} </h2>
          <span>sec</span>
        </Wrapper>
      </Countdown>
    );
  }
  /* export default ({ date }) => (
  endDate(date),
  console.log("date now: ", start),
  console.log("date test: ", testDate),
  (

  )
); */
}
