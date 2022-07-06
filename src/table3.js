import React, { Component } from 'react';
import './main.css'

function Table3() {
    return ( 
        <div>
           <table id='table3'>

            <tr><th colspan="2" id='th1'>関西</th></tr>
            <tr><td className='td1'>大 阪</td>
            <td className='td1'>兵 庫</td></tr>
            <tr><td className='td1'>京 都</td>
            <td className='td1'>滋 賀</td></tr>
            <tr><td className='td1'>奈 良</td>
            <td className='td1'>和歌山</td></tr>
           

           </table>
        </div>
     );
}

export default Table3;