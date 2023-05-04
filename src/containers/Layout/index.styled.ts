import styled from "styled-components";

export const Container = styled.div`
   width: 100vw;
   /* height: calc(100vh - 200px); */
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-items: center;
   border: 5px solid black;

   h1 {
      width: 100%;
      text-align: center;
   }
`;