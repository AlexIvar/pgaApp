import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Table } from '@mui/material';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));


const userRounds = [{
                    "userId": 1, 
                    "roundId": 0, 
                    "hole1": 1,
                    "hole2": 1,
                    "hole3": 1,
                    "hole4": 1,
                    "hole5": 1,
                    "hole6": 1,
                    "hole7": 1,
                    "hole8": 1,
                    "hole9": 1,
                    "hole10": 1,
                    "hole11": 1,
                    "hole12": 1,
                    "hole13": 1,
                    "hole14": 1,
                    "hole15": 1,
                    "hole16": 1,
                    "hole17": 1,
                    "hole18": 1,
                    },
                    {
                      "userId": 1, 
                      "roundId": 1, 
                      "hole1": 2,
                      "hole2": 2,
                      "hole3": 2,
                      "hole4": 2,
                      "hole5": 2,
                      "hole6": 2,
                      "hole7": 2,
                      "hole8": 2,
                      "hole9": 2,
                      "hole10": 2,
                      "hole11": 2,
                      "hole12": 2,
                      "hole13": 2,
                      "hole14": 2,
                      "hole15": 2,
                      "hole16": 2,
                      "hole17": 2,
                      "hole18": 2,
                    },
                    {
                      "userId": 1, 
                      "roundId": 2, 
                      "hole1": 3,
                      "hole2": 3,
                      "hole3": 3,
                      "hole4": 3,
                      "hole5": 3,
                      "hole6": 3,
                      "hole7": 3,
                      "hole8": 3,
                      "hole9": 3,
                      "hole10": 3,
                      "hole11": 3,
                      "hole12": 3,
                      "hole13": 3,
                      "hole14": 3,
                      "hole15": 3,
                      "hole16": 3,
                      "hole17": 3,
                      "hole18": 3,
                    },
                    {
                      "userId": 1, 
                      "roundId": 3, 
                      "hole1": 4,
                      "hole2": 4,
                      "hole3": 4,
                      "hole4": 4,
                      "hole5": 4,
                      "hole6": 4,
                      "hole7": 4,
                      "hole8": 4,
                      "hole9": 4,
                      "hole10": 4,
                      "hole11": 4,
                      "hole12": 4,
                      "hole13": 4,
                      "hole14": 4,
                      "hole15": 4,
                      "hole16": 4,
                      "hole17": 4,
                      "hole18": 4,
                    }
                  ];




export const RoundTable = () => {
  const [value, setValue] = React.useState(0);
  const [currRound, setCurrRound] = React.useState(userRounds.find((element) => element.roundId === 0));



  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrRound(userRounds.find((element) => element.roundId === newValue))
  };

  return (
    <>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ bgcolor: '#fff' }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example" sx={{paddingLeft: 4}}>
          <AntTab label="Round 1" />
          <AntTab label="Round 2" />
          <AntTab label="Round 3" />
          <AntTab label="Round 4" />
        </AntTabs>
        <Box sx={{ p: 3 }}>
          <Table sx={{width: "100%"}}>
        <TableRow key={1}>
                      <TableCell component="th" scope="row">
                        <b>{"Hole"}</b>
                      </TableCell>
                      <TableCell component="th" scope="row">
                      {"|"}
                    </TableCell>
                      <TableCell align="right">{1}</TableCell>
                      <TableCell align="right">{2}</TableCell>
                      <TableCell align="right">{3}</TableCell>
                      <TableCell align="right">{4}</TableCell>
                      <TableCell align="right">{5}</TableCell>
                      <TableCell align="right">{6}</TableCell>
                      <TableCell align="right">{7}</TableCell>
                      <TableCell align="right">{8}</TableCell>
                      <TableCell align="right">{9}</TableCell>
                      <TableCell align="right">{10}</TableCell>
                      <TableCell align="right">{11}</TableCell>
                      <TableCell align="right">{12}</TableCell>
                      <TableCell align="right">{13}</TableCell>
                      <TableCell align="right">{14}</TableCell>
                      <TableCell align="right">{15}</TableCell>
                      <TableCell align="right">{16}</TableCell>
                      <TableCell align="right">{17}</TableCell>
                      <TableCell align="right">{18}</TableCell>
                    </TableRow>
                     <TableRow key={1}>
                     <TableCell component="th" scope="row">
                       <b>{"Par"}</b>
                     </TableCell>
                     <TableCell component="th" scope="row">
                      {"|"}
                    </TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{3}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{3}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                     <TableCell align="right">{4}</TableCell>
                   </TableRow>
                    <TableRow key={1}>
                    <TableCell component="th" scope="row">
                      <b>{"Score"}</b>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {"|"}
                    </TableCell>
                    <TableCell align="right">{currRound.hole1}</TableCell>
                    <TableCell align="right">{currRound.hole2}</TableCell>
                    <TableCell align="right">{currRound.hole3}</TableCell>
                    <TableCell align="right">{currRound.hole4}</TableCell>
                    <TableCell align="right">{currRound.hole5}</TableCell>
                    <TableCell align="right">{currRound.hole6}</TableCell>
                    <TableCell align="right">{currRound.hole7}</TableCell>
                    <TableCell align="right">{currRound.hole8}</TableCell>
                    <TableCell align="right">{currRound.hole9}</TableCell>
                    <TableCell align="right">{currRound.hole10}</TableCell>
                    <TableCell align="right">{currRound.hole11}</TableCell>
                    <TableCell align="right">{currRound.hole12}</TableCell>
                    <TableCell align="right">{currRound.hole13}</TableCell>
                    <TableCell align="right">{currRound.hole14}</TableCell>
                    <TableCell align="right">{currRound.hole15}</TableCell>
                    <TableCell align="right">{currRound.hole16}</TableCell>
                    <TableCell align="right">{currRound.hole17}</TableCell>
                    <TableCell align="right">{currRound.hole18}</TableCell>
                  </TableRow>
                  </Table>
      </Box>
      </Box>
    </Box>

  
                  </>
     
    
  )
}

export default RoundTable;