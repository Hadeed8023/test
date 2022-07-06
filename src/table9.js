import React, { Component } from 'react';
import './main.css'

function Table9() {
    return ( 
        <div>
           <table id='table9'>

           <tr><th colspan="3" id='th1'>関東</th></tr>
            <tr><td className='td1'>東 京</td>
            <td className='td1'>神奈川</td><td className='td1'>埼 玉</td></tr>
            <tr><td className='td1'>千 葉</td>
            <td className='td1'>茨 城 </td><td className='td1'>栃 木</td></tr>

           </table>
        </div>
     );
}

export default Table9;