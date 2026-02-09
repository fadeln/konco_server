const db_information = {
  port: process.env.PORT,
  access_jwt_secret: process.env.ACCESS_JWT_SECRET,
};

const { port, access_jwt_secret } = db_information;

export { port, access_jwt_secret };
