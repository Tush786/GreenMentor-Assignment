import React from 'react'
import Dropdown from './Dropdown'
import { Img, Select } from '@chakra-ui/react'

function Dashboard() {
  return (
    <div className='DashBoard'>
      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1ItbLR9_1kVT-hdH_4HAcEb_E8eHVBAJWQ&usqp=CAU" alt="" />
      </div>
      <div className='DropdownSec'>
        <p>DATA-IN</p>
        <div className='DropSub'>
        <Select placeholder='Select option'>
  <option value='option1'>Category 1</option>
  <option value='option4'>Category 4</option>
  <option value='option6'>Category 6</option>
  <option value='option7'>Category 7</option>
  <option value='option9'>Category 9</option>
</Select>
        </div>
        <div className='DropSub'>
        <Select placeholder='Energy and Effluent'>

</Select>
        </div>



      </div>
      <div className='DropSec_2'>
      <p>DATA-IN</p>
      <div>
        <Img/>
        <p>Energy</p>
      </div>
      <div>
        <Img/>
        <p>Waste<span>(Beta)</span></p>
      </div>
      </div>
      <div></div>
    </div>
  )
}

export default Dashboard
