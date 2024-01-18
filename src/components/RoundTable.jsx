import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Table } from '@mui/material';
import Chip from '@mui/material/Chip';

const AntTabs = styled(Tabs)({
  //borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    //backgroundColor: '#1890ff',
    backgroundColor: 'inherit',
  },
});

const AntTab = styled((props) => <Tab /*disableRipple*/ {...props} />)(({ theme }) => ({
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
    //border: "1px solid #1890ff",
    borderRadius: "5%",
    backgroundColor: "#e6f3ff"
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const AntTabs2 = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const AntTab2 = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  /*marginRight: theme.spacing(1),*/
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
 padding:"10px"
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
                      "hole10": 4,
                      "hole11": 4,
                      "hole12": 4,
                      "hole13": 4,
                      "hole14": 4,
                      "hole15": 4,
                      "hole16": 4,
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
  const [valuetest, setValueTest] = React.useState(0);
  const [currRound, setCurrRound] = React.useState(userRounds.find((element) => element.roundId === 0));



  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrRound(userRounds.find((element) => element.roundId === newValue))
  };

  const handleChangeTest = (event, newValue) => {
    setValueTest(newValue);
    console.log(newValue)
  };

  return (
    <>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ bgcolor: '#fff' }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Round 1" />
          <AntTab label="Round 2" />
          <AntTab label="Round 3" />
          <AntTab label="Round 4" />
        </AntTabs>
        <AntTabs2 variant="fullWidth" value={valuetest} onChange={handleChangeTest} aria-label="ant example" sx={{  display: { sm: '', md: '', lg: 'none' }}}>
          <AntTab2 label="First 9"/>
          <AntTab2 label="Last 9"/>
        </AntTabs2>
        <Box sx={{ p: 3 }}>
          <Table sx={{width: "100%", display: { xs: 'none', lg: 'block', xl: 'block' }}}>
              <TableRow key={1}>
                            <TableCell component="th" scope="row">
                              <b>{"Hole"}</b>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            {"|"}
                          </TableCell>
                            <TableCell align="center">{1}</TableCell>
                            <TableCell align="center">{2}</TableCell>
                            <TableCell align="center">{3}</TableCell>
                            <TableCell align="center">{4}</TableCell>
                            <TableCell align="center">{5}</TableCell>
                            <TableCell align="center">{6}</TableCell>
                            <TableCell align="center">{7}</TableCell>
                            <TableCell align="center">{8}</TableCell>
                            <TableCell align="center">{9}</TableCell>
                            <TableCell align="center">{10}</TableCell>
                            <TableCell align="center">{11}</TableCell>
                            <TableCell align="center">{12}</TableCell>
                            <TableCell align="center">{13}</TableCell>
                            <TableCell align="center">{14}</TableCell>
                            <TableCell align="center">{15}</TableCell>
                            <TableCell align="center">{16}</TableCell>
                            <TableCell align="center">{17}</TableCell>
                            <TableCell align="center">{18}</TableCell>
                  </TableRow>
                  <TableRow key={1}>
                          <TableCell component="th" scope="row">
                            <b>{"Par"}</b>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {"|"}
                          </TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{3}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{3}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align="center">{4}</TableCell>
                          <TableCell align='center'>{4}</TableCell>
                    </TableRow>
                    <TableRow key={1} >
                          <TableCell component="th" scope="row">
                            <b>{"Score"}</b>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {"|"}
                          </TableCell>
                          <TableCell align="right">{currRound.hole15}</TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell align="right">{5}</TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip size="small" label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip size="small"label={currRound.hole18} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip color="success" size="small" label={-4} variant="outlined" sx={{padding:0}}/></TableCell>
                          <TableCell><Chip color="success" size="small" label={-2} variant="hidden" sx={{padding:0}}/></TableCell>
                    </TableRow>
                  </Table>
               {/*Smaller table*/}  
                  <Table sx={{width: "100%", display: { sm: '', md: '', lg: 'none' }}}>
              <TableRow key={1}>
                            <StyledTableCell component="th" scope="row">
                              <b>{"Hole"}</b>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                            {"|"}
                          </StyledTableCell>
                            <StyledTableCell align="center">{1}</StyledTableCell>
                            <StyledTableCell align="center">{2}</StyledTableCell>
                            <StyledTableCell align="center">{3}</StyledTableCell>
                            <StyledTableCell align="center">{4}</StyledTableCell>
                            <StyledTableCell align="center">{5}</StyledTableCell>
                            <StyledTableCell align="center">{6}</StyledTableCell>
                            <StyledTableCell align="center">{7}</StyledTableCell>
                            <StyledTableCell align="center">{8}</StyledTableCell>
                            <StyledTableCell align="center">{9}</StyledTableCell>
                           
                  </TableRow>
                  <TableRow key={1}>
                          <StyledTableCell component="th" scope="row">
                            <b>{"Par"}</b>
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {"|"}
                          </StyledTableCell>
                          <StyledTableCell align="center">{4}</StyledTableCell>
                          <StyledTableCell align="center">{4}</StyledTableCell>
                          <StyledTableCell align="center">{4}</StyledTableCell>
                          <StyledTableCell align="center">{4}</StyledTableCell>
                          <StyledTableCell align="center">{3}</StyledTableCell>
                          <StyledTableCell align="center">{4}</StyledTableCell>
                          <StyledTableCell align="center">{4}</StyledTableCell>
                          <StyledTableCell align="center">{3}</StyledTableCell>
                          <StyledTableCell align="center">{4}</StyledTableCell>
                         
                    </TableRow>
                    {valuetest === 0 && 
                      <TableRow key={1} >
                      <StyledTableCell component="th" scope="row">
                        <b>{"Score"}</b>
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {"|"}
                      </StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole1} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole2} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole3} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center" >{currRound.hole4}</StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole5} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole6} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole7} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole8} variant="outlined" sx={{padding:0}}/></StyledTableCell> <StyledTableCell align="center">{currRound.hole9}</StyledTableCell>
                      </TableRow>
                    }
                    {valuetest === 1 && 
                      <TableRow key={1} >
                      <StyledTableCell component="th" scope="row">
                        <b>{"Score"}</b>
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {"|"}
                      </StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole10} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole11} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole12} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center" >{currRound.hole13}</StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole14} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole15} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole16} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center"><Chip size="small" label={currRound.hole17} variant="outlined" sx={{padding:0}}/></StyledTableCell>
                      <StyledTableCell align="center">{currRound.hole18}</StyledTableCell>
                      </TableRow>
                    }
                  </Table>
      </Box>
      </Box>
    </Box>

  
                  </>
     
    
  )
}

export default RoundTable;