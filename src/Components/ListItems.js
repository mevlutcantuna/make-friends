import React from 'react';
import '../Styles/ListItems.scss'
import ListItem from "./ListItem";
import {useSelector} from "react-redux";


function ListItems(props) {
        const list = useSelector(state => state.list);
        console.log(list);
    return (
        <>{
            list.length !== 0 ? (<div className={'listItems'}>
            {list.map((item) => (
                <ListItem history={props.history} handlePageChange={props.handlePageChange} key={item.id} info={item}/>
            ))}
            </div>):(<h1 style={{display: 'flex',justifyContent: 'center',marginTop: '5rem'}}>No People</h1>)
        }
        </>

    );
}

export default ListItems;