import React from 'react';
import Layout from '../Components/Layout/Layout';
import Navbar from '../Components/Navbar/Navbar';
import StatusBadge from '../Components/StatusBadge/StatusBadge';

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <h2>Welcome to Home Page</h2>
      <p>Status Examples:</p>
      <StatusBadge status="success" />
      <StatusBadge status="error" />
      <StatusBadge status="warning" />
    </Layout>
  );
};

export default Home;
