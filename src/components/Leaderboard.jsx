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
    "firstname" : "Lexi",
    "lastname" : "Blaze",
    "position": 1,
    "totalScore": 50,
    "strokes": 60,
    "userImage": "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
  },
  {
    "firstname" : "Andri",
    "lastname" : "golfman",
    "position": 2,
    "totalScore": 30,
    "strokes": 40,
    "userImage": "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
  },
  {
    "firstname" : "Pálmi",
    "lastname" : "springer",
    "position": 3,
    "totalScore": 50,
    "strokes": 60,
    "userImage": "https://placebeard.it/250/250"
  },
  {
    "firstname" : "Biggi boy",
    "lastname" : "Choco",
    "position": 4,
    "totalScore": 50,
    "strokes": 60,
    "userImage": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
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