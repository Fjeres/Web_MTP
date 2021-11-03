import * as React from 'react';
import './App.css';

export default class Box_dir extends React.Component {
    constructor(props) {
        super(props);

        this.state =
            {
                data: {
                    1: [2, 4],
                    2: [3, 5],
                    3: [7, 0],
                    4: [1, 11],
                    5: [2, 8, 6],
                    6: [10,0],
                    7: [6, 0],
                    8: [12, 0],
                    9: [13, 5],
                    10: [6, 13],
                    11: [4, 0],
                    12: [11,0],
                    13: [9, 0],
                },
                color: {
                    1 :'#777070',
                    2 :'#777070',
                    3 :'#777070',
                    4 :'#777070',
                    5 :'#777070',
                    6 :'#777070',
                    7 :'#777070',
                    8 :'#777070',
                    9 :'#777070',
                    10 :'#777070',
                    11 :'#777070',
                    12 :'#777070',
                    13 :'#777070',
                },
                temp:[]
            }
    }

    handleclick = (id) => {

        if(this.state.temp.length === 0) {
            const newState = this.state;
            newState.color[id] = '#f50000';
            this.setState(newState);
            this.state.temp.push(id)
            console.log("Первый элемент:" + this.state.temp )
        }
        else
        {
           let  id_temp = this.state.temp[this.state.temp.length-1]
            if (this.state.data[id_temp][0] === id || this.state.data[id_temp][1] === id )
            {
                const newState = this.state;
                newState.color[id] = '#f50000';
                this.setState(newState);
                this.state.temp.push(id)
                console.log("Из " + id_temp +" в " + id)
            }
            else
            {
                id_temp = this.state.temp[this.state.temp.length-1]
                if (id_temp === id)
                {

                }
                else {
                    console.log("Не туда кликнул! начни с самого начала!")
                const newState = this.state;
                newState.color[1] = '#777070';
                newState.color[2] = '#777070';
                newState.color[3] = '#777070';
                newState.color[4] = '#777070';
                newState.color[5] = '#777070';
                newState.color[6] = '#777070';
                newState.color[7] = '#777070';
                newState.color[8] = '#777070';
                newState.color[9] = '#777070';
                newState.color[10] = '#777070';
                newState.color[11] = '#777070';
                newState.color[12] = '#777070';
                newState.color[13] = '#777070';
                newState.temp = [];
                this.setState(newState);
                }
            }

        }
    }


    render() {

        return (
            <div className='conteiner1'>
                <div className='div1'>
                    <button
                        style={{background: this.state.color[1]}}
                        onClick={() => {
                        this.handleclick(1);
                    }} className='button_min1'/>
                    <button
                        style={{background: this.state.color[2]}}
                        onClick={() => {
                        this.handleclick(2);
                    }} className='button_max1'/>
                    <button
                        style={{background: this.state.color[3]}}
                        onClick={() => {
                        this.handleclick(3);
                    }} className='button_min1'/>
                </div>
                <div className='div21'>
                    <button
                        style={{background: this.state.color[4]}}
                        onClick={() => {
                        this.handleclick(4);
                    }} className='button_med1'/>
                    <button
                        style={{background: this.state.color[8]}}
                        onClick={() => {
                        this.handleclick(8);
                    }} className='button_min1'/>
                    <button
                        style={{background: this.state.color[9]}}
                        onClick={() => {
                        this.handleclick(9);
                    }} className='button_min1'/>
                    <button
                        style={{background: this.state.color[10]}}
                        onClick={() => {
                        this.handleclick(10);
                    }} className='button_med_1'/>

                </div>
                <div style={{marginLeft: '70px'}}>
                    <button
                        style={{background: this.state.color[5]}}
                        onClick={() => {
                        this.handleclick(5);
                    }} className='button_min1'/>
                    <button
                        style={{marginLeft: '120px', background: this.state.color[6]}}
                        onClick={() => {
                        this.handleclick(6);
                    }}  className='button_min1'/>
                    <button
                        style={{background: this.state.color[7]}}
                        onClick={() => {
                        this.handleclick(7);
                    }} className='button_min1'/>
                </div>
                <div
                    style={{marginTop: '100px'}} className='div21'>
                    <button
                        style={{background: this.state.color[11]}}
                        onClick={() => {
                        this.handleclick(11);
                    }} className='button_min1'/>
                    <button
                        style={{background: this.state.color[12]}}
                        onClick={() => {
                        this.handleclick(12);
                    }} className='button_min1'/>
                    <button
                        style={{marginLeft: "190px", background: this.state.color[13]}}
                        onClick={() => {
                        this.handleclick(13);
                    }}  className='button_min1'/>
                </div>
            </div>
        )
    }


}