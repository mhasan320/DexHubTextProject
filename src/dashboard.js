import React from 'react';
import ConvoerCardComponent from './component/ConvoerCardComponent';
import CarierComponent from './component/CarierComponent';
import PidCommand from './component/PidCommand';
import SystemOcuppsy from './component/SystemOcuppsy';
import Panel3D from './component/Panel3d';
import Pallat from './component/Pallat';
import FillRate from './component/FillRate';
import RoomSencor from './component/RoomSencor';
import ExitList from './component/ExitList';
import Alarms from './component/Alarms';

export default function dashboard() {
  return (
    <div className="dashboardPage">
      <div className="convoer">
        <ConvoerCardComponent />
      </div>
      <div className="convoer">
        <CarierComponent />
        <PidCommand />
        <SystemOcuppsy />
      </div>
      <div className="panel">
        <Panel3D />
        <div className="panelRow">
          <Pallat />
          <FillRate />
        </div>
      </div>
      <div className="convoer">
        <RoomSencor />
        <ExitList />
        <Alarms />
      </div>
    </div>
  );
}
