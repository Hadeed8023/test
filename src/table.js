import React, { Component } from 'react';
import './main.css'

function Table() {
    return ( 
        <div>
           <table id='table1'>

            <tr><th colspan="2" id='th1'>中国</th></tr>
            <tr><td className='td1'>広島</td>
            <td className='td1'>岡山</td></tr>
            <tr><td className='td1'>鳥鳥</td>
            <td className='td1'>島根県</td></tr>
            <tr><td className='td1'>山岳</td>
            </tr>

           </table>
        </div>
     );
}

export default Table;