import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export const UserCard = ({user}) => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'block',
          width: '1px',
          bgcolor: 'white',
          left: '500px'
        
        }}
      />
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          // make the card resizable for demo
          overflow: 'auto',
          border: 'none',
          background: 'white'
        }}
      >
        <CardContent>
          <Sheet
            sx={{
              /*bgcolor: 'background.level1',*/
              bgcolor: '#fbfbfb',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              margin: 0,
              '& > div': { flex: 1 },
            }}
          >
              <div className="posItem">
              <Typography flevel="body-xs" fontWeight="lg" textColor="text.tertiary">
                {user.position}
              </Typography>
              </div>
        <AspectRatio  ratio="1"
        variant="outlined"
        sx={{ minWidth: 50, maxWidth: 50, borderRadius: 'sm' }}>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div>
              <Typography flevel="body-sm" fontWeight="lg">
                {user.firstname}
              </Typography>
              <Typography flevel="body-xs" fontWeight="xs" textColor="text.tertiary">
                {user.lastname}  
              </Typography>
            </div>
           
            <div className="posItem">
              <Typography fontWeight="lg" textColor="text.tertiary" sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>98</Typography>
            </div>
            <div className="posItem">
              <Typography fontWeight="lg" textColor="text.tertiary" sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>89</Typography>
            </div>
            <div className="posItem">
              <Typography fontWeight="lg" textColor="text.tertiary" sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>89</Typography>
            </div>
            <div className="posItem">
              <Typography fontWeight="lg" textColor="text.tertiary" sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>89</Typography>
            </div>
            <div className="posItem">
              <Typography fontWeight="lg" textColor="text.tertiary">{user.totalScore}</Typography>
            </div>
            <div className="posItem">
              <Typography fontWeight="lg" textColor="text.tertiary">{user.strokes}</Typography>
            </div>
          </Sheet>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserCard;