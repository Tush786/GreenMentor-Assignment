import { Box, Select } from '@chakra-ui/react'
import React from 'react'

function Filter() {
  return (
    <div className='Filter_Main'>
      <Box className='Filter'>
      <Select placeholder='Select option'>
  <option value='option1'>Category 1</option>
  <option value='option4'>Category 4</option>
  <option value='option6'>Category 6</option>
  <option value='option7'>Category 7</option>
  <option value='option9'>Category 9</option>
</Select> 
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
  <path d="M2.90573 5.00001L0.305725 2.40001C-0.0109418 2.08335 -0.0816084 1.72101 0.093725 1.31301C0.269058 0.905012 0.581392 0.700679 1.03073 0.700012H6.18072C6.63072 0.700012 6.94339 0.904345 7.11872 1.31301C7.29406 1.72168 7.22306 2.08401 6.90573 2.40001L4.30572 5.00001C4.20572 5.10001 4.09739 5.17501 3.98073 5.22501C3.86406 5.27501 3.73906 5.30001 3.60573 5.30001C3.47239 5.30001 3.34739 5.27501 3.23073 5.22501C3.11406 5.17501 3.00573 5.10001 2.90573 5.00001Z" fill="black" fill-opacity="0.84"/>
</svg>
    </div>
  )
}

export default Filter
