import { Box, Stack, Typography } from "@mui/material"

export default function MainCard({imgLink, title, effect, attack, defend}){
    return(
        
        <Stack direction="column">
            <MainImage imgLink={imgLink}/>
            <MainContent 
            title={title}
            effect={effect}
            attack={attack}
            defend={defend}/>
        </Stack>
        
    )
}

function MainContent({title, effect, attack, defend}){
    return(
        <Stack direction="column">
        <Typography fontSize="15px" fontWeight="bolder">
            {title}
        </Typography>
        <Typography fontSize="12px">
        此卡名的①②效果1回合各僅能使用1次。
      ①：我方場上有「轉生炎獸」卡存在的場合，把此卡從手牌捨棄，以場上1體表側表示怪獸為對象才能發動。那體怪獸的攻擊力直到回合結束時上升500。
      ②：我方場上有此卡名的卡以外的「轉生炎獸」怪獸存在的場合才能發動。此卡從墓地特殊召喚。此效果特殊召喚的此卡從場上離開的場合除外。
        </Typography>
        <Typography>
            ATK/1000 DEF/{defend}
        </Typography>
        </Stack>
    )
}

function MainImage({imgLink}){
    return(
        <Box sx={{ width:"100px"}}>
         <img src={imgLink} alt="image" width="100%" height="100%" />
        </Box>
    )
}


//https://3.bp.blogspot.com/-ZHTy8Cv8dmU/XB0MhJsm3lI/AAAAAAAAILo/TFPTyOE0wf8QzJfhkUxmNVMurTWXG4ZCACPcBGAYYCw/s1600/21849186769135_338.jpg
//https://youtu.be/wGONtQNWmO8?si=7C7nEifLz_kQOb70