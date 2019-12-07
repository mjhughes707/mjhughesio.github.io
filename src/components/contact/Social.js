import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Social(props) {
  return (
    <a href={props.link}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  )
}


export default Social