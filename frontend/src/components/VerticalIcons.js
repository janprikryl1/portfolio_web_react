import React from 'react';
import Email from "../../static/images/013-mail.svg";
import chat from "../../static/images/029-chat.svg";
import github from "../../static/images/icons8-github.svg";
import facebook from "../../static/images/1482589369.svg";
import instagram from "../../static/images/instagram.svg";
import youtube from "../../static/images/youtube.svg";
import linkedin from "../../static/images/1652445661linkedin-social-media-svgrepo-com.svg";
import Icon from "../components/Icon";

function VerticalIcons() {
  return (
    <div className="row" style={{bottom: '0', height: '10%', position: 'absolute'}} id="socials">
        <div className="col-sm-1 cards" style={{marginRight: '10px', marginLeft: '10px'}}>
        <a href="mailto:honza.prikryl.hp@gmail.com">
          <Icon src={Email} alt="Email"/>
        </a>
      </div>
      <div className="col-sm-1 cards" style={{marginRight: '10px', marginLeft: '10px'}}>
        <a href="tel:+420738838972">
          <Icon src={chat} alt="Phone" />
        </a>
      </div>
      <div className="col-sm-1 cards" style={{marginRight: '10px', marginLeft: '10px'}}>
        <a href="https://github.com/janprikryl1">
          <Icon src={github} alt="GitHub" />
        </a>
      </div>
      <div className="col-sm-1 cards" style={{marginRight: '10px', marginLeft: '10px'}}>
        <a href="https://www.facebook.com/jan.prikryl.73/">
          <Icon src={facebook} alt="Facebook" />
        </a>
      </div>
      <div className="col-sm-1 cards" style={{marginRight: '10px', marginLeft: '10px'}}>
        <a href="https://www.instagram.com/honzaprikryl1/">
          <Icon src={instagram} alt="Instagram" />
        </a>
      </div>
      <div className="col-sm-1 cards" style={{marginRight: '10px', marginLeft: '10px'}}>
        <a href="https://www.youtube.com/channel/UCaBbMsxuzoJ7UjRtAoAcWdg">
          <Icon src={youtube} alt="YouTube" />
        </a>
      </div>
      <div className="col-sm-1 cards" style={{marginRight: '10px', marginLeft: '10px'}}>
        <a href="https://www.linkedin.com/in/jan-přikryl-ba07b3207/">
          <Icon src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default VerticalIcons;
