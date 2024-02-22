interface LongArrowIconProps {
    className: string;
}

const LongArrowIcon = ({className}: LongArrowIconProps) => {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.04 4.98996H3.04L6.32 1.70996L4.88 0.349961L0.56 4.58996C0.186667 5.01663 0 5.49663 0 6.02996C0 6.56329 0.186667 7.04329 0.56 7.46996L4.88 11.71L6.32 10.35L3.04 6.98996H13.04V4.98996Z" className={className}/>
    </svg>

  )
}

export default LongArrowIcon
