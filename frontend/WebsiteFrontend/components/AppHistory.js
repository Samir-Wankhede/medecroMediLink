import Link from "next/link";
import { Button } from "./ui/button";

export default function AppHistory() {
  return (
    <Link href="/models/user/AppointmentHistory">
    <Button
      variant="outline"
      className="min-w-[150px] text-base sm:text-lg md:text-2xl lg:text-3xl flex justify-center items-center border-2 border-blue-500 rounded-lg px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8 lg:px-12 lg:py-10 text-center text-black mx-auto whitespace-nowrap"
    >
      View Appointments
    </Button>
    </Link>
  );
}
