
import BlogCard from './../../components/blog/card'
import {
  Center, Stack, Text, SimpleGrid
} from '@chakra-ui/react';
import { Main } from '@/templates/Main';
import { Meta } from '@/templates/Meta';


const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function ProductSimple() {
  return (
    <Main
    meta={
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
    }
     >
      <Stack px={[5, 15, 20, 90]}>
        <Text color={'white'} py='40px' fontSize='3xl'>Explore Our Blogs</Text>
        <Stack pb="40px">
            <SimpleGrid columns={[1, 2,  3]} spacing='30px'>
            <BlogCard title={'balb'} src={'/assets/demo-2.jpg'} slogan={"jksd sdijso sd"} />
              <BlogCard title={'balb'} src={'/assets/demo-1.png'} slogan={"jksd sdijso sd"} />
              <BlogCard title={'balb'} src={'/assets/demo-0.jpeg'} slogan={"jksd sdijso sd"} />
              <BlogCard title={'balb'} src={'/assets/demo-3.jpg'} slogan={"jksd sdijso sd"} />
          </SimpleGrid>
        </Stack>
      </Stack>
    </Main>
  );
}