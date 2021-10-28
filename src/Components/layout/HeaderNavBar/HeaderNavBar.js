import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faBars } from '@fontawesome/free-solid-svg-icons';
import { faTwitter } from '@fontawesome/free-brands-svg-icons';
import {
  StyledContainer,
  StyledMenuItem,
  /*   StyledLine, */
  StyledButton,
  StyledLi,
  StyledTextPath,
} from './HeaderNavBar.styles';
import { Link } from 'react-router-dom';

const HeaderNavBar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  /*  const handleClickLi = () => {
    setIsOpen(!isOpen);
  }; */

  const navBar = data.links.map((link, index) => {
    return (
      <StyledMenuItem
        key={index}
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={handleClick}
      >
        <StyledTextPath>
          {/*   {link.textPath[0]} */}
          <Link to="/social">{link.textPath[0]}</Link>
          {/*      <StyledLine style={{ animationDelay: `${index * 0.1}s` }} /> */}
        </StyledTextPath>
      </StyledMenuItem>
    );
  });

  return (
    <StyledContainer>
      <StyledButton onClick={handleClick}>
        {isOpen ? (
          <span>close</span>
        ) : (
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        )}
      </StyledButton>
      {isOpen ? <StyledLi>{navBar}</StyledLi> : null}
    </StyledContainer>
  );
};

export default HeaderNavBar;
