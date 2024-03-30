const bcrypt = require("bcrypt");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');

require("dotenv").config();

// signup route handler
exports.signup = async (req, res) => {
    try {
        // get data
        const { name, email, contactnumber, address, state, country, username, password} = req.body;
        // check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // secure password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Error in hashing password"
            });
        }

        // create entry for user
        const user = await User.create({
            name: {
                firstname: name.firstname,
                lastname: name.lastname
            },
            email,
            contactnumber,
            address: {
                street: address.street,
                city: address.city
            },
            state,
            country,
            username,
            password: hashedPassword,
            confirmpassword : hashedPassword,        
        });

        const sendEmail = (email, toEmail, subject, message) => {
            let transporter = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            });
        
            let mailOptions = {
                from: email,
                to: toEmail,
                subject: subject,
                text: message
            };
        
            transporter.sendMail(mailOptions, (error, _info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent successfully");
                }
            });
        };
        
        
        //send welcome email to user
        const userEmail = email;
        const userPassword = password;
        const emailSubject = "Welcome to our Platform!";
        const emailMessage = `Hi ${name.firstname},\n\nThank you for signing up. We are excited to have you on board!\n\nBest regards,\nGMS Team`;

        sendEmail(userEmail, userPassword, email, emailSubject, emailMessage);

        return res.status(200).json({
            success: true,
            message: "User created successfully"
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered, please try again later"
        });
    }
};




// login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please enter email and password",
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered",
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const payload = {
                email: user.email,
                id: user._id,
            };

            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });

            user.password = undefined;

            res.cookie("token", token, {
                expires: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours
                httpOnly: true,
            }).status(200).json({
                success: true,
                token,
                user,
                message: "User login successful",
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Incorrect email or password",
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};


//function to send email
const sendEmail = async (toEmail, subject, message) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });

        let mailOptions = {
            from: process.env.MAIL_USER,
            to: toEmail,
            subject: subject,
            text: message
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
        return info;
    } catch (error) {
        console.error("Error occurred while sending email:", error);
        throw error; 
    }
};


// Forgot password 
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Generate a unique reset token
        const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Save reset token and expiry timestamp in user document
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
        await user.save();

        // Construct the password reset URL
        const resetUrl = `http://gmsdomain.com/reset-password?token=${resetToken}`;
        console.log("token is :", resetToken);

        // Send password reset email to user
        const emailSubject = 'Password Reset Request';
        const emailMessage = `Please click the following link to reset your password: ${resetUrl}`;

        await sendEmail(user.email, emailSubject, emailMessage);

        return res.status(200).json({ success: true, message: 'Password reset instructions have been sent to your email' });
    } catch (error) {
        console.error('Error occurred while processing forgot password request:', error);
        return res.status(500).json({ success: false, message: 'Error occurred while processing forgot password request', error: error.message });
    }
};

// Reset password 
exports.resetPassword = async (req, res) => {
    try {
        const { token, newpassword } = req.body;

        // Verify the reset token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Check if token is valid and not expired
        if (!decodedToken || !decodedToken.userId || !decodedToken.exp || decodedToken.exp < Date.now() / 1000) {
            return res.status(400).json({ success: false, message: 'Invalid or expired reset token' });
        }

        // Find user by ID
        const user = await User.findById(decodedToken.userId);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newpassword, 10);

        // Update user's password
        user.password = hashedPassword;
        
        // Clear reset token and expiry timestamp
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        return res.status(200).json({ success: true, message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error occurred while resetting password:', error);
        return res.status(500).json({ success: false, message: 'Error occurred while resetting password', error: error.message });
    }
};

