import * as React from "react"

const SvgComponent = ({ fill = '#000', props }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.0462 5.48598C11.33 5.78761 11.3157 6.26226 11.014 6.54615L6.01619 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H6.01619L11.014 17.4539C11.3157 17.7377 11.33 18.2124 11.0462 18.514C10.7623 18.8157 10.2876 18.83 9.98598 18.5462L3.0307 12L9.98598 5.45385C10.2876 5.16996 10.7623 5.18435 11.0462 5.48598Z"
      fill={fill}
    />
  </svg>
)

export default SvgComponent
