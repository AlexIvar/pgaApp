import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export const UserCard = () => {
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
       {/* <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 100 }}>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>*/}
        <CardContent>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
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
              <Typography flevel="body-xs" fontWeight="lg" textColor="text.tertiary">1</Typography>
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
                Alex
              </Typography>
              <Typography flevel="body-xs" fontWeight="xs" textColor="text.tertiary">Ivarsson</Typography>
            </div>
            <div className="posItem">
              <Typography fontWeight="lg" textColor="text.tertiary">34</Typography>
            </div>
            <div className="posItem">
              <Typography fontWeight="lg" textColor="text.tertiary">98</Typography>
            </div>
            <div className="posItem">
              <Typography fontWeight="lg" textColor="text.tertiary">89</Typography>
            </div>
            <div className="posItem">
              <Typography fontWeight="lg" textColor="text.tertiary">89</Typography>
            </div>
            <div className="posItem">
              <Typography fontWeight="lg" textColor="text.tertiary">89</Typography>
            </div>
            <div className="posItem">
              <Typography fontWeight="lg" textColor="text.tertiary">89</Typography>
            </div>
          </Sheet>
        {/*  <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Chat
            </Button>
            <Button variant="solid" color="primary">
              Follow
            </Button>
          </Box> */}
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserCard;