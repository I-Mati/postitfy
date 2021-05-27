import React from 'react'
import Postit from '../Postit';
import './style.css';

const Dashboard = () => (
        <div id="dashboardContainer">
           <Postit text='go to cinema' color="yellow"/>
           <Postit text='go to cinema' color="blue"/>
           <Postit text='go to cinema' color="green"/>
           <Postit text='go to cinema' color="violet"/>
           <Postit text='go to cinema' color="orange"/>
           
        </div>
    )

export default Dashboard
