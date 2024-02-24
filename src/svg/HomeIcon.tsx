interface HomeIconProps {
    className: string;
}

const HomeIcon = ({ className}: HomeIconProps) => {
  return (
    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7.80556L11.5 2L21 7.80556" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.8872 11.4999V18.2555C18.8872 18.6053 18.6036 18.8888 18.2538 18.8888H4.74271C4.39293 18.8888 4.10938 18.6053 4.10938 18.2555V11.4999" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default HomeIcon
