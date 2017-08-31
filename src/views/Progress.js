import 'rc-calendar/assets/index.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { List } from 'material-ui/List';

import FullCalendar from 'rc-calendar/lib/FullCalendar'

import 'rc-select/assets/index.css'

import zhCN from 'rc-calendar/lib/locale/zh_CN'
import enUS from 'rc-calendar/lib/locale/en_US'

import moment from 'moment'
import 'moment/locale/zh-cn'
import 'moment/locale/en-gb'

import Select from 'rc-select'


const format = 'YYYY-MM-DD'
const cn = window.location.search.indexOf('cn') !== -1

const now = moment();
if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}

const defaultCalendarValue = now.clone()
defaultCalendarValue.add(-1, 'month')

function onSelect(value) {
  console.log('select', value.format(format));
}

class Progress extends Component {
  getInitialState() {
    return {
      type: 'month',
    };
  }

  onTypeChange(type) {
    this.setState({
      type,
    });
  }

  render() {

    return(
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '3em'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '2em'}}>
          <FullCalendar
            style = {{ margin: 10, fontSize: 15, height: 380, width: 500, backgroundColor: '#eee' }}
            Select = { Select }
            fullscreen = { false }
            onSelect = { onSelect }
            defaultValue = { now }
            locale = { cn ? zhCN : enUS }
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '2em'}}>
          <p style={{fontSize: 30}}>Current <span style={{fontWeight: 600}}>Week</span> Progress</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '2em'}}>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box' style={{backgroundColor: '#76FF03'}}/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>
          <div className='box'/>

          </div>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '2em'}}>
            <p style={{fontSize: 30}}>Current <span style={{fontWeight: 600}}>Month</span> Progress</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '2em'}}>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box' style={{backgroundColor: '#D500F9'}}/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>

            </div>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '2em'}}>
              <p style={{fontSize: 30}}>Current <span style={{fontWeight: 600}}>Year</span> Progress</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '2em', marginBottom: '5em'}}>
              <div className='box' style={{backgroundColor: '#FF1744'}}/>
              <div className='box' style={{backgroundColor: '#FF1744'}}/>
              <div className='box' style={{backgroundColor: '#FF1744'}}/>
              <div className='box' style={{backgroundColor: '#FF1744'}}/>
              <div className='box' style={{backgroundColor: '#FF1744'}}/>
              <div className='box' style={{backgroundColor: '#FF1744'}}/>
              <div className='box' style={{backgroundColor: '#FF1744'}}/>
              <div className='box' style={{backgroundColor: '#FF1744'}}/>
              <div className='box' style={{backgroundColor: '#FF1744'}}/>
              <div className='box' style={{backgroundColor: '#FF1744'}}/>
              <div className='box' style={{backgroundColor: '#FF1744'}}/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>
              <div className='box'/>

              </div>
        </div>
    )
  }
}

export default Progress
