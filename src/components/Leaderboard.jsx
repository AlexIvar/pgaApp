import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UserCard from './UserCard';
import UserCardHeader from './userCardHeader';
import RoundTable from './RoundTable';


const test = [
  {
    "firstname" : "alex",
    "lastname" : "ivarsson",
    "position": 1,
    "totalScore": 50,
    "strokes": 60
  },
  {
    "firstname" : "andri",
    "lastname" : "golfman",
    "position": 2,
    "totalScore": 30,
    "strokes": 40
  },
  {
    "firstname" : "palmi",
    "lastname" : "springer",
    "position": 3,
    "totalScore": 50,
    "strokes": 60
  },
  {
    "firstname" : "Biggi boy",
    "lastname" : "Choco",
    "position": 4,
    "totalScore": 50,
    "strokes": 60
  }
];

export const leaderboard = () => {
  return (
    <div>
      
      <Accordion expanded={false} sx={{padding: 0}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "white", display: { xs: 'none', sm: 'block' }}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           <UserCardHeader />
        </AccordionSummary>
      </Accordion>

{test.map((t) => {
 return( <Accordion sx={{padding: 0}}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon sx={{color: "white", display: { xs: 'none', sm: 'block' }}}/>}
    aria-controls="panel1-content"
    id="panel1-header"
  >
     <UserCard user={t}/>
  </AccordionSummary>
  <AccordionDetails>
    <RoundTable />
  </AccordionDetails>
</Accordion>)
})}
    </div>
  )
}

export default leaderboard;