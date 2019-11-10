import React from 'react'

const sideBar = ({days, onChange}) => {
  return (
    <div className="column is-one-quarter side-bar">
      <div className="categories">
        <h3>Filter by date</h3>
        <div className="radio ">
          <input type="radio" name="days" value="1" onChange={onChange} checked={days === '1'}/>
          <label className="radio-label">last 24h</label>
        </div>
        <div className="radio">
          <input onChange={onChange} type="radio" name="days" value="7" checked={days === '7'}/>
          <label className="radio-label">last week</label>
        </div>
        <div className="radio">
          <input onChange={onChange} type="radio" name="days" value="30" checked={days === '30'}/>
          <label className="radio-label">last mount</label>
        </div>
        <div className="radio">
          <input onChange={onChange} onClick={onChange} type="radio" name="days" value="365" checked={days === '365'}/>
          <label  className="radio-label">last year</label>
        </div>
        <h3>Number of posts</h3>
        <select className="search-select" name="numbers" onChange={onChange}>
          <option value="60">Number of results</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
        </select>
      </div>
      <div>
        <h3>Most popular tags</h3>
      </div>
    </div>
  )
}

export default sideBar
