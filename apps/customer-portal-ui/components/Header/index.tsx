import Image from "next/image";

const Header = () => {
    return (
      <header className="w-full p-8 flex justify-between items-center">
        <div>
         <Image src="/logo.png" alt="Logo" width={150} height={50} />
        </div>
      </header>
    );
  };
  
  export default Header;
  