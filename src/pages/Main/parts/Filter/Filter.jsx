import { Checkbox } from '../../../../components/Checkbox/Checkbox'
import React from 'react'
export const Filter = () => {
  return (
    <React.Fragment>
      <Checkbox text="Комментарий"></Checkbox>
      <Checkbox text="Описание"></Checkbox>
      <Checkbox text="Тег"></Checkbox>
    </React.Fragment>
  )
}
