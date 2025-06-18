import React from 'react';
import Layout from '../Components/Layout/Layout';
import Navbar from '../Components/Navbar/Navbar';
import StatusBadge from '../Components/StatusBadge/StatusBadge';

const About = () => {
  return (
    <Layout>
      <Navbar />
      <h2>About Page</h2>
      <p>This website is built using React components, layout, and routing.</p>
      <p>Below are some status indicators:</p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <StatusBadge status="success" />
        <StatusBadge status="error" />
        <StatusBadge status="warning" />
      </div>
    </Layout>
  );
};

export default About;
