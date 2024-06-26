interface OrderIconProps {
    className: string;
}

const OrderIcon = ({ className }: OrderIconProps ) => {
  return (
    <svg className={className} height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enable-background="new 0 0 512 512" stroke="#7E7E7E"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m475.5,475.9l-29.5-329.4c-0.9-10.5-9.8-18.6-20.5-18.6h-77.5c-18.1-59.3-49.1-116.9-92-116.9-43,0-73.9,57.6-92.2,116.9h-77.5c-10.6,0-19.5,8.1-20.5,18.6l-29.6,332.3c-1.1,14.8 9.2,22.2 20.5,22.2h398.7c0.1,0 0.1,0 0.2,0 13,0 21.5-11.2 19.9-25.1zm-219.5-424.1c14.3-1.42109e-14 33.8,34 48.7,76.1h-97.4c14.8-42.1 34.4-76.1 48.7-76.1zm-177,408.4l26.1-291.4h48.1c-5.8,26.9-8.7,51.2-8.7,67.2 0,11.3 9.2,20.4 20.5,20.4s20.5-9.1 20.5-20.4c0-19.8 3.7-43.5 9.5-67.2h121.9c5.8,23.7 9.5,47.4 9.5,67.2 0,11.3 9.2,20.4 20.5,20.4 11.3,0 20.5-9.1 20.5-20.4 0-16-2.9-40.3-8.7-67.2h48.1l26.1,291.4h-353.9z"></path> </g> </g> </g></svg>
  )
}

export default OrderIcon
