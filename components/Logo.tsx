import Image from "next/image";
import logo from '../assets/logoo.png'

function Logo(props: any) {
    const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
        <Image 
        className="rounded-full object-cover"
        src={logo}
         alt="logo" 
         height={50}
         width= {50}/>
         <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo