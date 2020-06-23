function generateError(messege, code) {
    throw {
        message: messege,
        errorCode: code
    };
}
generateError("An error occurred!", 500);
