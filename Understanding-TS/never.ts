function generateError(messege: string, code: number): never {
  throw {
    message: messege,
    errorCode: code,
  };
  //while(true){} is also a function that never return
}
generateError("An error occurred!", 500);
