import SectionDivider from '@/components/SectionDivider';
import { Box } from '@mui/material'
import Link from 'next/link';

export default function Home() {

  return (
    <Box sx={{ display: 'flex', mt: 20, placeContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: { xs: 'center', sm: 'left' } }}>
      <span className='text-3xl '>
        Welcome to my website <br />
        My name is Mathias Foldager Andersen and I am a fullstack developer.
      </span>
      <SectionDivider />
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', width: '100%', placeContent: 'center', alignItems: 'center' }}>
        <Link className='bg-stone-800 hover:scale-110 transition duration-700 focus:scale-110 rounded-full p-5 w-[100%] sm:w-[500px] text-center' href='/portfolio'> My PortFolio </Link>
        <Link className='bg-stone-800 hover:scale-110 transition duration-700 focus:scale-110 rounded-full p-5 w-[100%] sm:w-[500px] text-center' href='/admin'> Admin Login</Link>
      </Box>
    </Box>
  );
}
