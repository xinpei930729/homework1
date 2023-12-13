import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainCard from './assets/component/salamangreat'
import { Paper } from '@mui/material'

function App() {
  

  return (
    <>
    <Paper sx={{width:"200px"}} color="orange">
      <MainCard
      title="《轉生炎獸　犰狳蜥》"
      effct="此卡名的①②效果1回合各僅能使用1次。
      ①：我方場上有「轉生炎獸」卡存在的場合，把此卡從手牌捨棄，以場上1體表側表示怪獸為對象才能發動。那體怪獸的攻擊力直到回合結束時上升500。
      ②：我方場上有此卡名的卡以外的「轉生炎獸」怪獸存在的場合才能發動。此卡從墓地特殊召喚。此效果特殊召喚的此卡從場上離開的場合除外。"
      attck="1000"
      defend="1500"
      imgLink="https://3.bp.blogspot.com/-ZHTy8Cv8dmU/XB0MhJsm3lI/AAAAAAAAILo/TFPTyOE0wf8QzJfhkUxmNVMurTWXG4ZCACPcBGAYYCw/s1600/21849186769135_338.jpg"
      />
    </Paper>
    </>
  )
}

export default App
