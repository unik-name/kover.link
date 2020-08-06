import React, { FC } from "react";
import Icon from "./Icon";
import ALink from "./ALink";
import { APIv2 } from "../consts";
import { fadeIn } from "../helpers/animations";
import { Button } from "./Button";
import styled from "styled-components";
import { Flex } from "reflexbox/styled-components";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const OidcLogin = styled(Flex).attrs({
    as: "div",
    flexDirection: "column"
  })`
    animation: ${fadeIn} 0.8s ease-out;
  `;
  
  const OidcButtonLogo = styled.img`
    width: 20px;
    height: auto;
    margin-right: 1em;
  `;


  const UniknameLoginButton: FC = () => {
    return (
        <OidcLogin>        
            <ALink href={APIv2.AuthLoginOidc} title="login/signup oidc" forButton>
                <Button height={[32, 40]}>
                { publicRuntimeConfig.OIDC_BUTTON_LOGO_URL ? (
                    <OidcButtonLogo src={publicRuntimeConfig.OIDC_BUTTON_LOGO_URL} />
                ) : (
                    <Icon
                    name="login"
                    stroke="white"
                    mr={2}
                    />
                )}
                { publicRuntimeConfig.OIDC_BUTTON_LABEL }
                </Button>
            </ALink>
        </OidcLogin>
      )
  }

  export default UniknameLoginButton;