import React from 'react'

const cd = [
    {name : 'Discovery', band: 'Daft Punk', image:'cat-0001.jpg'},
    {name : 'Toxicity', band: 'System of a down', image:'cat-0002.jpg'}, 
    {name : 'Future Nostalgia', band: 'Dua Lipa', image:'cat-0003.jpg'}];

const listItems = cd.map((item) =>
    <div className="col-4"><img className="coverCd" src={'temp/'+item.image} /> <p className="textCd">{item.name}</p><p className="textCd">{item.band}</p></div>
);

const ItemListContainer = ({greeting}) => {
    return(
        <>
        <div className="ItemListContainer">  
            <p>{greeting}</p>
        </div>
        <div className='container'>
                <div className='row'>
                    {listItems}
                </div>
            </div>
        </>  
        )
    }

export default ItemListContainer