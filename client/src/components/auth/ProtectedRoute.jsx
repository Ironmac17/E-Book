import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false;
  const loading = false;
  const location = useLocation();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#f9fafb",
        }}
      >
        <div className="book">
          <div className="inner">
            <div className="left"></div>
            <div className="middle"></div>
          </div>
          <ul>
            <li>
              <div className="lines"></div>
            </li>
            <li>
              <div className="lines"></div>
            </li>
            <li>
              <div className="lines"></div>
            </li>
            <li>
              <div className="lines"></div>
            </li>
            <li>
              <div className="lines"></div>
            </li>
            <li>
              <div className="lines"></div>
            </li>
            <li>
              <div className="lines"></div>
            </li>
            <li>
              <div className="lines"></div>
            </li>
          </ul>
        </div>

        <style>{`
    .book {
      position: relative;
      width: 75px;
      height: 50px;
      perspective: 1000px;
      transform-style: preserve-3d;
    }

    .book .inner {
      position: absolute;
      width: 100%;
      height: 100%;
      transform: rotateY(-15deg);
      transform-style: preserve-3d;
    }

    .book .left,
    .book .middle {
      position: absolute;
      width: 50%;
      height: 100%;
      border-radius: 6px;
    }

    .book .left {
      left: 0;
      background: linear-gradient(145deg, #4f46e5, #4338ca);
    }
      
    .book .middle {
      left: 50%;
      width: 3px;
      background: #312e81;
      transform: translateX(-50%);
      box-shadow: 0 0 6px rgba(0,0,0,0.3);
    }

    .book ul {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      transform-origin: left;
      transform-style: preserve-3d;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .book ul li {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #fffdf9;
      border-radius: 4px;
      transform-origin: left;
      box-shadow: 0 0 10px rgba(0,0,0,0.08);
      animation: flipBook 2s infinite ease-in-out;
      overflow: hidden;
    }

    /* Add 'text lines' effect */
    .book ul li .lines {
      width: 85%;
      height: 100%;
      margin: 10px auto;
      background: repeating-linear-gradient(
        to bottom,
        transparent 0px,
        transparent 4px,
        rgba(0,0,0,0.05) 5px,
        rgba(0,0,0,0.05) 6px
      );
      border-radius: 4px;
    }

    .book ul li:nth-child(1) { animation-delay: 0s; }
    .book ul li:nth-child(2) { animation-delay: 0.2s; }
    .book ul li:nth-child(3) { animation-delay: 0.4s; }
    .book ul li:nth-child(4) { animation-delay: 0.6s; }
    .book ul li:nth-child(5) { animation-delay: 0.8s; }
    .book ul li:nth-child(6) { animation-delay: 1s; }
    .book ul li:nth-child(7) { animation-delay: 1.2s; }
    .book ul li:nth-child(8) { animation-delay: 1.4s; }

    @keyframes flipBook {
      0% {
        transform: rotateY(0deg);
        opacity: 1;
      }
      50% {
        transform: rotateY(-160deg);
        opacity: 0.9;
      }
      100% {
        transform: rotateY(-180deg);
        opacity: 0;
      }
    }
  `}</style>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
