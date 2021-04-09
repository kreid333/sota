import React from 'react';
import Layout from '../../components/Layout';

const all = () => {
    return (
        <Layout title="All Window Treatments">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="m-3" style={{ padding: "20px" }}>
                All Window Treatments
              </h1>
            </div>
          </div>
        </div>
      </Layout>
    );
};

export default all;