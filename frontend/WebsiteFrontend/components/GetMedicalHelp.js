import Link from "next/link";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function GetMedicalHelp() {
  return (
    <Link href={"/models/user/ListOfHospitals"}>
    <Button
      variant="outline"
      className="min-w-[150px] text-base sm:text-lg md:text-2xl lg:text-3xl flex justify-between gap-2 items-center border-2 border-blue-500 rounded-lg px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8 lg:px-12 lg:py-10 text-center text-black mx-auto whitespace-nowrap"
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} scale={0.2} className="text-gray-600 ml-2" />
      <p>Get Medical Help</p>
    </Button>
    </Link>
  );
}
