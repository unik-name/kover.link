import { NextPage } from "next";
import React from "react";

// import SettingsDeleteAccount from "../components/Settings/SettingsDeleteAccount";
// import SettingsPassword from "../components/Settings/SettingsPassword";
// import SettingsDomain from "../components/Settings/SettingsDomain";
import SettingsApi from "../components/Settings/SettingsApi";
import AppWrapper from "../components/AppWrapper";
import { H1
  // , Span
 } from "../components/Text";
import Divider from "../components/Divider";
import { Col } from "../components/Layout";
import Footer from "../components/Footer";
import { useStoreState } from "../store";
// import { Flex } from "reflexbox/styled-components";

const SettingsPage: NextPage = () => {
  const email = useStoreState(s => s.auth.email);
  const sub = useStoreState(s => s.auth.sub);
  
  // const changePassword = !sub && (
  //   <Flex>
  //     <Divider mt={4} mb={48} />
  //     <SettingsPassword />
  //   </Flex>
  // );

  return (
    <AppWrapper>
      <Col width={600} maxWidth="90%" alignItems="flex-start" pb={80} mt={4}>
        <H1 alignItems="center" fontSize={[24, 28]} light>
          Welcome,
        </H1>
        <Divider mt={4} mb={48} />
        {/* <SettingsDomain /> */}
        {/* { changePassword } */}
        <Divider mt={4} mb={48} />
        <SettingsApi />
        {/* <Divider mt={4} mb={48} /> */}
        {/* <SettingsDeleteAccount /> */}
      </Col>
      <Footer />
    </AppWrapper>
  );
};

export default SettingsPage;
