import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export const UserCardHeader = () => {
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
          left: '500px',
        
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
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              margin: 0,
              '& > div': { flex: 1 },
              paddingTop: 0,
              paddingBottom: 0,
              background:'#f8f8f8'
            }}
          >
              <div className="posItem">
              <Typography flevel="body-xs" fontWeight="lg">Pos</Typography>
              </div>
        <AspectRatio  ratio="1"
        sx={{ minWidth: 50, maxWidth: 50, borderRadius: 'sm', background: 'inherit' }}>
         
        </AspectRatio>
        <div>
              <Typography flevel="body-sm" fontWeight="lg">
            
              </Typography>
              <Typography flevel="body-xs" fontWeight="xs" textColor="text.tertiary"></Typography>
            </div>
              <div className="posItem">
              <Typography flevel="body-xs" fontWeight="lg" sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>R1</Typography>
              </div>
              <div className="posItem">
              <Typography flevel="body-xs" fontWeight="lg" sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>R2</Typography>
              </div>
              <div className="posItem">
              <Typography flevel="body-xs" fontWeight="lg" sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>R3</Typography>
              </div>
              <div className="posItem">
              <Typography flevel="body-xs" fontWeight="lg" sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>R4</Typography>
              </div>
              <div className="posItem">
              <Typography flevel="body-xs" fontWeight="lg">Total</Typography>
              </div>
              <div className="posItem">
              <Typography flevel="body-xs" fontWeight="lg">Strokes</Typography>
              </div>
          </Sheet>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserCardHeader;