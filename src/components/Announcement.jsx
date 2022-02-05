import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <div>
      <Container>15% discount coupon for new registration</Container>
    </div>
  );
};

export default Announcement;
