import { ServerRespond } from './DataStreamer';

export interface Row {
     price_abc: 'float',
     price_def: 'float',
     ratio: 'float',
     timestamp: 'date',
     upper_bound: 'float',
     lower_bound: 'float',
     trigger_alert: 'float',
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]) {
    return serverResponds.map((el: any) => {
      return {
        stock: el.stock,
        top_ask_price: el.top_ask && el.top_ask.price || 0,
        timestamp: el.timestamp,
      };
    })
  }
}
