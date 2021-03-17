import React from "react";
import Moment from "react-moment";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 664px;
  height: 401px;
  border-radius: 8px;
  background: linear-gradient(180deg, #ffd057 0%, rgba(240, 190, 143, 0) 100%);
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  padding: 30px 30px 0 30px;
`;

const CardHeader = styled.div``;

const CardHeading = styled.h2`
  font-size: 36px;
  font-weight: 300;
  margin: 0;
`;

const CardSubHeading = styled.h5`
  font-size: 16px;
  font-weight: 300;
  margin: 10px 0 0 0;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 60px;
`;

const CardBodyHeading = styled.h1`
  font-size: 200px;
  font-weight: 300;
  margin: 0;
  display: inline-block;
  line-height: 167px;
`;

const CardBodyDegree = styled.span`
  font-size: 96px;
  font-weight: 300;
  margin: 0;
  display: inline-block;
`;

const CardBodyTemp = styled.div`
  display: flex;
  padding: 0 30px 0 0;
`;

const CardBodyContent = styled.div`
  display: inline-block;
  padding: 0 30px 0 0;
  text-align: center;
  position: relative;
`;

const CardBodyIcon = styled.img`
  width: 97px;
  height: 97px;
  margin-bottom: 30px;
`;

const CardBodyDescription = styled.h5`
  font-size: 16px;
  font-weight: 300;
  margin: 0;
`;

const CardBodyMinMax = styled.div`
  padding-top: 30px;
`;

const CardBodyMinMaxTemp = styled.h2`
  font-weight: 300;
  font-size: 36px;
  line-height: 41px;
  letter-spacing: 0.015em;
  text-transform: capitalize;
  display: inline-block;
  padding-right: 8px;
  margin: 26px 0 0 0;
`;

const CardFooter = styled.div`
  background: #21678e;
  border-radius: 0 0 8px 8px;
  height: 95px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  line-height: 18px;
`;

const CardFooterTemp = styled.p`
  font-size: 48px;
  text-transform: capitalize;
`;
const CardFooterForecastDescription = styled.p``;

const CardFooterHeading = styled.h4`
  font-size: 16px;
  margin: 0 0 8px 0;
  text-transform: capitalize;
`;

const CardFooterIcon = styled.img``;

interface Props {
  temp: String;
  description: String;
  icon: String;
  date: string;
  minTemp: String;
  maxTemp: String;
  forecastTemp: String;
  forecastDescription: String;
  forecastIcon: String;
  forecastdate: string;
}

const Card: React.FC<Props> = (props) => {
  return (
    <CardContainer>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Weather For The Day</CardHeading>
          <CardSubHeading>
            <Moment format="D MMMM">{props.date}</Moment>
          </CardSubHeading>
        </CardHeader>
        <CardBody>
          <CardBodyMinMax>
            <CardBodyMinMaxTemp>{props.maxTemp}° </CardBodyMinMaxTemp>High
            <CardBodyMinMaxTemp>{props.minTemp}° </CardBodyMinMaxTemp>Low
          </CardBodyMinMax>
          <CardBodyTemp>
            <CardBodyHeading>{props.temp}</CardBodyHeading>
            <CardBodyDegree>°</CardBodyDegree>
          </CardBodyTemp>
          <CardBodyContent>
            <CardBodyIcon
              alt="weather icon"
              src={`http://${props.icon}`}
            ></CardBodyIcon>
            <CardBodyDescription>{props.description}</CardBodyDescription>
          </CardBodyContent>
        </CardBody>
      </CardWrapper>
      <CardFooter>
        <div>
          <CardFooterHeading>Forecast For Tomorrow </CardFooterHeading>
          <Moment format="D MMMM">{props.forecastdate}</Moment>
        </div>
        <CardFooterTemp>{props.forecastTemp}°</CardFooterTemp>
        <CardFooterForecastDescription>
          {props.forecastDescription}
        </CardFooterForecastDescription>
        <CardFooterIcon
          alt="weather icon"
          src={`http://${props.forecastIcon}`}
        ></CardFooterIcon>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
