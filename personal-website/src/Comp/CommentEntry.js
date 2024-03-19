import React from 'react'

function CommentEntry() {
  return (
    <div className='commentParent'>
        <div className='userInfo'>
            <div className='propic'></div>
            <div className='nameRel'>
            <div className='name'><p className='nameText'>Filan Baba</p></div>
            <div className='relationTo'>Collague</div>
            </div>
            <div className='rating'>
                <div className='numrating'>Rating: 4 of 5</div>
                <div className='barrating'>
                    <div className='trueRating'>
                    {/* Sheno numrin e pikve ktu nstyle */}
                    </div>
                </div>
            </div>
        </div>
        <div className='userMessage'>
            <p className='textField'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p className='pubDate'>Published: 01/01/1001</p>
        </div>
    </div>
  )
}

export default CommentEntry
