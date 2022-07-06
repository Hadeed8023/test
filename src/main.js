import React, { Component } from 'react';
import Header from './header';
import pic1 from './images/japan2.png';
import './main.css';
import Table from './table';
import Table10 from './table10';
import Table2 from './table2';
import Table3 from './table3';
import Table4 from './table4';
import Table5 from './table5';
import Table6 from './table6';
import Table7 from './table7';
import Table8 from './table8';
import Table9 from './table9';


function MainPage() {
    return ( 
        <div>
        <div>

            <Header/>

            <img src={pic1} id="img1"></img>

            <div>
           <Table/>
           <Table2/>
           <Table3/>
           <Table4/>
           <Table5/>
           <Table6/>
           <Table7/>
           <Table8/>
           <Table9/>
           <Table10/>
            </div>

            





        </div>

        </div>
     );
}

export default MainPage;