import React from 'react';
import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';

const ReCaptcha = () => {
  if (process.env.NODE_ENV !== 'production'
    || !process.env.RECAPTCHA_SECRET_KEY
    || !process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
    return null;
  }

  return (
    <Flex
      margin="54px 0 16px"
      id="g-recaptcha"
      className="g-recaptcha"
      data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      data-callback="recaptchaCallback"
      data-size="invisible"
      data-badge="inline"
    />
  );
};

export default ReCaptcha;
