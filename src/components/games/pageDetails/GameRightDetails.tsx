import { IGameDetails } from '@/interfaces/context/IAPIService'
import { Box, Image, Grid, Text, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'

const GameRightDetails = ({game}: {game: IGameDetails}) => {
  const [textOpen, setTextOpen] = useState<1|2|3>(1)
  const handleTextOpen = () => {
    if(textOpen === 1) {setTextOpen(2)}
    if(textOpen === 2) {setTextOpen(3)}
    if(textOpen === 3) {setTextOpen(1)}
  }

  return (
    <div>
      <Breadcrumb spacing='8px' separator={<Icon as={IoIosArrowForward} color='#7a8288' />}>
        <BreadcrumbItem>
          <BreadcrumbLink pb={2} color='#7a8288' href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink pb={2} color='#7a8288' href='/games'>Free Games</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink pb={2} color='#7a8288' href={`/games/${game?.id}`}>{game?.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

        <Text fontSize={'32px'} fontWeight='bold' color='#aaaaaa'>{game.title}</Text>
       
        <Box my={5}>
          <Text fontSize={'24px'} color='#aaaaaa'>About {game.title}</Text>
          
              <Text fontSize={'md'} lineHeight='22.5px' color={'#7a8288'}
                dangerouslySetInnerHTML={{__html: game?.description &&
                  (textOpen === 3 ? game?.description.split('. ').join('.<br /><br />') :
                  textOpen === 2 ?
                    game?.description.split('. ').join('.<br /><br />').substring(0, 1200) + '...':
                    game?.description.split('. ').join('.<br /><br />').substring(0, 400) + '...'
                    || '')}}
              >
              </Text>
             {(textOpen === 1 || textOpen === 2) && (
                <Text color='#aaaaaa'
                  onClick={handleTextOpen}
                  cursor='pointer'
                  fontWeight='bold'
                  >+ Read More</Text>
             )}
             {textOpen === 3 && (
               <Text color='#aaaaaa'
                onClick={handleTextOpen}
                cursor='pointer'
                fontWeight='bold'
                >- Read Less</Text>
             )}
          </Box>
          <Box borderBottom='.5px solid #424141' />
        <Box my={5}>
          <Text fontSize={'24px'} color='#aaaaaa'>Additional Information</Text>
          {/* <Divider background='#aaaaaa' /> */}
          <Grid my={3} templateColumns={'repeat(3, 1fr)'} templateRows='repeat(2, 1fr)' gap={4}>
            <Box>
              <Text color={'#7a8288'}>Title</Text>
              <Text color='#aaaaaa'>{game?.title}</Text>
            </Box>        
            <Box>
              <Text color={'#7a8288'}>Developer</Text>
              <Text color='#aaaaaa'>{game?.developer}</Text>
            </Box>        
            <Box>
              <Text color={'#7a8288'}>Publisher</Text>
              <Text color='#aaaaaa'>{game.publisher}</Text>
            </Box>        
            <Box>
              <Text color={'#7a8288'}>Realese Date</Text>
              <Text color='#aaaaaa'>{game.release_date}</Text>
            </Box>        
            <Box>
              <Text color={'#7a8288'}>Genre</Text>
              <Text color='#aaaaaa'>{game.genre}</Text>
            </Box>        
            <Box>
              <Text color={'#7a8288'}>Platform</Text>
              <Text color='#aaaaaa'>{game.platform}</Text>
            </Box>        
          </Grid>
         </Box>
          <Box borderBottom='.5px solid #424141' />
         <Box my={5}>
         <Text fontSize={'24px'} color='#aaaaaa'>{game.title} screenshots</Text>
          <Grid my={3} templateColumns={'repeat(3, 1fr)'} gap={6}>
              {game.screenshots.map((img) => (
                <>
                  <Image
                    key={img.id}
                    src={img.image}
                    borderRadius='lg'
                  />
                </>
              ))}
          </Grid>
         </Box>
         {game?.minimum_system_requirements && (
           <>
            <Box borderBottom='.5px solid #424141' />
            <Box my={5}>
            <Text fontSize={'24px'} color='#aaaaaa'>Minimum System Requirements 
            <span style={{color:'#7a8288', fontSize: '18px', fontWeight: '500', paddingLeft: '8px'}}>({game.platform})</span>
            </Text>
            <Grid my={3} templateColumns={'repeat(3, 1fr)'} templateRows='repeat(2, 1fr)' gap={3}>
                <Box>
                  <Text color={'#7a8288'}>OS</Text>
                  <Text color='#aaaaaa'>{game?.minimum_system_requirements?.os}</Text>
                </Box>        
                <Box>
                  <Text color={'#7a8288'}>Processor</Text>
                  <Text color='#aaaaaa'>{game?.minimum_system_requirements?.processor}</Text>
                </Box>        
                <Box>
                  <Text color={'#7a8288'}>Memory</Text>
                  <Text color='#aaaaaa'>{game?.minimum_system_requirements?.memory}</Text>
                </Box>        
                <Box>
                  <Text color={'#7a8288'}>Graphics</Text>
                  <Text color='#aaaaaa'>{game?.minimum_system_requirements?.graphics}</Text>
                </Box>        
                <Box>
                  <Text color={'#7a8288'}>Storage</Text>
                  <Text color='#aaaaaa'>{game?.minimum_system_requirements?.storage}</Text>
                </Box>        
                <Box>
                  <Text color={'#7a8288'}>Additional Notes</Text>
                  <Text color='#aaaaaa'>Specifications may change during development</Text>
                </Box>        
              </Grid>
            </Box>
           </>
         )}
      
    </div>
  )
}

export default GameRightDetails