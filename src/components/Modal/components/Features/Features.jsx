import { BookingForm } from "../BookingForm/BookingForm";

import icon from "../../../../pictures/icons.svg"

import * as SC from "./Features.styled"

export const Features = ({ advert }) => {
  return (
    <SC.Container>
      <SC.Content>
        <SC.FeaturesWrap>
        {Object.entries(advert.details).map(([key, value]) => (
          <SC.FeaturesList>
            <SC.Icon>
              <use href={`${icon}#${key}`} />
            </SC.Icon>
            <li key={key}>{value} {key} </li>
          </SC.FeaturesList>
        ))}
      </SC.FeaturesWrap>
      <div>
        <SC.Header>Vehicle details</SC.Header>
        <SC.Divider />
        <SC.DetailsList>
          <SC.DetailsItem><SC.DetailsText>Form:</SC.DetailsText> {advert.form}</SC.DetailsItem>
          <SC.DetailsItem><SC.DetailsText>Length:</SC.DetailsText> {advert.length}</SC.DetailsItem>
          <SC.DetailsItem><SC.DetailsText>Width:</SC.DetailsText> {advert.width}</SC.DetailsItem>
          <SC.DetailsItem><SC.DetailsText>Height:</SC.DetailsText> {advert.height}</SC.DetailsItem>
          <SC.DetailsItem><SC.DetailsText>Tank: </SC.DetailsText>{advert.tank}</SC.DetailsItem>
          <SC.DetailsItem><SC.DetailsText>Consumption:</SC.DetailsText> {advert.consumption}</SC.DetailsItem>
        </SC.DetailsList>
      </div>
      </SC.Content>
      <BookingForm />
    </SC.Container>
  );
};