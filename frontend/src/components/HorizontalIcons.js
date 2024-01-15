import React from 'react';
import Email from "../013-mail.svg";
import chat from "../029-chat.svg";
import github from "../icons8-github.svg";
import facebook from "../1482589369.svg";
import instagram from "../instagram.svg";
import youtube from "../youtube.svg";
import linkedin from "../1652445661linkedin-social-media-svgrepo-com.svg";
import Icon from "../components/Icon";

function HorizontalIcons() {
  return (
    <div className="col-sm-2" style={{ marginTop: '10px' }}>
      <div className="col-sm-2 cards" style={{ paddingBottom: '10px' }}>
        <a href="mailto:honza.prikryl.hp@gmail.com">
          <Icon src={Email} alt="Email"/>
        </a>
      </div>
      <div className="col-sm-2 cards" style={{ paddingBottom: '10px' }}>
        <a href="tel:+420738838972">
          <Icon src={chat} alt="Phone" />
        </a>
      </div>
      <div className="col-sm-2 cards" style={{ paddingBottom: '10px' }}>
        <a href="https://github.com/janprikryl1">
          <Icon src={github} alt="GitHub" />
        </a>
      </div>
      <div className="col-sm-2 cards" style={{ paddingBottom: '10px' }}>
        <a href="https://www.facebook.com/jan.prikryl.73/">
          <Icon src={facebook} alt="Facebook" />
        </a>
      </div>
      <div className="col-sm-2 cards" style={{ paddingBottom: '10px' }}>
        <a href="https://www.instagram.com/honzaprikryl1/">
          <Icon src={instagram} alt="Instagram" />
        </a>
      </div>
      <div className="col-sm-2 cards" style={{ paddingBottom: '10px' }}>
        <a href="https://www.youtube.com/channel/UCaBbMsxuzoJ7UjRtAoAcWdg">
          <Icon src={youtube} alt="YouTube" />
        </a>
      </div>
      <div className="col-sm-2 cards" style={{ paddingBottom: '10px' }}>
        <a href="https://www.linkedin.com/in/jan-přikryl-ba07b3207/">
          <Icon src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default HorizontalIcons;
