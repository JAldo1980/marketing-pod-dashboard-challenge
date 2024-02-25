import React, { useEffect, useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const users = data.users.map((user) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image,
          department: user.company.department,
          title: user.company.title,
        }));

        setUserData(users);
      });
  }, []);

  const handleDeleteUser = () => {
    const updatedUsers = userData.filter((user) => user.id !== selectedUser.id);
    setUserData(updatedUsers);
  };

  //   MODAL FUNCTION
  const handleCardClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="grid">
      {userData.map((user) => (
        <div
          className="user-card"
          key={user.id}
          id={user.id}
          onClick={() => handleCardClick(user)}
        >
          <img className="user-img" src={user.image} alt="user-image" />

          <div className="user-details-container">
            <p>
              <strong>Name:</strong> {user.firstName} {user.lastName}
            </p>
            <p>
              <strong>Department:</strong> {user.department}
            </p>
            <p>
              <strong>Title:</strong> {user.title}
            </p>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <Modal
          user={selectedUser}
          onClose={handleCloseModal}
          onDelete={() => {
            handleDeleteUser();
            handleCloseModal();
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
