import styled from 'styled-components';

export const Container = styled.div`
   height: 30px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   cursor: pointer;

   div.menu-button {
      background-color: white;
      height: 2px;
      width: 20px;
      padding: 0;
      margin: 2.5px;
      transition: all ease 0.25s;
   }

   &.active {
      div.first-bar {
         transform: translate(1.5px, 3.5px) rotate(45deg);
      }

      div.second-bar {
         display: none;
      }

      div.third-bar {
         transform: translate(1.5px, -3.5px) rotate(-45deg);
      }
   }

   @media only screen and (min-width: 991px) {
      display: none;
   }
`;
