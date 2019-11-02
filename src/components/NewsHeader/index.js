import React from "react"

class NewsHeader extends React.Component {
  render() {
    return (
      <div className="newsHeader">
        <h1 className="newsHeader__title">What's new?</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="white" points="0,40 100,100 0,100" />
        </svg>
      </div>
    )
  }
}

export default NewsHeader
