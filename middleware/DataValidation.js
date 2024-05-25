const DataValidation = (req,res,next) => {

    const {email,firstName,lastName,password,phoneNo} = req.body;

    const firstLetterUpperCaseRegex = /^[A-Z]/;
    const emailRegex = /@/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    const phoneNoRegex = /^\d{10}$/

    if(!firstLetterUpperCaseRegex.test(firstName)){

        const err = new Error("First letter of fist name should be capital");
        err.statusCode = 400;
        next(err);

    } else if (!firstLetterUpperCaseRegex.test(lastName)){

        const err = new Error("First letter of last name should be capital");
        err.statusCode = 400;
        next(err);

    } else if (!emailRegex.test(email)){

        const err = new Error("Please enter a valid email id");
        err.statusCode = 400;
        next(err);

    } else if (!passwordRegex.test(password)){

        const err = new Error("Please enter a valid password, the password should containe at least 8 characters, with one uppercase letter, one numeric character and one special character");
        err.statusCode = 400;
        next(err);

    } else if(!phoneNoRegex.test(phoneNo)){

        const err = new Error("Please enter a valid phone number");
        err.statusCode = 400;
        next(err);

    } else {

        next();

    }
}

module.exports = {DataValidation}