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
      d="M12 17.5606L20.0303 9.53031C20.3232 9.23742 20.3232 8.76254 20.0303 8.46965C19.7374 8.17676 19.2626 8.17676 18.9697 8.46965L12 15.4393L5.03033 8.46965C4.73744 8.17676 4.26256 8.17676 3.96967 8.46965C3.67678 8.76254 3.67678 9.23742 3.96967 9.53031L12 17.5606Z"
      fill={fill}
    />
  </svg>
)

export default SvgComponent
