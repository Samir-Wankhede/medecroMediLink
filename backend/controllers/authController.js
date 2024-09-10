import { prisma } from "../server.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;
const maxAge = 3 * 24 * 60 * 60
const createToken = (contact) => {
  return jwt.sign({contact},process.env.SECRET,{expiresIn: maxAge})
}

const handleUserSignup = async (req, res) => {
    const { firstName, lastName, contact, password, email, preferredLanguage, dateOfBirth, gender, address } = req.body;
  
    try {
      // Check if the user already exists
      const ifPresent = await prisma.user_data.findUnique({
        where: {
          phone_number: contact, // or email if using email as the contact field
        },
      });
  
      if (ifPresent) {
        return res.status(400).json({ error: "User already present, go to Sign In" });
      } else {
        // Hash the password
        const hash = await bcrypt.hash(password, saltRounds);
  
        // Create the user and the associated password
        const user = await prisma.user_data.create({
          data: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: contact,
            preferred_language: preferredLanguage,
            date_of_birth: dateOfBirth ? new Date(dateOfBirth) : null,
            gender: gender,
            address: address,
            user_password: {
              create: {
                password_hash: hash,
              },
            },
          },
        });
  
        // Create a JWT token
        const token = createToken(contact);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ firstName: user.first_name, lastName: user.last_name, contact });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  const handleUserSignin = async (req, res) => {
    const { contact, password } = req.body;
  
    try {
      const user = await prisma.user_data.findUnique({
        where: {
          phone_number: contact,
        },
        include: {
          user_password: true,
        },
      });
  
      if (user && user.user_password) {
        const storedHashedPassword = user.user_password.password_hash;
        const passwordMatch = await bcrypt.compare(password, storedHashedPassword);
        if (passwordMatch) {
          const token = createToken(contact);
          res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
          res.status(201).json({ firstName: user.first_name, lastName: user.last_name, contact });
        } else {
          res.status(400).json({ error: "Incorrect password" });
        }
      } else {
        res.status(400).json({ error: "User does not exist, go to Sign Up" });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
      console.log(err);
    }
  };
  const handleProfessionalSignup = async (req, res) => {
    const { name, contact, password, email, address, mapsLink, specialty, licenseNumber } = req.body;
  
    try {
      // Check if the medical professional already exists
      const ifPresent = await prisma.medical_professional.findUnique({
        where: {
          email: email, // Assuming email is unique
        },
      });
  
      if (ifPresent) {
        return res.status(400).json({ error: "Medical professional already present, go to Sign In" });
      } else {
        // Hash the password
        const hash = await bcrypt.hash(password, saltRounds);
  
        // Create the medical professional and the associated password
        const professional = await prisma.medical_professional.create({
          data: {
            name: name,
            email: email,
            phone_number: contact,
            address: address,
            maps_link: mapsLink,
            specialty: specialty,
            license_number: licenseNumber,
            medical_professional_password: {
              create: {
                password_hash: hash,
              },
            },
          },
        });
  
        // Create a JWT token
        const token = createToken(email);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ name: professional.name, email });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  const handleProfessionalSignin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the medical professional and include their password hash
      const professional = await prisma.medical_professional.findUnique({
        where: {
          email: email, // Assuming email is unique
        },
        include: {
          medical_professional_password: true,
        },
      });
  
      if (professional && professional.medical_professional_password) {
        const storedHashedPassword = professional.medical_professional_password.password_hash;
  
        // Compare the provided password with the stored hash
        const passwordMatch = await bcrypt.compare(password, storedHashedPassword);
  
        if (passwordMatch) {
          // Create a JWT token
          const token = createToken(email);
          res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
          res.status(201).json({ name: professional.name, email });
        } else {
          res.status(400).json({ error: "Incorrect password" });
        }
      } else {
        res.status(400).json({ error: "Medical professional does not exist, go to Sign Up" });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
      console.log(err);
    }
  };
        
const handleLogout = (req,res)=>{
    res.cookie('jwt','',{maxAge: 1})
    res.json({message: "Logged out"})
}

export{
    handleLogout,
    handleUserSignup,
    handleUserSignin,
    handleProfessionalSignup,
    handleProfessionalSignin,
}