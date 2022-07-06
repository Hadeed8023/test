import React, { Component } from 'react';
import './main.css'

function Table2(props) {
    return ( 
        <div>
           <table id='table2' className='gt3'>

            <tr><th colspan="2" id='th1'>九州・沖縄</th></tr>
           
            <tr><td className='td1'>物語</td>
            <td className='td1'>福岡</td></tr>
            
            <tr><td className='td1'>長崎</td>
            <td className='td1'>熊本</td></tr>
            
            <tr><td className='td1'>大 分</td>
            <td className='td1'>島根県</td></tr>
            
            <tr><td className='td1'>鹿児島</td>
            <td className='td1'>沖 縄</td>
            </tr>

           </table>
        </div>
     );
}

export default Table2;