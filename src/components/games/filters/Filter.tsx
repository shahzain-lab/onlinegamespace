import React, { ChangeEvent, useState } from 'react'
import {
  Select, Text, Icon, SimpleGrid
} from '@chakra-ui/react';
import { AiFillFilter } from 'react-icons/ai'

const Filter = () => {
  const [platform, setPlatform] = useState('');
  const [tag, setTag] = useState('');
  const [sort, setSort] = useState('');

  const handlePlatformChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPlatform(e.target.value)
  }
  
  const handleTagChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTag(e.target.value)
  }
  
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }

  const _platforms = ['Windows', 'PC'];
  const _tags = ['MMO', 'ARPG', 'Shooter', 'Strategy', 'Moba', 'MMORPG', 'Action RPGS', 'Battle ARPG', 'Fighting'];
  const _sortBy = ['Alphabetical', 'Relevance', 'Popularity'];

  return (
    <SimpleGrid my={30} alignItems='center' columns={[1, 2, 3, 4]} gap={8}>
      {/* BY PLATFORM */}
      <div>
        <Select 
          cursor='pointer'
           w={130}
           value={platform}
           onChange={handlePlatformChange}
           fontSize='15px'
           border='none'
           color={'#e4e2e2'}
           placeholder={'By Platform'}>
            {_platforms.map((_platform) => (
               <option key={_platform} style={{background: '#7a8288'}} value={_platform}>{_platform}</option>
             ))}
        </Select>
      </div>

      {/* BY TAG/GENRE */}
      <div>
        <Select 
          cursor='pointer'
           w={140}
           fontSize='15px'
           border='none'
           value={tag}
           onChange={handleTagChange}
           color={'#e4e2e2'}
           placeholder='By Tag/Genre'>
             {_tags.map((_tag) => (
               <option key={_tag} style={{background: '#7a8288'}} value={_tag}>{_tag}</option>
             ))}
        </Select>
       </div>

      {/* BY SORT */}
      <div>
        <Select 
          cursor='pointer'
           w={130}
           fontSize='15px'
           border='none'
           value={sort}
           onChange={handleSortChange}
           color={'#e4e2e2'}
           placeholder='Sort By'>
            {_sortBy.map((_sort) => (
               <option key={_sort} style={{background: '#7a8288'}} value={_sort}>{_sort}</option>
             ))}
        </Select>
      </div>

      {/* MORE */}
      <Text fontSize='15px' cursor='pointer' color='#e4e2e2'><Icon mb={-.5} mr={1} fontSize={'15px'} as={AiFillFilter} color='blue.300' />Addvanced Filters</Text>
    </SimpleGrid>
  )
}

export default Filter