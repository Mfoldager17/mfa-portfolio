import SectionDivider from '@/components/SectionDivider';
import StyledDashboardLink from '@/components/admin/StyledDashboardLink';
import { Box } from '@mui/material'

export default function Home() {

  return (
    <Box sx={{ display: 'flex', mt: 20, placeContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: { xs: 'center', sm: 'left' } }}>
      <span className='text-3xl '>
        Welcome to my website <br />
        My name is Mathias Foldager Andersen and I am a fullstack developer.
      </span>
      <SectionDivider />
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', width: '100%', placeContent: 'center', alignItems: 'center' }}>
        <StyledDashboardLink text='My Portfolio' href='/portfolio' />
        <StyledDashboardLink text='Admin Login' href='/admin' />
      </Box>
    </Box>
  );
}
