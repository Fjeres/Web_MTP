import * as React from 'react';
import './App.css';

export default class Box_dirBox extends React.Component {
    constructor(props) {
        super(props);

        this.state =
            {}

    }

    render() {
        return (
            <div className='conteiner'>
                <div className='div1'>
                    <button className='button_min'></button>
                    <button className='button_max'></button>
                    <button className='button_min'></button>
                </div>
                <div className='div2'>
                    <button className='button_med'></button>
                    <button className='button_min'></button>
                    <button className='button_min'></button>
                    <button className='button_med_'></button>

                </div>
                <div style={{marginLeft: '70px'}}>
                    <button  className='button_min'></button>
                    <button style={{marginLeft:'120px'}} className='button_min'></button>
                    <button className='button_min'></button>
                </div>
                <div style={{marginTop:'100px'}} className='div2'>
                    <button  className='button_min'></button>
                    <button className='button_min'></button>
                    <button style={{marginLeft:"190px"}} className='button_min'></button>
                </div>
            </div>
        )
    }


}