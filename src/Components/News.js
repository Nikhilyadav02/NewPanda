import React, { Component } from 'react'
import NewsItem from './NewsItem.js';

export class News extends Component {
  render() {
    return (
      <div>
        this is new news component

        <NewsItem/>
      </div>
    )
  }
}

export default News
