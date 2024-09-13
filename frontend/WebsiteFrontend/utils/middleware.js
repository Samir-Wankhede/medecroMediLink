// import { NextRequest, NextResponse } from "next/server";

// const noLoggedInroutes = ["/","/auth/Login","/auth/SignUp"]
// const userRoutes = ["/models/user","/models/user/ListOfHospitals","/models/user/AppointmentHistory","/models/user/AppointmentEnquiry"]
// const doctorRoutes = ["/models/doctor"]

// export default function middleware(req){
//     const user = JSON.parse(localStorage.getItem("user"))
//     console.log(user)
//     if(!user && (userRoutes.includes(req.nextUrl.pathname || doctorRoutes.includes(req.nextUrl.pathname)))){
//         const homeUrl = URL('/',req.nextUrl.orign);
//         return NextResponse.redirect(homeUrl.toString());
//     }
//     if(user && noLoggedInroutes.includes(req.nextUrl.pathname)){
//         const redirectUrl = URL(`/models/${user.role}`,req.nextUrl.orign);
//         return NextResponse.redirect(redirectUrl.toString());
//     }
//     if(user && user.role==="user" && doctorRoutes.includes(req.nextUrl.pathname)){
//         const redirectUrl = URL('/models/user',req.nextUrl.orign);
//         return NextResponse.redirect(redirectUrl.toString());
//     }
//     if(user && user.role==="doctor" && userRoutes.includes(req.nextUrl.pathname)){
//         const redirectUrl = URL('/models/doctor',req.nextUrl.orign);
//         return NextResponse.redirect(redirectUrl.toString());
//     }
//     return NextResponse.next();
// }