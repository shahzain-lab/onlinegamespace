
import BlogCard from './../../components/blog/card'
import {
  Stack, Text, SimpleGrid
} from '@chakra-ui/react';
import { Main } from '@/templates/Main';
import { Meta } from '@/templates/Meta';

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