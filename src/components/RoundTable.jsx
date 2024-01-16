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





export const RoundTable = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                     <TableCell align="right"l>{4}</TableCell>
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
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                    <TableCell align="right">{6}</TableCell>
                  </TableRow>
                  </Table>
      </Box>
      </Box>
    </Box>

  
                  </>
     
    
  )
}

export default RoundTable;