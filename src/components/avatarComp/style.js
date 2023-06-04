import { styled } from "styled-components";

export const ContainerAvatar = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  position: relative;

img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }

  /* .avatar {
    position: relative;
    width: 250px;
    height: 250px;
    background-color: red;
  }

  .avatar img {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    animation: fadeAnimation 16s infinite;
    object-fit: cover;
  }

  .avatar img:nth-child(1) {
    animation-delay: 0s;
  }

  .avatar img:nth-child(2) {
    animation-delay: 2s;
  }

  .avatar img:nth-child(3) {
    animation-delay: 4s;
  }

  .avatar img:nth-child(4) {
    animation-delay: 6s;
  }

  .avatar img:nth-child(5) {
    animation-delay: 8s;
  }

  .avatar img:nth-child(6) {
    animation-delay: 10s;
  }

  .avatar img:nth-child(7) {
    animation-delay: 12s;
  }

  .avatar img:nth-child(8) {
    animation-delay: 14s;
  }

  @keyframes fadeAnimation {
    0% {
      opacity: 0;
    }    
    55% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  } */
`;
