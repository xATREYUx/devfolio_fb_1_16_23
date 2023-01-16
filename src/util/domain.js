export default process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : // "https://us-central1-devport-express-backend.cloudfunctions.net/app"
    process.env.NODE_ENV === "production" && "https://folio-9-26-21.web.app";
// "https://auth-skeleton-backend.herokuapp.com";
