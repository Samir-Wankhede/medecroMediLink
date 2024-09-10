import Image from 'next/image';
import Link from 'next/link';

export default function GetMedicalHelp() {
  return (
    <h1 className="m-2 text-blue-500 flex items-center uppercase font-bold text-3xl sm:text-5xl underline decoration-red-300 hover:decoration-red-500 ">
    
      <Image
        src="/images/right-arrow.gif"
        alt="arrow"
        width={40}
        height={20}
        className="ml-2"
      />
      <Link href={"/models/user/ListOfHospitals"} className="ml-2">
      get medical help
      </Link>

    </h1>
  );
}
