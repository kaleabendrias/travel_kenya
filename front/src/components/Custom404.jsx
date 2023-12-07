import { Link } from "react-router-dom"
const Custom404 = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #1e1e1e, #000000)",
        backgroundSize: "cover",
      }}
    >
      <div className="d-flex align-items-center justify-content-center vh-100 text-white">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Link to="/" href="index.html" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Custom404