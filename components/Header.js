import Image from 'next/Image';
import Logo from '../img/Airbnb_Logo_Bélo.svg.png';
const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src={Logo} 
                    layout="fill" 
                    objectFit="contain" 
                    objectPosition="left"
                />
            </div>
            {/* Middle - Search */}
            <div></div>
            <div></div>
        </header>
    )
}

export default Header
