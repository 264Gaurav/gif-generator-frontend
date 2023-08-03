import React from 'react';

const AboutUs = () => {
  return (
    <div className="text-white p-6 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    <p className="text-base mb-4">
      Welcome to our GIF converter website! Our goal is to provide a simple and efficient tool
      that allows you to convert video files into animated GIFs effortlessly.
    </p>
    <p className="text-base mb-4">
      Whether you want to create entertaining GIFs for social media or need to convert a video
      clip into a GIF for professional purposes, our platform is here to assist you.
    </p>
    <h2 className="text-2xl font-bold mb-2">Key Features:</h2>
    <ul className="list-disc list-inside mb-4">
      <li>Fast and easy video to GIF conversion</li>
      <li>Support for various video formats</li>
      <li>Customizable GIF settings, including size and frame rate</li>
      <li>No watermarks on converted GIFs</li>
      <li>User-friendly interface</li>
    </ul>
    <h2 className="text-2xl font-bold mb-2">The Team</h2>
    <p className="text-base mb-4">
      Our GIF converter website is built and maintained by a team of dedicated developers
      passionate about creating useful and fun online tools.
    </p>
    <p className="text-base mb-4">
      We believe in simplicity, efficiency, and providing value to our users. If you have any
      feedback or suggestions for improvement, please don't hesitate to get in touch with us!
    </p>
    <p className="text-base">
      Thank you for using our GIF converter. We hope it brings joy and creativity to your online experience.
    </p>
  </div>
  );
};

export default AboutUs;
