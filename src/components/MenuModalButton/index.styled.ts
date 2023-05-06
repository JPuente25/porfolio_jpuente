import styled from "styled-components";

export const Container = styled.div`
   height: 30px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   cursor: pointer;

   div {
      background-color: white;
      height: 2px;
      width: 20px;
      padding: 0;
      margin: 2.5px;
      transition: all ease 0.25s;

      &.first-bar.active {
         transform: translate(1.5px, 3.5px) rotate(45deg);
      }

      &.second-bar.active {
         display: none;
      }

      &.third-bar.active {
         transform: translate(1.5px, -3.5px) rotate(-45deg);
      }
   }

   @media only screen and (min-width: 991px) {
      display: none;
   }
`;