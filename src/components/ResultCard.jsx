import { LuMoreVertical } from 'react-icons/lu';
import React from 'react'
import { Link } from 'react-router-dom';

const ResultCard = ({Results}) => {
  return (
    <Link to={`${Results.url}`} className='link_A' style={{textDecoration:'none',color:'skyblue'}}>
    <div className="result_card">
    <div className="card_nav">
        <div className="logo">
            <img src={`https://picsum.photos/${30}/${30}`} alt="" />

        </div>
        <div className="details">
            <h4>Source Google Api</h4>
            <span><a href={Results.url}>{Results.url.slice(0, 48)}</a>  <LuMoreVertical/></span>
        </div>
    </div>
<div className="ma">

    <a href={Results.url} className='link'>{Results.title.slice(0, 48)}{Results.title.length > 15 ? '...' : ''}</a>
</div>

    <div className="next">
    <p>{Results.description}...</p>

  </div>
    </div>
    </Link>
  )
}

export default ResultCard
