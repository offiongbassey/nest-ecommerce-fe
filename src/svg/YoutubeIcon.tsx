interface YoutubeIconProps {
    className: string;
}

const YoutubeIcon = ({ className }: YoutubeIconProps) => {
  return (
    <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_6511_2051)">
    <g clipPath="url(#clip1_6511_2051)">
    <path d="M14.3012 14.3715C14.3012 12.9651 13.1658 11.8296 11.7593 11.8296H5.17865C3.7722 11.8296 2.63672 12.9651 2.63672 14.3715V17.4683C2.63672 18.8748 3.7722 20.0102 5.17865 20.0102H11.7593C13.1658 20.0102 14.3012 18.8748 14.3012 17.4683V14.3715ZM10.1464 16.0748L7.52704 17.5199C7.41091 17.5844 7.30769 17.4941 7.30769 17.3651V14.4102C7.30769 14.2812 7.41091 14.1909 7.52704 14.2554L10.1722 15.7651C10.2883 15.8425 10.2625 16.0102 10.1464 16.0748Z" className={className} />
    </g>
    </g>
    <defs>
    <clipPath id="clip0_6511_2051">
    <rect width="16" height="30" fill="white" transform="translate(0.46875 0.919922)"/>
    </clipPath>
    <clipPath id="clip1_6511_2051">
    <rect width="16" height="30" fill="white" transform="translate(0.46875 0.919922)"/>
    </clipPath>
    </defs>
    </svg>
    
  )
}

export default YoutubeIcon
