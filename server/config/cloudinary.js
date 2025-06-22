const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	console.log("XXXXXXXXXXXXXX")
	try {
		cloudinary.config({
      //!    ########   Configuring the Cloudinary to Upload MEDIA ########
      cloud_name: "ddvjbhs30",
      api_key: "241395357567986",
      api_secret: "7iVwe0FPRaVt5iqzi_k94dFPaGE",
    })
		console.log("XXXXXXXXXXXXXX")
	} catch (error) {
		console.log(error);
	}
};
