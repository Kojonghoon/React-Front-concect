import React from 'react'
/*eslint-disable*/
const DeptRow = (props) => {
    console.log(props)
    const {dept} = props
  return (
    <>
      <tr>
        <td>{}</td>
        <td>{dept.deptno}</td>
        <td>{dept.dname}</td>
        <td>{dept.loc}</td>
        </tr>
    </>
  )
}

export default DeptRow
