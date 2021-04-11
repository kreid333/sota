import { Link } from "gatsby"
import React from "react"
import HorizontalShades from "../../components/HorizontalShades/HorizontalShades"
import Layout from "../../components/Layout"

const horizontalshades = () => {
  return (
    <Layout title="Horizontal Shades">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3" style={{ padding: "20px" }}>
              Horizontal Shades
            </h1>
          </div>
        </div>
        <HorizontalShades />
        <Link to="/gallery">
          <button type="submit" className="globalBtn m-5">
            Go back
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export default horizontalshades
