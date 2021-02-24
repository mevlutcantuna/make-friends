import React from 'react';
import '../Styles/Form.scss';
import {useDispatch, useSelector} from "react-redux";

function Form() {

    const name = useSelector(state => state.name);
    const surname = useSelector(state => state.surname);
    const age = useSelector(state => state.age);
    const job = useSelector(state => state.job);
    const mail = useSelector(state => state.mail);
    const about = useSelector(state => state.about);
    const list = useSelector(state => state.list);
    const dispatch = useDispatch();

    console.log(list);
    return (
        <div className={'form'}>
            <input onChange={(event) => dispatch({type:'CHANGENAME',payload:event.target.value})} value={name} type={'text'} placeholder={'Your Name'}/>
            <input onChange={(event) => dispatch({type:'CHANGESURNAME',payload:event.target.value})} value={surname} type={'text'} placeholder={'Your Surname'}/>
            <input onChange={(event) => dispatch({type:'CHANGEAGE',payload:event.target.value})} value={age} type={'number'} placeholder={'Your Age'}/>
            <input onChange={(event) => dispatch({type:'CHANGEJOB',payload:event.target.value})} value={job} type={'text'} placeholder={'Your Job'}/>
            <input onChange={(event) => dispatch({type:'CHANGEMAIL',payload:event.target.value})} value={mail} type={'email'} placeholder={'Your Mail'}/>
            <textarea onChange={(event) => dispatch({type:'CHANGEABOUT',payload:event.target.value})} value={about} className={'form__about'} placeholder={'About'}/>
            <button onClick={() => dispatch({type: 'ADDBUTTON'})} className={'form__button'}>Save</button>
        </div>
    );
}

export default Form;