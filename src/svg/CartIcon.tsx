interface CartIconProps {
    className: string;
    width?: number;
}

const CartIcon = ({ className, width = 26}: CartIconProps) => {
  return (
    <svg width={width} height={width} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6511_1147)">
    <g clip-path="url(#clip1_6511_1147)">
    <g clip-path="url(#clip2_6511_1147)">
    <mask id="mask0_6511_1147" maskUnits="userSpaceOnUse" x="1" y="0" width="25" height="25">
    <path d="M25.0156 0.496521H1.01562V24.4965H25.0156V0.496521Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_6511_1147)">
    <path d="M25.0156 3.49652H5.25762L5.21562 3.14552C5.12967 2.41594 4.77901 1.74326 4.23011 1.25499C3.68122 0.766744 2.97225 0.496863 2.23762 0.496521H1.01562V2.49652H2.23762C2.48255 2.49655 2.71896 2.58648 2.90199 2.74924C3.08503 2.912 3.20196 3.13627 3.23062 3.37953L4.81562 16.8475C4.90157 17.5771 5.25224 18.2498 5.80113 18.738C6.35003 19.2263 7.05899 19.4962 7.79362 19.4965H21.0156V17.4965H7.79362C7.54853 17.4965 7.312 17.4064 7.12895 17.2434C6.94589 17.0805 6.82905 16.8559 6.80062 16.6125L6.66962 15.4965H22.8516L25.0156 3.49652ZM21.1796 13.4965H6.43462L5.49362 5.49652H22.6226L21.1796 13.4965Z" className={className}/>
    <path d="M8.01562 24.4965C9.12019 24.4965 10.0156 23.6011 10.0156 22.4965C10.0156 21.3919 9.12019 20.4965 8.01562 20.4965C6.91105 20.4965 6.01562 21.3919 6.01562 22.4965C6.01562 23.6011 6.91105 24.4965 8.01562 24.4965Z" className={className}/>
    <path d="M18.0156 24.4965C19.1202 24.4965 20.0156 23.6011 20.0156 22.4965C20.0156 21.3919 19.1202 20.4965 18.0156 20.4965C16.9111 20.4965 16.0156 21.3919 16.0156 22.4965C16.0156 23.6011 16.9111 24.4965 18.0156 24.4965Z" className={className}/>
    </g>
    </g>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_6511_1147">
    <rect width="25" height="25" fill="white" transform="translate(0.519531 0.130005)"/>
    </clipPath>
    <clipPath id="clip1_6511_1147">
    <rect width="25" height="25" fill="white" transform="translate(0.519531 0.130005)"/>
    </clipPath>
    <clipPath id="clip2_6511_1147">
    <rect width="25" height="25" fill="white" transform="translate(0.519531 0.130005)"/>
    </clipPath>
    </defs>
    </svg>
    
  )
}

export default CartIcon
