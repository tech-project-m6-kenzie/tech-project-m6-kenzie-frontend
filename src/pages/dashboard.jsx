import { HeaderComp } from "../components/Header/HeaderComp";
import { MainRender } from "../components/MainRender/MainRender";
import { RegisterContact } from "../components/RegisterContact/RegisterContact";
import { UserProfile } from "../components/UserProfile/UserProfile";
import Footermain from "../components/footer";

export const DashBoard = () => {
  return (
    <>
      <HeaderComp />
      <MainRender>
      <div className="dashboard-page">
      <UserProfile/>
        <RegisterContact/>
      </div>
      </MainRender>
      <Footermain/>
    </>
  );
};
