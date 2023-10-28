export interface adjustedRollType {
    businessOwner_id : string;
    minPercentageAllProducts : number;
    maxPercentageAllProducts : number;
    minPercentagePeak: number;
    maxPercentagePeak: number;
    giftValue: string;
    numberPurchaseGift: number;
    startDate : Date ;
    endDate : Date ;
    firstHour : string;
    firstMins : string;
    lastHour : string;
    lastMins : string;
    firstHourPeak:string;
    firstMinsPeak:string;
    lastHourPeak: string;
    lastMinsPeak: string;
    specialProducts: []
  }
  