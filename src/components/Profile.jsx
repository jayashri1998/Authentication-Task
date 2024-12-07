import React from 'react';
import Img from '../assets/aaonisa.png'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Profile</h2>

        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4">
          {/* Profile Picture */}
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
            {/* Static profile initial */}
           <img src={Img} alt='aaonisa'/>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-800">John Doe</p>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-8">
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
